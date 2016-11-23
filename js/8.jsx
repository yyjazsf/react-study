/**
 * 状态
 * getInitialState
 * componentDidMount
 */
var LightningCounter = React.createClass({
  getInitialState: () => {
    return {
      strikes: 0
    };
  },
  timerTick:function(){
    this.setState({
      strikes: this.state.strikes + 1
    })
  },
  componentDidMount: function () {
    setInterval(this.timerTick, 1000)
  },
  render: function () {
    var counterStyle = {
      color: "#66FFFF",
      fontSize: 50
    };

    return (
      <h1 style={counterStyle}>{this.state.strikes}</h1>
    );
  }
});

var LightningCounterDisplay = React.createClass({
  render: function () {
    var commonStyle = {
        margin: 0,
        padding: 0
    };
    var divStyle = {
      width: 250,
      textAlign: "center",
      backgroundColor: "black",
      padding: 40,
      fontFamily: "sans-serif",
      color: "#999",
      borderRadius: 10
    };
    var textStyles = {
        emphasis: {
          fontSize: 38,
          ...commonStyle
        },
        smallEmphasis: {
          ...commonStyle
        },
        small: {
          fontSize: 17,
          opacity: 0.5,
          ...commonStyle
        }
    };
    return (
      <div style={divStyle}>
        <LightningCounter />
        <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
        <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
        <p style={textStyles.small}>(since you loaded this example)</p>
      </div>
    );
  }
});

ReactDOM.render(
  <LightningCounterDisplay />,
  document.querySelector("#main")
);