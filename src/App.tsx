import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SideBar from './sidebar/SideBar';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import My404Component from './pages/My404Component';
import AddTodo from './pages/AddTodo';

function App() {

  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Add' exact component={AddTodo} />
        <Route path='*' exact={true} component={My404Component} />
      </Switch>
    </Router>
  );
}

export default App;
