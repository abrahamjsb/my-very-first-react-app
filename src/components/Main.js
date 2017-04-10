import React, {Component} from 'react';
import Header from './header/Header.js';
import AppView from './AppView.js';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <AppView />
      </div>
    )
  }
}
export default Main
