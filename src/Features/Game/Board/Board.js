import React from 'react';
import { ButtonGroup } from 'react-bootstrap';

import './Board.css';
import Square from './Square/Square';

class Board extends React.Component {
    renderSquare(i, isBlack) {
      return <Square key={i} value={i} isBlack={isBlack} className="square" />;
    }

    createBoard(rows) {
        let isBlack = false;
        const board = [];
        for (let i = 0; i < rows; i++) {
            let children = [];
            for (let j = 0; j < rows; j++) {
              children.push(this.renderSquare((i* rows) + j), isBlack);
            }
            board.push(<ButtonGroup toggle >{children}</ButtonGroup>);
            isBlack = !isBlack;
          }
        return <div className="d-flex flex-column">{board}</div>;
    }
  
    render() {
      return (
          this.createBoard(8)
      );
    }
  }

  export default Board;