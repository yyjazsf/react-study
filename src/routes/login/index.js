import React, { Component } from 'react'
import { connect } from 'dva'
import { Redirect } from 'dva/router'
import PropTypes from 'prop-types'
import { Button, Row, Form, Input } from 'antd'
import config from '../../utils/config'

import style from './login.less'

const FormItem = Form.Item

// if use stateless function,it has a bug 'stateless function don't refs ...,because antd'
// https://github.com/facebook/react/issues/10831
@connect(({ loading, auth }) => ({ loading: loading.effects['auth/login'], auth }))
@Form.create()
export default class Login extends Component {
  static propTypes = {
    form: PropTypes.object,
    dispatch: PropTypes.func,
    loading: PropTypes.bool,
  }

  handleOk=() => {
    const {
      dispatch,
      location,
      form: {
        validateFields,
      },
    } = this.props

    validateFields((errors, value) => {
      if (errors) {
        return
      }

      dispatch({
        type: 'auth/login',
        payload: value,
      })
    })
  }

  render() {
    const {
      loading,
      auth,
      location,
      form: {
        getFieldDecorator,
      },
    } = this.props
    const { from } = location.state || { from: { pathname: '/app/index' } }
    if (auth.login) {
      return <Redirect to={from} />
    }

    return (
      <div className={style.container}>
        <div className={style.login}>
          <div className={style.logo}>
            <img alt="logo" src="/assets/logo.png" />
            <span>{config.name}</span>
          </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                initialValue: 'root',
                rules: [
                  {
                    required: true,
                  },
                ],
            })(<Input size="large" onPressEnter={this.handleOk} placeholder="Username" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                initialValue: 'root',
                rules: [
                  {
                    required: true,
                  },
                ],
            })(<Input size="large" type="password" onPressEnter={this.handleOk} placeholder="Password" />)}
            </FormItem>
            <div>
              <Button
                type="primary"
                size="large"
                onClick={this.handleOk}
                loading={loading}
              >
              Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
