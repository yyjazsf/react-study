import React from 'react'
import { connect } from 'dva'

import style from './login.less'

function Home() {
  return (
    <div className={style.container}>
      login
    </div>
  )
}

export default connect()(Home)
