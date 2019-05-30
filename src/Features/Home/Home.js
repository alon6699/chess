import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row } from 'react-bootstrap';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <Jumbotron className="home">
        <Container>
          <Row className="justify-content-md-center">
            <Link className="home-link" to='/game'><h2>Game</h2></Link>
          </Row>
          <Row className="justify-content-md-center">
            <Link className="home-link" to='/options'><h2>Options</h2></Link>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
} 

export default Home;
