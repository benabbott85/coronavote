import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import { Container, Row, Col } from "reactstrap"
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
// import Signout from "./components/pages/Signout";
import Signup from "./components/pages/Signup";
import Verify from "./components/pages/Verify";
import Profile from "./components/pages/Profile";
import Newnav from "./components/newnav";
import Forgot from "./components/pages/Forgot";
import Vote from "./components/pages/vote";
import Logout from "./components/pages/logout"
import Footer from "./components/footer"

import { makeStyles } from "@material-ui/core/styles";
// import logo from './logo.svg';
// import './App.css';
const useStyles = makeStyles({
  container: {
    display: "flex",
    
  },
   drawer: {
     background: "blue"
   }
});
function App() {
  const classes = useStyles();
  return (
    <div>
   <Router>
     <div className={classes.container}>
       {/* <NavTabs/> */}
       <Newnav/>
       <Switch>
       <Route exact path ="/" component={Home}/>
       <Route exact path ="/Home" component={Home}/>
       <Route exact path ="/Signup" component ={Signup}/>
       <Route exact path = "/Verify" component = {Verify}/>
       <Route exact path = "/Profile" component ={Profile}/>
       <Route exact path ="/Forgot" component={Forgot}/>
       <Route exact path ="/Vote" component={Vote}/>
       <Route exact path ="/Logout" component={Logout}/>
       </Switch>
     </div>
   </Router>
   
<Footer/>

   </div>

  );
}

export default App;
