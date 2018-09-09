import React, { Component } from 'react';
import MainScreen from './screens/main_screen';

export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MainScreen/>
    );
  }
}
