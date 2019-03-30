import fetch, { logout, login } from '../../apis/index'

const Authentication = {
  isAuthenticated: false,
  doAuthenticate(params) {
    return fetch(login, params).then(res => {
      if (res.errors) {
        throw new Error(res.errors)
      }
      this.isAuthenticated = true
      return res.data.token
    })
  },
  logout() {
    return fetch(logout).then(res => {
      if (res.errors) {
        throw new Error(res.errors)
      }
      this.isAuthenticated = false
      return
    })
  }
}

export default Authentication