import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './Routing.css';
import Game from '../Game/Game';
import Options from '../Options/Options';
import Home from '../Home/Home';

class Routing extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/game' component={Game}/>
        <Route path='/options' component={Options}/>
      </Switch>
    );
  }
}

export default Routing;
