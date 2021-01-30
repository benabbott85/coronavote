import React, {  } from "react";
// import Axios from "axios"
import {
  Container,
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  Button,
} from "reactstrap";
// import Footer from "../footer"
// import { Link } from "react-router-dom";



function Profile() {
  return (
    <Container>
      <Row>
        <h1 className="verUser">My Profile</h1>
      </Row>

      <Row>
        <Col sm={3}>
          <Card id="profile pic">
            <CardBody>
              <CardImg
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="profile pic"
              />
              <Button color="primary" className="uploadBtn">
                Upload Profile Picture
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col md={3} className="verUser">
          First Name:
        </Col>
        <Col md={3} className="verUser">
          Last Name:
        </Col>

        <Col md={3} className="verUser">
          Date of Birth:
        </Col>
        
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col md={3}className="verUser">Voting History</Col>
        <Col md={3} className="verUser">
          Party Affiliation:
        </Col>
      </Row>
      <br></br>
      <br/>
      <br/>
      <Row>
        
        <Col md={3} className="verUser">
          Local/State Elections:
        </Col>
        <Col md={3} className="verUser">
          National Elections:
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Button color="primary">Lets Vote!</Button>

      <br/>
        <br/>
        {/* <Footer/> */}
    </Container>
  );
}

export default Profile;
