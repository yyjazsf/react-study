import React from 'react'
import { Link } from 'dva/router'

function ErrorPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p><Link to="/app/index">go home</Link></p>
    </div>
  )
}

export default ErrorPage
