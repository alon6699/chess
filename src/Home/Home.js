import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/game'>Game</Link></li>
          <li><Link to='/options'>Options</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Home;
