import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

import './Options.css';

class Options extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
        Options
        </Row>
        <Row className="justify-content-md-center">
        <Link to='/'>back</Link>
        </Row>
      </Container>
    );
  }
}


export default Options;
