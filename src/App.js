import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import Game from './Game/Game';

class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path='/' component={Game}/>
      {/* <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/> */}
    </Switch>
      // <Container>
      //   <Row className="justify-content-md-center">
      //   play
      //   </Row>
      //   <Row className="justify-content-md-center">
      //   options
      //   </Row>
      //   <Game></Game>
      // </Container>
    );
  }
}


export default App;
