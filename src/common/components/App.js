/**
 * Created by yyj on 19/12/2016.
 */
import React, { PropTypes } from 'react';

const App = props => (
  <div className="demo-layout-transparent mdl-layout mdl-js-layout">
    <header className="mdl-layout__header mdl-layout__header--transparent">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Title</span>
        <div className="mdl-layout-spacer" />
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">0.0
            .3
            0.0...03...0Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">Title</span>
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
    <main className="mdl-layout__content">
      {props.children}
    </main>
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
