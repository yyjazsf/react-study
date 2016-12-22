/**
 * Created by yyj on 20/12/2016.
 */
import React, { PropTypes } from 'react';

const LoginBox = ({
  onChangeEmailInput,
  onChangePasswordInput,
  onLoginSubmit,
}) => (
  <form onSubmit={onLoginSubmit}>
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input
        className="mdl-textfield__input"
        type="text"
        id="email"
        onChange={onChangeEmailInput}
      />
      <label className="mdl-textfield__label" htmlFor="email">email</label>
    </div>
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input
        className="mdl-textfield__input"
        type="password"
        id="pwd"
        onChange={onChangePasswordInput}
      />
      <label className="mdl-textfield__label" htmlFor="pwd">password</label>
    </div>
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
      submit
    </button>
  </form>
);

LoginBox.propTypes = {
  onChangeEmailInput: PropTypes.func.isRequired,
  onChangePasswordInput: PropTypes.func.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
}

export default LoginBox;
