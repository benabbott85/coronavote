import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";


function Home (){
    return (
        // <div>
        //     <h1 className="welcome">Welcome to CoronaVote! The only way to vote during this pandemic</h1>
        //     <br></br>
        //     <p className="if"> Please sign in if you have already created an account otherwise click on the signup button and follow the prompts</p>
        // </div>
        <Container>
            <Jumbotron>
        <Row>
        <h1 className="weclome"> Welcome to CoronaVote! The only way to vote during this pandemic</h1>
        </Row>
        <Row>
            <p className="if">Please sign in if you have already created an account otherwise click on the signup button and create an account</p>
        </Row>
        </Jumbotron>
        <h2>Sign In:</h2>
        <Row>
           <Col md={3}>
            <Form>
                <FormGroup>
                    <Label for = "signIn"> Username:</Label>
                    <Input
                     type="text"
                     name="username"
                     id="userrname"
                     placeholder="username" 
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
                <div>
                    <p>Hopefully this works better than the Iowa Caucuses</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={3}>
        <Form>
                <FormGroup>
                    <Label for = "signIn" > Password:</Label>
                    <Input
                     type="text"
                     name="password"
                     id="password"
                     placeholder="password" 
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
                <Button id="signin">Sign In</Button>
                <Link to="/Signup"><Button id="signup">Sign Up</Button></Link>
            </Form>
            </Col>
        </Row>
        </Container>
    )
}

export default Home;