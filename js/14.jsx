/**
 * ref and refs
 */

var { Router,
  Route,
  IndexRoute,
  IndexLink,
  Link } = ReactRouter;
var destination = document.querySelector("#main");

let Colorizer = React.createClass({
  getInitialState:function(){
    return {
      color: '',
      bgColor: '#fff'
    }
  },
  setNewColor:function(e){
    e.preventDefault()
    this.setState({
      bgColor:this._input.value
    })
    this._input.value = "";
    this._input.focus();
    console.log(this.refs);
  },
  render:function(){
    var squareStyle = {
        backgroundColor: this.state.bgColor,
        height:50
    };
    return (
        <div className="colorArea">
            <div style={squareStyle} className="colorSquare"></div>
            <form onSubmit={this.setNewColor}>
                <input ref={(el)=>this._input = el} 
                    placeholder="Enter a color value">
                </input>
                <button type="submit">go</button>
            </form>
        </div>
    );
  }
})

ReactDOM.render(
  <div>
    <Colorizer></Colorizer>
  </div>,
  destination
);
