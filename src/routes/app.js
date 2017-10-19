import React, { Component } from 'react'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import { withRouter, Redirect } from 'dva/router'

import style from './app.less'

let lastHref

class App extends Component {
  // state={
  //   hasError: false,
  // }
  componentDidCatch(error, info) {
    // Display fallback UI
    // this.setState({ hasError: true })
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info)

    console.log('componentDidCatch', error)
  }

  render() {
    const {
      children, loading,
    } = this.props
    console.log(this.props)
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
}
// const App = () => {
//   const href = window.location.href

//   if (lastHref !== href) {
//     window.scrollTo(0, 0)
//     NProgress.start()
//     if (!loading.global) {
//       NProgress.done()
//       lastHref = href
//     }
//   }

//   return (
//     <div className={style.content}>
//       {children}
//     </div>
//   )
// }

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
