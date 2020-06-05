import React from "react";
import { Container, Row, Col, Form, FormGroup, FormText, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
// import Styles from "../../styles.css"


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
                    <FormText>Please use Email Address</FormText>
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
                    <FormText>Please use Email Address</FormText>
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
                    <FormText>Password must have one uppercase, one lowercase, and one number</FormText>
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
                     type="password"
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
                    <FormText>Password must have one uppercase, one lowercase, and one number</FormText>
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
                        type="password"
                        name="ssn"
                        id="ssn"
                        placeholder="XXX-XX-XXXX"
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
                        type="password"
                        name="confirmssn"
                        id="confirmssn"
                        placeholder="XXX-XX-XXXX"
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
                     placeholder="City" 
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
                        type="select" name="select" id="stateSelect"
                        // name="state"
                        // id="state"
                        placeholder="State"
                        >
                            <option>Select</option>
                            <option>AL</option>
                            <option>AK</option>
                            <option>AZ</option>
                            <option>AR</option>
                            <option>CA</option>
                            <option>CO</option>
                            <option>CT</option>
                            <option>DE</option>
                            <option>FL</option>
                            <option>GA</option>
                            <option>HI</option>
                            <option>ID</option>
                            <option>IL</option>
                            <option>IN</option>
                            <option>IA</option>
                            <option>KS</option>
                            <option>KY</option>
                            <option>LA</option>
                            <option>ME</option>
                            <option>MD</option>
                            <option>MA</option>
                            <option>MI</option>
                            <option>MN</option>
                            <option>MS</option>
                            <option>MO</option>
                            <option>MT</option>
                            <option>NE</option>
                            <option>NV</option>
                            <option>NH</option>
                            <option>NJ</option>
                            <option>NM</option>
                            <option>NY</option>
                            <option>NC</option>
                            <option>ND</option>
                            <option>OH</option>
                            <option>OK</option>
                            <option>OR</option>
                            <option>PA</option>
                            <option>RI</option>
                            <option>SC</option>
                            <option>SD</option>
                            <option>TN</option>
                            <option>TX</option>
                            <option>UT</option>
                            <option>VT</option>
                            <option>VA</option>
                            <option>WA</option>
                            <option>WV</option>
                            <option>WI</option>
                            <option>WY</option>

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
        <Row>
            <Col md={3}>
                <Form>
                    <FormGroup>
                        <Label for ="dob">Date of Birth:</Label>
                        <Input
                        type="text"
                        name="dob"
                        id= "dob"
                        placeholder="MM/DD/YYYY"
                        ></Input>
                    </FormGroup>
                </Form>
            </Col>
            <Col md={3}>
                <Form>
                    <FormGroup>
                        <Label for ="dob">Political Party:</Label>
                        <Input
                        type="select" name="select" id="partySelect"
                        // name="dob"
                        // id= "dob"
                        placeholder="Party Choice"
                        >
                            <option>Select</option>
                            <option>Democrat</option>
                            <option>Republican</option>
                            <option>Libertarian</option>
                            <option>Green Party</option>
                        </Input>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    <Row>
    <Link to="/Verify"><Button id="submit">Submit</Button></Link>
    </Row>
       </Container>
    )
}

export default Signup