import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './Game.css';
import Board from './Board/Board';

class Game extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Row className="justify-content-md-center">
            <Board></Board>
        </Row>
        <Row className="justify-content-md-center">
        <Col md="auto" xs="auto" lg="auto" ><Link to='/'>back</Link></Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
