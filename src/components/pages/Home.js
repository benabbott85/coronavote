import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../../style.css"
// import { AuthProvider } from "react-use-auth"


function Home (){
    
    return (
        // <div>
        //     <h1 className="welcome">Welcome to CoronaVote! The only way to vote during this pandemic</h1>
        //     <br></br>
        //     <p className="if"> Please sign in if you have already created an account otherwise click on the signup button and follow the prompts</p>
        // </div>
        <Container>
            {/* <Jumbotron className="jumbo"> */}
        <Row>
        <h1 className="welcome"> Welcome to CoronaVote! The only way to vote during this pandemic</h1>
        </Row>
        <br></br>
        <Row>
            <p className="if">Please sign in if you have already created an account otherwise click on the signup button and create an account</p>
        </Row>
        {/* </Jumbotron> */}
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
        <Form>
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

                <Link to="/Profile"> <Button color="primary" id="signin">Sign In</Button></Link>
                <Link to="/Signup"><Button color="primary"id="signup">Sign Up</Button></Link>
            </Form>
            </Col>
        </Row>
        </Container>
        
    )
}

export default Home;