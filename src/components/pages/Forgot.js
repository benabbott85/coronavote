import React from "react";
import { Link } from "react-router-dom";
// import Footer from "../footer"
import { Container, Row, Col, Form, FormGroup, Jumbotron, Label, Input, Button } from "reactstrap";

function forgot (){
    return (
        <div>
<h1 className="forgot ">Forgot Password???</h1>
<br/>
<p className="forgot">Please Enter Email Address used to create account</p>
<Row>
    <Col md={6}></Col>
    <Col md={6}>
<Form>
<FormGroup>
    <Label for ="forgotPassword"  className="forgotpass">Email Address:</Label>
    <Input type="email"
    name="forgotpass"
    placeholder="Email Address"/>

</FormGroup>
</Form>
</Col>
</Row>

<button className="forgotSubmit">Submit</button>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
{/* <Footer className="footer" /> */}
</div>

    )
}

export default forgot


