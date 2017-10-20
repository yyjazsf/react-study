import React from 'react'
import { Route, Redirect } from 'dva/router'
import { connect } from 'dva'
import _ from 'lodash'

class AuthorizedRoute extends React.Component {
  componentWillMount() {
    // getLoggedUser()
  }

  render() {
    const {
      component: Component,
      auth,
      dispatch,
      location,
      ...rest
    } = this.props

    if (!auth.login) {
      const user = JSON.parse(window.localStorage.getItem('user'))
      if (_.isObject(user)) {
        // check token form with server? or when do some action
        dispatch({
          type: 'auth/updateState',
          payload: {
            login: true,
          },
        })
      } else {
        return (<Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />)
      }
    }

    return (
      <Route
        {...rest}
        render={
          props => (auth.login ? <Component {...props} /> : null)
        }
      />
    )
  }
}

export default connect(({ auth }) => ({ auth }))(AuthorizedRoute)
