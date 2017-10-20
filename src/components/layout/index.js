import React from 'react'
import { connect } from 'dva'
import { Redirect } from 'dva/router'
import _ from 'lodash'

const MainLayout = ({
  children, auth, location, dispatch,
}) => {
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
    <div>
      <h2>I'm layout</h2>
      {auth.login ? children : null}
    </div>
  )
}

export default connect(({ auth }) => ({ auth }))(MainLayout)
