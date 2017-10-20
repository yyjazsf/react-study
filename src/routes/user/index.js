import React from 'react'
import { connect } from 'dva'

function User({ user, loading }) {
  return (
    <div>
      <h1>user</h1>
    </div>
  )
}

export default connect(({ user, loading }) => ({ user, loading }))(User)
