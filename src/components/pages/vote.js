import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
// import Footer from "../footer";
import president from "../../pres.json";
import presInput from "../input";
class Vote extends Component {
  state = {
    president,
  };

  removePres = (id) => {
    const presidents = this.state.friends.filter((pres) => pres.id !== id);
    this.setState = { presidents };
  };
  render() {
    return (
      <Container>
        <Row>
          <h1 className="verUser">Vote Page</h1>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <Form>
              <FormGroup>
                <Label for="stateselect" className="verUser">
                  State Where You're Registered to Vote
                </Label>
                <Input
                  type="select"
                  name="select"
                  id="votestate"
                  placeholder="State of Residence"
                >
                  <option>Select</option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arkansas</option>
                  <option>Arizona</option>
                  <option>California</option>
                  <option>Colorado</option>
                  <option>Connecticut</option>
                  <option>Delaware</option>
                  <option>Florida</option>
                  <option>Georgia</option>
                  <option>Hawaii</option>
                  <option>Idaho</option>
                  <option>Illinois</option>
                  <option>Indiana</option>
                  <option>Iowa</option>
                  <option>Kansas</option>
                  <option>Kentucky</option>
                  <option>Louisiana</option>
                  <option>Massachusetts</option>
                  <option>Maryland</option>
                  <option>Maine</option>
                  <option>Michigan</option>
                  <option>Minnesota</option>
                  <option>Missouri</option>
                  <option>Mississippi</option>
                  <option>Montana</option>
                  <option>Nebraska</option>
                  <option>Nevada</option>
                  <option>New Hampshire</option>
                  <option>New Jersey</option>
                  <option>New Mexico</option>
                  <option>New York</option>
                  <option>North Carolina</option>
                  <option>North Dakota</option>
                  <option>Ohio</option>
                  <option>Oklahoma</option>
                  <option>Oregon</option>
                  <option>Pennsylvania</option>
                  <option>Rhode Island</option>
                  <option>South Carolina</option>
                  <option>South Dakota</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Utah</option>
                  <option>Vermont</option>
                  <option>Virginia</option>
                  <option>Washington</option>
                  <option>West Virginia</option>
                  <option>Wisconsin</option>
                  <option>Wyoming</option>
                </Input>
              </FormGroup>
            </Form>
          </Col>
          <Col md={4}>
            <Form>
              <FormGroup>
                <Label for="stateselect" className="verUser">
                  House District
                </Label>
                <Input
                  Input
                  type="select"
                  name="select"
                  id="votestate"
                  placeholder="State of Residence"
                ></Input>
              </FormGroup>
            </Form>
          </Col>
        </Row>

        <br />
        <Row>
          <Col md={4}>
            <Form>
              <FormGroup>
                <Label for="natpres" className="natpres">
                  Presidential Election
                </Label>
                {this.state.president.map((pres) => (
                  <presInput>
                      <br/>
                      {/* <br/> */}
                   <option value ="" id= "presinput">{pres.name}</option> 
                     {/* <option name= {pres.name}></option> */}
                    </presInput>
                ))}
                {/* <Input type= "select" name="select" id="votepres" placeholder="Presidential Election">
                        {/* <option>Select</option> */}
                {/* {this.state.president.map (pres =>( */}
                {/* < option name={pres.name} */}
                {/* party={pres.party}/> */}
                {/* ))}  */}
                {/* </Input> */} 
              </FormGroup>
            </Form>
          </Col>
          <Col md={4}>
            <Form>
              <FormGroup>
                <Label for="natsenate" className="natsenate">
                  Senate Election
                </Label>
                <Input
                  type="select"
                  name="select"
                  id="votesenate"
                  placeholder="Senate Election"
                >
                  <option>Select</option>
                  <option>John Hickenlooper(D)</option>
                  <option>Corey Gardner(R)</option>
                </Input>
              </FormGroup>
            </Form>
          </Col>
          <Col md={4}>
            <Form>
              <FormGroup>
                <Label for="nathouse" className="nathouse">
                  House of Representatives Election
                </Label>
                <Input
                  type="select"
                  name="select"
                  id="votehouse"
                  placeholder="House Election"
                >
                  <option>Select</option>
                  <option></option>
                  <option></option>
                </Input>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <br />
        <Row>
          <p className="verUser">
            Below you will find the ballot initatives on the ballot in your
            state
          </p>
        </Row>
        <br />
        <Row>
          <Col md={4}>
            <Form>
              <FormGroup>
                <Input type="select" className="ballotinit">
                  <option>Select</option>
                  <option>Initative 420</option>
                </Input>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <br />
        <Button type="radio" color="primary" id="initbtn">
          Yes
        </Button>
        <br />
        <br />
        <Button type="radio" color="primary" id="initbtn2">
          No
        </Button>
        <br />
        <br />
        <br />
        <Button color="primary" id="finalvote">
          Submit my vote
        </Button>
        <br />
      </Container>
    );
  }
}

export default Vote;
