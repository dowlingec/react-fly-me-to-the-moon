import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';
import About from './components/About';
import Activities from './components/Activities';
import {useState} from 'react';

function App() {
  
  // router switch goes here
  return(
    <div className="app-outermost">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/login">
          <Users />
        </Route>
        <Route exact path="/activities">
          <Activities />
        </Route>
      </Switch>
    </div>
  )
}

export default App;