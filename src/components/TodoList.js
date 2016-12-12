/**
 * Created by yyj on 12/12/2016.
 */
import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';

function getTodos() {
  return {
    todos: TodoStore.getTodos(),
  };
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    TodoStore.addChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState(getTodos());
  }

  render() {
    return (
      <ul>
        {
          this.state.todos.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))
        }
      </ul>
    );
  }

}

export default TodoList;
