import React, {Component} from 'react';

const ActionMenu = (props) =>  (
      <div className="action-list">
        <h4>Dashboard</h4>
        <h4>Applications</h4>
        <ul>
          <li><a>Tweet Deck</a></li>
          <li><a>YouTube List Player</a></li>
          <li><a>Gmail</a></li>
          <li><a>VideoCalls</a></li>
          <li><a>Games</a></li>
        </ul>
        <h4>To do Lists</h4>
        <span><a href="#" onClick={props.clickFormHandler}>+ Add a new List</a></span>
        <input type="text" className={props.showForm? "":"hide"} onChange={props.newTodoList} value={props.listName} />
        <ul>
          {props.todos.map((todo)=>(<li key={todo.id}><a>{todo.listName}</a></li>))}
        </ul>
      </div>
    );
export default ActionMenu
