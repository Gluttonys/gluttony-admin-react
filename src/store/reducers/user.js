import * as actionType from '../actionTypes'

const initState = {
  userinfo: null,
  isLogin: false,
  token: ''
}

export default (state = initState, active) => {
  switch (active.types) {
    case actionType.SET_USER_INFO:
      return Object.assign({}, initState, {
        userinfo: active.userinfo
      })
    case actionType.SET_LOGIN_STATUS:
      return Object.assign({}, initState, {
        isLogin: active.value
      })
    case actionType.SET_TOKEN:
      return Object.assign({}, initState, {
        token: active.value
      })
    default:
      return state
  }
}
