import React from 'react';
import { ToggleButton } from 'react-bootstrap';

import './Square.css';

class Square extends React.Component {
    render() {
      return (
        <ToggleButton type="radio" name="radio" defaultChecked value="1" className="square">
         <img src={require('Assets/pieces/black_bishop.png')} alt="piece" className="piece"></img>
        </ToggleButton>
      );
    }
  }

  export default Square;