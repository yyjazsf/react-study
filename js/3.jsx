/**
 * 组件
 */
// http://www.zcfy.cc/article/components-in-react-1524.html
var main = document.getElementById('main');

var HelloWorld = React.createClass({
  render:function(){
    console.log(this.props);
    return (
      <p>hello {this.props.greetTarget}</p>
    );
  }
})

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="yyj" name="xxxx">
      <div>
      </div>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
    </HelloWorld>
    <HelloWorld greetTarget="xxg">
      什么鬼
    </HelloWorld>
    <HelloWorld greetTarget="zsf"/>
    <HelloWorld greetTarget="zry"/>
    <HelloWorld greetTarget="aaa"/>
    <HelloWorld greetTarget="bbb"/>
    <HelloWorld greetTarget="ccc"/>
  </div>,
  main
)

