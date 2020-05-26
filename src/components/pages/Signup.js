import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";


function Signup () {
    return (
       <Container>
           <h1 className= "signup">Please enter your information in all fields below.</h1>
<Row>
           <Col md={3}>
            <Form>
                <FormGroup>
                    <Label for = "signIn"> Username:</Label>
                    <Input
                     type="text"
                     name="username"
                     id="userrname"
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
            <Col md={3}>
            <Form>
                <FormGroup>
                    <Label for = "signIn"> Confirm Username:</Label>
                    <Input
                     type="text"
                     name="username"
                     id="userrname"
                     placeholder=" Confirm Username" 
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

            <Col md={3}>
                <div>
                    
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
                {/* <Button id="signin">Sign In</Button>
                <Link to="/Signup"><Button id="signup">Sign Up</Button></Link> */}
            </Form>
            </Col>
            <Col md={3}>
        <Form>
                <FormGroup>
                    <Label for = "signIn" > Confrim Password:</Label>
                    <Input
                     type="text"
                     name="password"
                     id="password"
                     placeholder=" Confirm Password" 
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
        </Row>
        <Row>
           <Col md={3}>
            <Form>
                <FormGroup>
                    <Label for = "signIn"> First Name:</Label>
                    <Input
                     type="text"
                     name="firstname"
                     id="firstname"
                     placeholder="First Name" 
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
            <Col md={3}>
            <Form>
                <FormGroup>
                    <Label for = "signIn"> Last Name:</Label>
                    <Input
                     type="text"
                     name="lastname"
                     id="lastname"
                     placeholder=" Last Name" 
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

            <Col md={3}>
                <Form>
                    <FormGroup>
                        <Label for ="signIn">SSN:</Label>
                        <Input
                        type="text"
                        name="ssn"
                        id="ssn"
                        placeholder="SSN"
                        >

                        </Input>
                    </FormGroup>
                </Form>
            </Col>
            <Col md={3}>
                <Form>
                    <FormGroup>
                        <Label for ="signIn">Confirm SSN:</Label>
                        <Input
                        type="text"
                        name="confirmssn"
                        id="confirmssn"
                        placeholder="confirm SSN"
                        >

                        </Input>
                    </FormGroup>
                </Form>
            </Col>

        </Row>

        <Row>
           <Col md={3}>
            <Form>
                <FormGroup>
                    <Label for = "signIn"> Street Address:</Label>
                    <Input
                     type="text"
                     name="streetaddress"
                     id="streetaddress"
                     placeholder="Street Address" 
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
            <Col md={3}>
            <Form>
                <FormGroup>
                    <Label for = "signIn"> City:</Label>
                    <Input
                     type="text"
                     name="city"
                     id="city"
                     placeholder="city" 
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

            <Col md={3}>
                <Form>
                    <FormGroup>
                        <Label for ="signIn">State:</Label>
                        <Input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="State"
                        >

                        </Input>
                    </FormGroup>
                </Form>
            </Col>
            <Col md={3}>
                <Form>
                    <FormGroup>
                        <Label for ="signIn">Zip Code:</Label>
                        <Input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        placeholder="Zip Code"
                        >

                        </Input>
                    </FormGroup>
                </Form>
            </Col>

        </Row>


       </Container>
    )
}

export default Signup