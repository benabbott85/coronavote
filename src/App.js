import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import logo from './logo.svg';
// import './App.css';

function App() {
  return (
   <Router>
     <div>
       <NavTabs/>
       <Route exact path ="/" component={Home}/>
       <Route exact path ="/signup" component ={Signup}/>
       <Route exact path = "/verify" component = {Verify}/>
       <Route exact path = "/signout" component ={Signout}/>
     </div>
   </Router>
  );
}

export default App;
