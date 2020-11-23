import React, {Component} from 'react';
/* 导入路由组件。 history hash模式 */
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        {/* 同一时间只有一个路由被匹配 */}
        <Switch>
          <Route path={'/login'} component={Login}></Route>
          <Route path={'/'} component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
