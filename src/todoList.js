/**
 * Created by yyj on 07/12/2016.
 */

import React, {Component} from 'react';

const TodoList = (props) =>(
   <ul>
    {
      props.items.map((item) => ( //这里得 圆括号  相当于 () => { return xxx;}
        <li key={item.id}>{item.text}</li>
      ))
    }
  </ul>
);

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      items: [],
      text : ''
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const nextItems = this.state.items.concat([{
      text: this.state.text,
      id  : Date.now()
    }]);

    const nextText = '';
    this.setState({
      items: nextItems,
      text : nextText
    });

  }

  render() {

    return (
      <div>
        <h3>todo</h3>
        <TodoList items={this.state.items}></TodoList>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text}/>
          <button>{'Add #' + (this.state.items.length + 1)}</button>

        </form>
      </div>
    )
  }

}

export default TodoApp;