/**
 * Created by yyj on 21/12/2016.
 */
import React, { PropTypes } from 'react';
import LoginBoxContainer from '../containers/LoginBoxContainer';

const LoginPage = ({ spinnerVisible }) => (
  <div>
    <LoginBoxContainer />
    {
      spinnerVisible ? <img src="/static/images/loading.gif" alt="loading" />
        : null
    }
  </div>
);
LoginPage.propTypes = {
  spinnerVisible: PropTypes.bool.isRequired,
};
export default LoginPage;
