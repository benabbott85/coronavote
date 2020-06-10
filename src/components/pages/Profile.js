import React from "react";
import  { Container, Card, CardBody, CardImg, Row, Col, Button} from "reactstrap";
// import { Link } from "react-router-dom";



function Profile (){
    return (
        <Container>
            <Row>
            <h1>My Profile</h1>
            </Row>

            <Row>
            <Col sm={3}>
                <Card id="profile pic">
                    
                    <CardBody>
                       <CardImg top width="30%" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="profile pic"/>

                    </CardBody>
                    
                </Card>
                </Col>
            </Row>
<br></br>
<br></br>
            <Row>
                <Col md={3}>
                    First Name:
                </Col>
                <Col md={3}>
                    Last Name: 
                </Col>

                <Col md={3}>
                    Date of Birth:
                </Col>
                <Col md={3}>
                Party Affiliation: 
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
                <Col md={3}>
                    Voting History: 
                </Col>
                <Col md={3}>
                    Local/State Elections:
                </Col>
                <Col md={3}>
                    National Elections:
                </Col>
            </Row>

         </Container>
    )
}

export default Profile