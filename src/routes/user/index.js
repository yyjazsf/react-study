import React from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'

function User({ user, loading, match }) {
  return (
    <div>
      <h1>user</h1>
      <ul>
        <li><Link to="/user/yyj">晚上吃鸡-yyj</Link></li>
        <li><Link to="/user/who">who</Link></li>
        <li><Link to="/user/xxg">xxg</Link></li>
      </ul>
      <div>
        <h2>用户{match.params.username ? match.params.username : null}</h2>
      </div>
    </div>
  )
}

export default connect(({ user, loading }) => ({ user, loading }))(User)
