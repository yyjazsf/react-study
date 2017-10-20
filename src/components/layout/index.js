import React from 'react'
import { connect } from 'dva'

const MainLayout = ({
  children, auth, location, dispatch,
}) => (
  <div>
    <h2>I'm layout</h2>
    {auth.login ? children : null}
  </div>
)

export default connect(({ auth }) => ({ auth }))(MainLayout)
