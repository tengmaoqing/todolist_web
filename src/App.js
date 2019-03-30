import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './moudules/auth/privateRoute'
import Login from './pages/login/index'
import Index from './pages/index/inde'
import My from './pages/my/index'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Route path="/" exact component={Index}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Login}></Route>
        <PrivateRoute path="/my" component={My}></PrivateRoute>
      </Router>
    );
  }
}

export default App;
