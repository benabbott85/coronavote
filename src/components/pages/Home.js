import React from "react";
import { Container, Row, Col, Form, FormGroup, Jumbotron, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../../style.css";
import Google from "../googlelogin"; 
import LoginBtn from "../loginButton"
// import Footer from "../footer"
// import { AuthProvider } from "react-use-auth"


function Home (){
    
    return (
        // <div>
        //     <h1 className="welcome">Welcome to CoronaVote! The only way to vote during this pandemic</h1>
        //     <br></br>
        //     <p className="if"> Please sign in if you have already created an account otherwise click on the signup button and follow the prompts</p>
        // </div>
        <Container>
            <Jumbotron className="jumbo">
        <Row>
        <h1 className="welcome"> Welcome to VoteFromHome.com! The only way to vote in National, State and Local Level Elections from Home</h1>
        </Row>
        <br></br>
        <Row>
            <p className="if">Please sign in if you have already created an account otherwise click on register and create an account</p>
        </Row>
        </Jumbotron>
        < div className="form">
        <h2 className="homesign">Sign In:</h2>
        <Row>
           <Col md={3}>
            <Form>
                <FormGroup>
                    <Label for = "signIn" className="verUser"> Username:</Label>
                    <Input
                     type="text"
                     name="username"
                     id="username"
                     placeholder="Username" 
                    >
                    {/* <Input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password"


                    >

                    </Input> */}
                   
                    </Input>
                </FormGroup>
            </Form>
            </Col>
            <Col md={6}></Col>

            <Col md={3}>
                {/* <div>
                    <p>Hopefully this works better than the Iowa Caucuses</p>
                </div> */}
            </Col>
        </Row>
        <Row>
            <Col md={3}>
        <Form >
                <FormGroup>
                    <Label for = "signIn" className="verUser"> Password:</Label>
                    <Input
                     type="password"
                     name="password"
                     id="password"
                     placeholder="Password" 
                    >
                    {/* <Input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="password"


                    >

                    </Input> */}
                   
                    </Input>
                </FormGroup>

                 <LoginBtn className ="auth"/>
                <br/>
                <br/>
                <Link to ="/vote"><Google className="google"/></Link>
                <br/>
                <Link to="/Signup"><p id="register">Register</p></Link>
                
                <Link to="/Forgot"><p id="forgot">Forgot Password?</p></Link>
            </Form>
            </Col>
        </Row>
        <br/>
        </div>
        <br/>
        <br/>
        <br/>
        {/* <Footer/> */}
        </Container>
        
    )
}

export default Home;