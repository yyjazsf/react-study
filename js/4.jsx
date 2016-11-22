/**
 * 
 */
 var Letter = React.createClass({
    render: function() {
      var itemStyle ={
        padding: 10,
        margin: 10,
        backgroundColor: this.props.bgcolor,
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
      }
      return (
        <div style={itemStyle}>
          {this.props.children}
        </div>
      );
    }
  });

  var destination = document.getElementById('main');

  ReactDOM.render(
    <div>
      <Letter bgcolor="#58B3FF">A</Letter>
      <Letter bgcolor="#FF605F">E</Letter>
      <Letter bgcolor="#FFD52E">I</Letter>
      <Letter bgcolor="#49DD8E">O</Letter>
      <Letter bgcolor="#AE99FF">U</Letter>
    </div>,
    destination
  );
  
