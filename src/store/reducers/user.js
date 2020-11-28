import * as actionType from '../actionTypes'

const initState = {
  userinfo: null,
  isLogin: false,
  token: ''
}

export default (state = initState, active) => {
  switch (active.type) {
    case actionType.SET_USER_INFO:
      return Object.assign({}, state, {
        userinfo: active.userinfo
      })
    case actionType.SET_LOGIN_STATUS:
      return Object.assign({}, state, {
        isLogin: active.value
      })
    case actionType.SET_TOKEN:
      return Object.assign({}, state, {
        token: active.value
      })
    default:
      return state
  }
}
