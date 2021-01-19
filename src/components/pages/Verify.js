import React from "react";
import  { Container, Row, Col, Button} from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "../footer"



function Verify (){
    return (
        <Container>

            <br></br>
            <Row>
                <h1 className="verheader">Please Verify That All Information Below is Correct</h1>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col md={3}>
                    <p className="verUser">Username: </p>
                </Col>
                <Col md={3}>
                    <p className="verPass"> Password: </p>
                     </Col>
                <Col md={3}>
                    <p className="verFName"> First Name: </p>
                </Col>
                <Col md={3}>
                    <p className="verLName"> Last Name: </p>
                </Col>
                

            </Row>
            <br></br>
            <Row>
                <Col md={3}>
                    <p className="verStreet"> Street Address: </p>
                </Col>

                <Col md={3}>
                    <p className="verCity">City: </p>
                </Col>

                <Col md={3}>
                    <p className="verState">State: </p>
                </Col>
                <Col md={3}>
                    <p className="verZip">Zip: </p>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={3}>
                    <p className="verSSN">SSN:</p>
                </Col>
                
                <Col md={3}>
                    <p className="verDOB">Date of Birth: </p>
                </Col>

                <Col md={3}>
                    <p className="verParty">Political Party:</p>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <Link to="/Home"><Button color="primary">All Correct Lets Vote!</Button></Link>
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

        <Footer/>

        </Container>
    )
}

export default Verify