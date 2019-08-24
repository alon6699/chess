import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Board.css';
import Square from './Square/Square';
import { addTodo } from '../../../Core/Board/Actions/actions';
import { sendMessage } from '../../../Core/Server/Actions/Server.action';

class Board extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.onSendMessage(this.props.server, 'hello');
  }

  convertIndexToPosition(index) {
    return {
      x: parseInt(index / this.props.board.length), 
      y: parseInt(index % this.props.board.length)
    };
  }

  handleClick(index) {
      console.log(index);
  }

  createBoard() {
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
    board: state.game.board,
    server: state.server
  })
  
  const mapActionToProps = (dispatch, props) => 
  bindActionCreators(
    {
      onSendMessage: sendMessage
    }, dispatch)
  
    const mergeProps = (propFromState, propsFromDispatch, ownProps) => {
  
    };
  export default connect(mapStateProps, mapActionToProps)(Board);