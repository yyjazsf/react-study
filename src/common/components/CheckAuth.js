/**
 * Created by yyj on 19/12/2016.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export default function requireAuthentication(Component, type) {
  class AuthenticatedComponent extends Component {
    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps() {
      this.checkAuth();
    }

    checkAuth() {
      if (type === 'auth') {
        if (!this.props.isAuth) {
          this.props.router.push('/');
        }
      } else {
        if (this.props.isAuth) {
          this.props.router.push('/');
        }
      }
    }

    render() {
      return (
        <div>
          {
            (type === 'auth') ?
              this.props.isAuth ? <Component {...this.props} /> : null
              : !this.props.isAuth ? <Component {...this.props} /> : null
          }
        </div>
      );
    }
  }
  AuthenticatedComponent.propTypes = {
    isAuth: PropTypes.bool,
    router: PropTypes.object.isRequired,
  };

  const mapStateToProps = state => ({
    isAuth: state.getIn(['user', 'isAuth']),
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
