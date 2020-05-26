import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";


function Home (){
    return (
        // <div>
        //     <h1 className="welcome">Welcome to CoronaVote! The only way to vote during this pandemic</h1>
        //     <br></br>
        //     <p className="if"> Please sign in if you have already created an account otherwise click on the signup button and follow the prompts</p>
        // </div>
        <Container>
        <Row>
        <h1 className="weclome"> Welcome to CoronaVote! The only way to vote during this pandemic</h1>
        </Row>
        <Row>
            <p className="if">Please sign in if you have already created an account otherwise click on the signup button and create an account</p>
        </Row>
        <h2>Sign In:</h2>
        <Row>
           
            <Form>
                <FormGroup>
                    <Label for = "signIn" hidden> Sign In:</Label>
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
        </Row>
        <Row>
        <Form>
                <FormGroup>
                    <Label for = "signIn" hidden> Sign In:</Label>
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
                <Button id="signup">Sign Up</Button>
            </Form>
        </Row>
        </Container>
    )
}

export default Home;