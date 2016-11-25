/**
 * TODO LIST APP
 */

var { Router,
  Route,
  IndexRoute,
  IndexLink,
  Link } = ReactRouter;
var destination = document.querySelector("#main");


var css = `
body {
  padding: 50px;
  background-color: #66CCFF;
  font-family: sans-serif;
}
.todoListMain .header input {
  width:70%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #FFF;
}
.todoListMain .header button {
  padding: 10px;
  font-size: 16px;
  margin: 10px;
  background-color: #0066FF;
  color: #FFF;
  border: 2px solid #0066FF;
}

.todoListMain .header button:hover {
  background-color: #003399;
  border: 2px solid #003399;
  cursor: pointer;
}
.todoListMain .theList {
  list-style: none;
  padding-left: 0;
  width: 255px;
}

.todoListMain .theList li {
  color: #333;
  background-color: rgba(255,255,255,.5);
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
}
`;
let style = document.createElement('style')
style.innerText = css;
document.getElementsByTagName('head')[0].appendChild(style);

let TodoItems = React.createClass({
  getDefaultProps: function () {
    return {
      entries: []
    }
  },

  render: function () {
    let items = this.props.entries.map((item)=>{
      return <li key={item.key}>{item.name}</li>
    });
    
    return (
      <ul className="theList">
        {items}
      </ul>
    )
  }
});

let TodoList = React.createClass({
  getInitialState: function () {
    return {
      items: []
    }
  },
  handleSubmit: function (e) {
    e.preventDefault();
    console.log(this.state.items);
    var itemArr = this.state.items;
    itemArr.push({
        name: this._inputElement.value,
        key: new Date().getTime()
    })
    this.setState({
      items:itemArr
    })
    this._inputElement.value = '';
  },
  render: function () {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.handleSubmit}> 
            <input type="text" name="newtodo" ref={(a) => this._inputElement = a} placeholder="enter task"/>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
})

ReactDOM.render(
  <div>
    <TodoList></TodoList>
  </div>,
  destination
);
