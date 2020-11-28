import React, {Component} from 'react';
/* 导入路由组件。 history hash模式 */
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import Login from './pages/login/login-container'
import Admin from './pages/admin/admin'


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {/* 同一时间只有一个路由被匹配 */}
          <Switch>
            <Route path={'/login'} component={Login}></Route>
            <Route path={'/'} component={Admin}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
