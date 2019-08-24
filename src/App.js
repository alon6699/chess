import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';
import Routing from './Features/Routing/Routing';
import { initServer } from './Core/Server/Actions/Server.action';

class App extends Component {
  componentDidMount() {
    this.props.onInitServer();
  }
  
  render() {
    return (
      <Routing></Routing>
    );
  }
}

  const mapStateProps = (state, props) => ({
    server: state.server
  })
  
  const mapActionToProps = (dispatch, props) => 
  bindActionCreators(
    {
      onInitServer : initServer
    }, dispatch)
  
    const mergeProps = (propFromState, propsFromDispatch, ownProps) => {
  
    };
  export default connect(mapStateProps, mapActionToProps)(App);
  
