import React, {Component} from 'react';
import ActionMenu from './ActionMenu.js';
import ActionView from './ActionView.js';

class AppView extends Component {
  constructor() {
    super();
    this.state = {
      page: ['dashboard'],
      showForm: false,
      todosList: [{id:"1", listName:"Personal tasks"}, {id:"2", listName:"Current Projects"}, {id:"3", listName:"Meetings with clients"}, {id:"4", listName:"Dates"} ],
      inputValue: ""
    }
    this.handlerClick = this.handlerClick.bind(this);
    this.handlerNewTodoList = this.handlerNewTodoList.bind(this);
  }

  //Show or hide form to add a new to do list
  handlerClick(e) {
    e.preventDefault();
    let newVal = this.state.showForm ? false : true;
    this.setState({
      showForm: newVal
    });
  }

  handlerNewTodoList(e) {
    e.preventDefault();
    this.setState({inputValue: e.target.value});
  }
  render(){
    return(
      <section className="flex-display">
        <ActionMenu showForm={this.state.showForm}
                    clickFormHandler={this.handlerClick}
                    todos={this.state.todosList}
                    inputValue={this.state.inputValue}
                    newTodoList={this.handlerNewTodoList} />
        <ActionView app-section={this.state.page} />
      </section>
    )
  }
}

export default AppView
