import React, { Component } from 'react'
import 'antd/dist/antd.css'
import './static/css/index.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { AuthProvider } from './components/helpers/AuthProvider'
import { PrivateRoute } from './components/helpers/PrivateRoute'
import { AuthRoute } from './components/helpers/AuthRoute'

import LandingPage from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'

class App extends Component {
  render() {
  const history = createBrowserHistory();
    return (
        <AuthProvider>
          <Router history={ history }>
            <div>
              <Switch>
                <Route exact path='/' component={ LandingPage }/>

                <PrivateRoute exact path='/dashboard/:user' component={ Dashboard }/>
                <PrivateRoute exact path='/project/:user/:id' component={ Project }/>

                <AuthRoute exact path='/signin' component={ Login }/>
                <AuthRoute exact path='/signup' component={ Signup }/>
              </Switch>
            </div>
          </Router>
        </AuthProvider>
    );
  };
};

export default App;
