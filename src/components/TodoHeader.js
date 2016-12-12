/**
 * Created by yyj on 12/12/2016.
 */
import React, { Component } from 'react';
import TodoActions from '../actions/TodoActions';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: '',
      editing: false,
    };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    TodoActions.addTodo(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <h1>flux</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="TODO"
          />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}

export default TodoHeader;
