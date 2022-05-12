import React from 'react';

import './App.css';
import NavBar from './components/NavBar';
import Users from './components/Users';



function App() {
  // router switch goes here
  return(
    <div className="app-outermost">
      <NavBar />
      <div className="app-second">
        <Users />
      </div>
    </div>
  )
}

export default App;