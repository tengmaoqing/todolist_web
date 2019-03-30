import React, { Component } from 'react'
import Login from './login'
import { Redirect } from 'react-router-dom'

class LoginIndex extends Component {
  state = { redirectToReferrer: false }

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } }
    let { redirectToReferrer } = this.state

    if (redirectToReferrer) return <Redirect tp={from}></Redirect>
    return <Login />
  }
}

export default LoginIndex
