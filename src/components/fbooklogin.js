import React, { Component} from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import "../stylesheets/flogin.css";
import Logo from "./assets/Facebook-logo.png" 
export default class Example extends Component {
  handleResponse = (data) => {
    console.log(data);
  }
 
  handleError = (error) => {
    this.setState({ error });
  }
 
  render() {
    return (
      <FacebookProvider appId="781259279181951">
        <LoginButton
        className="flogin"
       
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
         
        >
          <span>Facebook</span>
        </LoginButton>
      </FacebookProvider>
    );
  }
}