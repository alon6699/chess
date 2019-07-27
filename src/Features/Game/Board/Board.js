import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Board.css';
import Square from './Square/Square';
import { addTodo, getBoard } from '../../../Core/Board/Actions/actions';

class Board extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onUpdateBoard = this.onUpdateBoard.bind(this);
  }

  componentDidMount() {
    this.props.onGetBoard();
  }

  onUpdateBoard() {
    this.props.onUpdateBoard(['start']);
  }

  convertIndexToPosition(index) {
    return {
      x: parseInt(index / this.props.board.length), 
      y: parseInt(index % this.props.board.length)
    };
  }

  handleClick(index) {
    const board = this.props.board.slice();
    const position = this.convertIndexToPosition(index);
    board[position.x][position.y] = {
      name: 'king',
      isWhite: false
    };
  }

  createBoard() {
    console.log(this.props);
      const black = "black";
      const white = "white";
      let isBlack = false;
      const board = [];
      this.props.board.forEach((row, rowIndex) => {
        let children = [];
        row.forEach((piece, pieceIndex) => {
          const key = (rowIndex* this.props.board.length) + pieceIndex;
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

  const mapStateProps = (state, props) => ({
    board: state.board
  })
  
  const mapActionToProps = (dispatch, props) => 
  bindActionCreators(
    {
      onUpdateBoard : addTodo,
      onGetBoard: getBoard
    }, dispatch)
  
    const mergeProps = (propFromState, propsFromDispatch, ownProps) => {
  
    };
  export default connect(mapStateProps, mapActionToProps)(Board);