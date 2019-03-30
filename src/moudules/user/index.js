
/**
 * 转换后再存，禁止其他开发者直接从localStorage 里面存取信息
 */
const mixKey = 'wosff'
const userkey = 'uifo'

const decodeUserInfoStr = infoStr => {
  const b64 = infoStr.replace(new RegExp(`^(${mixKey})`), '')
  if (!b64) {
    return
  }
  try {
    return JSON.parse(atob(b64))
  } catch (err) {
    User.clearInfo() 
  }
}
const encodeUserInfo = info => {
  if (!info) {
    return mixKey
  }
  return `${mixKey}${JSON.stringify(btoa(info))}`
}

const User = {
  getUserInfo (key) {
    const info = decodeUserInfoStr(localStorage.getItem(userkey))
    if (key) return info[key]
    return info
  },
  updateUserInfo (key, info) {
    const allInfo = this.getUserInfo()
    allInfo[key] = info
    this.setUserInfo(allInfo)
  },
  // 登陆和更新信息后调用
  setUserInfo (info) {
    localStorage.setItem(userkey, encodeUserInfo(info))
  }
}

export default User