import React from 'react';
import { ToggleButton } from 'react-bootstrap';

import './Square.css';

class Square extends React.Component {
    render() {
      const isWhite = this.props.piece.isWhite ? 'white' : 'black';
      const name = this.props.piece.name;
      return (
        <ToggleButton 
        type="radio" 
        name="radio" 
        defaultChecked 
        value="1" 
        className="square"
        onClick={() => this.props.onclick()}
          >
         <img 
         src={require('Assets/pieces/' + isWhite + '_' + name + '.png')} 
         alt="piece" 
         className="piece"
         style={{backgroundColor: this.props.background}}
         ></img>
        </ToggleButton>
      );
    }
  }

  export default Square;