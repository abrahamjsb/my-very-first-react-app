import React, {Component} from 'react';

class ActionMenu extends Component {
  render(){
    return (
      <div className="action-list">
        <h3>Applications</h3>
        <ul>
          <li><a>Tweet Deck</a></li>
          <li><a>YouTube List Player</a></li>
          <li><a>Gmail</a></li>
          <li><a>VideoCalls</a></li>
          <li><a>Games</a></li>
        </ul>
        <h3>To do Lists</h3>
        <span><a href="#">+ Add a new List</a></span>
        <ul>
          <li><a>Personal tasks</a></li>
          <li><a>Projects to do</a></li>
          <li><a>My own app</a></li>
          <li><a>Meetings with clients</a></li>
          <li><a>Dates</a></li>
        </ul>
      </div>
    )
  }
}
export default ActionMenu
