/**
 * http://www.zcfy.cc/article/the-component-lifecycle-1545.html
 * 组件的生命周期
 * componentWillMount, componentDidMount, componentWillUnmount, componentWillUpdate, componentDidUpdate, shouldComponentUpdate, componentWillReceiveProps
 * getInitialState getDefaultProps render
 */


var destination = document.querySelector("#main");
var Counter = React.createClass({
  render: function() {
    var textStyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"
    };

    return (
        <div style={textStyle}>
          {this.props.display}
        </div>
    );
  }
});

var CounterParent = React.createClass({
  getDefaultProps: function(){ // this.props 的默认值
    console.log("getDefaultProps: Default prop time!");
    return {};
  },
  getInitialState: function() { //组件被创建前 this.state的默认值
    console.log("getInitialState: Default state time!");
    return {
      count: 0
    };
  },
  increase: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  componentWillUpdate: function(newProps, newState) { // 将要被更新之前被调用,不能在这个方法中通过调用 this.setState 来修改状态
    console.log("componentWillUpdate: Component is about to update!");
  },
  componentDidUpdate: function(currentProps, currentState) {
    console.log("componentDidUpdate: Component just updated!");
  },
  componentWillMount: function() { // 组件被渲染到 DOM 之前被调用的最后一个方法,如果在这个方法中调用 setState，那么组件是不会被重新渲染
    console.log("componentWillMount: Component is about to mount!");
  },
  componentDidMount: function() { // 组件渲染并且放到 DOM 后，该方法会立即被调用
    console.log("componentDidMount: Component just mounted!");
  },
  componentWillUnmount: function() { // 执行清理相关的任务，比如移除事件监听器、停止计数器等等
    console.log("componentWillUnmount: Component is about to be removed from the DOM!");
  },
  shouldComponentUpdate: function(newProps, newState) { //
    console.log("shouldComponentUpdate: Should component update?");

    if (newState.count < 5) {
      console.log("shouldComponentUpdate: Component should update!");
      return true;
    } else {
      ReactDOM.unmountComponentAtNode(destination);
      console.log("shouldComponentUpdate: Component should not update!");
      return false;
    }
  },
  componentWillReceiveProps: function(newProps){
    console.log("componentWillReceiveProps: Component will get new props!");
  },
  render: function() { // 返回单个根 HTML 节点（该节点内部可以有很多字节点）。如果我们不想渲染任何东西，让它返回 null 或者 false 即可。
    var backgroundStyle = {
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 100,
      borderRadius: 10,
      textAlign: "center"
    };
    var buttonStyle = {
      fontSize: "1em",
      border:"none",
      width: 30,
      height: 30,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"
    };
    return (
        <div style={backgroundStyle}>
          <Counter display={this.state.count}/>
          <button onClick={this.increase} style={buttonStyle}>
            +
          </button>
        </div>
    );
  }
});
ReactDOM.render(
    <div>
      <CounterParent/>
    </div>,
    destination
);
