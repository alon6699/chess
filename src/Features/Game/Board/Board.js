import React from 'react';
import { ButtonGroup } from 'react-bootstrap';

import './Board.css';
import Square from './Square/Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    const piece = {
      name: 'queen',
      isWhite: false
    }
    
    const board = [];
    for (let i = 0; i < 8; i++) {
      const children = [];
      for (let j = 0; j < 8; j++) {
        children.push(piece);
      }
      board.push(children);
    }

    this.state = {board};
  }

  convertIndexToPosition(index) {
    return {
      x: parseInt(index / this.state.board.length), 
      y: parseInt(index % this.state.board.length)
    };
  }

  handleClick(index) {
    const board = this.state.board.slice();
    const position = this.convertIndexToPosition(index);
    board[position.x][position.y] = {
      name: 'king',
      isWhite: false
    };
    this.setState({board: board});
  }

  createBoard() {
      const black = "black";
      const white = "white";
      let isBlack = false;
      const board = [];
      this.state.board.forEach((row, rowIndex) => {
        let children = [];
        row.forEach((piece, pieceIndex) => {
          const key = (rowIndex* this.state.board.length) + pieceIndex;
          children.push(
          <Square 
          key={key.toString()}
          value = {key}
          background={isBlack? black: white} 
          piece={piece} 
          className="square"
          onclick = {() => this.handleClick(key)}
           />
          );
          isBlack = !isBlack;
        });
        isBlack = !isBlack;
        board.push(<ButtonGroup toggle >{children}</ButtonGroup>);
      });
      return <div className="d-flex flex-column">{board}</div>;
  }
  
    render() {
      return (
        this.createBoard()
      );
    }
  }

  export default Board;