/**
 * https://facebook.github.io/react/docs/events.html
 * 交互，绑定事件
 */
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
  getInitialState: function() {
    return {
      count: 0
    };
  },
  increase:function (e) {
    console.log(e);
    var currentCount = this.state.count;
    if (e.shiftKey) {
      currentCount += 10;
    } else {
      currentCount += 1;
    }
    this.setState({
      count: currentCount
    });
  },
  handleMyEvent: function(e) {//
    console.log('自定义事件',this)
  },
  componentDidMount: function() {
    window.addEventListener("someEvent", this.handleMyEvent,false);
  },
  componentWillUnmount: function() {
    window.removeEventListener("someEvent", this.handleMyEvent,false);
  },
  render: function() {
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
          <button onClick={(e) => {this.increase(e);}} style={buttonStyle}>+</button>
        </div>
    );
  }
});

ReactDOM.render(
    <div>
      <CounterParent/>
    </div>,
    document.querySelector("#main")
);
