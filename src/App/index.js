import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class App extends Component {
  constructor(props) {
    super(props);
    this.a = '1';
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/repos/react-router">Repos/react-router</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/immutable">immutable demo</Link></li>
        </ul>
        <section id="main">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default App;
// const App = props => (
//   <div>
//     <ul>
//       <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
//       <li><Link to="/repos/react-router">Repos/react-router</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/user">User</Link></li>
//       <li><Link to="/contacts">Contacts</Link></li>
//     </ul>
//     <section id="main">
//       {props.children}
//     </section>
//   </div>
// );

App.propTypes = {
  children: React.PropTypes.object,
};
// class App extends Component {
//   render() {
//     return (
//     );
//   }
// }

// export default App;
