import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import Game from './Game/Game';
import Options from './Options/Options';
import Home from './Home/Home';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <header>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/game' component={Game}/>
      <Route path='/options' component={Options}/> */}
    </Switch>
    </header>

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
