import React from 'react'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { withRouter } from 'dva/router'

import style from './app.less'

let lastHref

const App = ({
  children,
  loading,
}) => {
  const href = window.location.href

  if (lastHref !== href) {
    window.scrollTo(0, 0)
    NProgress.start()
    if (!loading.global) {
      NProgress.done()
      lastHref = href
    }
  }

  return children
}

export default withRouter(connect(({ global, loading }) => ({ global, loading }))(App))
