import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import { Container, Row, Col } from "reactstrap"
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Signout from "./components/pages/Signout";
import Signup from "./components/pages/Signup";
import Verify from "./components/pages/Verify";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
   <Router>
     <div>
       <NavTabs/>
       <Route exact path ="/Home" component={Home}/>
       <Route exact path ="/Signup" component ={Signup}/>
       <Route exact path = "/Verify" component = {Verify}/>
       <Route exact path = "/Signout" component ={Signout}/>
     </div>
   </Router>
  );
}

export default App;
