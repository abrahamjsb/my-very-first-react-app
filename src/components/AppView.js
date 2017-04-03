import React, {Component} from 'react';
import ActionMenu from './ActionMenu.js';
import ActionView from './ActionView.js';

class AppView extends Component {
  render(){
    return(
      <section className="flex-display">
        <ActionMenu />
        <ActionView />
      </section>
    )
  }
}

export default AppView
