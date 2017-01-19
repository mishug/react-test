import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './app/screens/Home';
import Detail from './app/screens/Detail';
import Create from './app/screens/Detail/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/detail/:randomId" component={Detail} />
    <Route path="/create/:randomId" component={Create} />
  </Router>,
  document.getElementById('container')
);
