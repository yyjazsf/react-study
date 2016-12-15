/**
 *
 */
import React, { PropTypes } from 'react';
// import bgImg from './transparent.jpg';
//
// const style = {
//   backgroundImage: `url(${bgImg})`,
//   backgroundPosition: 'left top',
//   backgroundRepeat: 'no-repeat',
//   // backgroundSize: '',
// }

const App = props => (
  <div className="mdl-layout mdl-js-layout" >
    <header className="mdl-layout__header mdl-layout__header--transparent">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Github Finder</span>
      </div>
    </header>
    <main className="mdl-layout__content">
      {props.children}
    </main>
  </div>
);

App.propTypes = {
  children: PropTypes.object,
};

export default App;
