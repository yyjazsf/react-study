/**
 * 路由
 */
let css = ` body {
  background-color: #FFCC00;
  padding: 20px;
  margin: 0;
}
h1, h2, p, ul, li {
  font-family: Helvetica, Arial, sans-serif;
}
ul.header li {
  display: inline;
  list-style-type: none;
  margin: 0;
}
ul.header {
  background-color: #111;
  padding: 0;
}
ul.header li a {
  color: #FFF;
  font-weight: bold;
  text-decoration: none;
  padding: 20px;
  display: inline-block;
}
.content {
  background-color: #FFF;
  padding: 20px;
}
.content h2 {
  padding: 0;
  margin: 0;
}
.content li {
  margin-bottom: 10px;
}
.active {
  background-color: #0099FF;
}`;
let style = document.createElement('style')
style.innerText = css;
document.getElementsByTagName('head')[0].appendChild(style);

var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link } = ReactRouter;
var destination = document.querySelector("#main");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><IndexLink to="/react/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});
var Home = React.createClass({
  render: function() {
      return (
        <div>
          <h2>HELLO</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      );
    }
});
var Contact = React.createClass({
  render: function() {
      return (
        <div>
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is post on
          our <Link to="/stuff/StuffInfo">Home</Link>
          </p>
        </div>
      );
    }
});

var Stuff = React.createClass({
  render: function() {
      return (
        <div>
          <h2>STUFF</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});
var StuffInfo = React.createClass({
  render: function() {
      return (
        <div>
         <h1>{this.props.name}</h1>
        </div>
      );
    }
});
ReactDOM.render(
    <div>
      <Router history={ReactRouter.browserHistory}>
        <Route path="/react/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/stuff" component={Stuff} >
            <Route path="/StuffInfo" component={StuffInfo} name="ying yujia" />
          </Route>
          <Route path="/contact" component={Contact} />
        </Route>
      </Router>
    </div>,
    destination
);
