import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Signout from "./components/pages/Signout";
import Signup from "./components/pages/Signup";
import Verify from "./components/pages/Verify"
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
   <Router>
     <div>
       <NavTabs/>
       <Route exact path ="/home" component={Home}/>
       <Route exact path ="/signup" component ={Signup}/>
       <Route exact path = "/verify" component = {Verify}/>
       <Route exact path = "/signout" component ={Signout}/>
     </div>
   </Router>
  );
}

export default App;
