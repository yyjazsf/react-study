import React from 'react'
import { Route, Redirect } from 'dva/router'
import { connect } from 'dva'

class AuthorizedRoute extends React.Component {
  componentWillMount() {
    // getLoggedUser()
  }

  render() {
    const {
      component: Component,
      auth,
      ...rest
    } = this.props
    console.log('auth component', this.props)
    return (
      <Route
        {...rest}
        render={
          props => (
            auth.login ? <Component {...this.props} /> :
            <Redirect
              to={{
                  pathname: '/',
                  state: { from: props.location },
                }}
            />)
        }
      />
    )
  }
}

export default connect(({ auth }) => ({ auth }))(AuthorizedRoute)
