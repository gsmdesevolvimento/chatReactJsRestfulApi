import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const axios = require('axios');

import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Chat from './pages/Chat'

const app = document.getElementById('app');

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Signin}></IndexRoute>
      <Route path="signup" name="signup" component={Signup}></Route>
      <Route path="chat" name="chat" component={Chat}></Route>
    </Route>
  </Router>,
  app
);