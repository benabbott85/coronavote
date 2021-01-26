import React from "react";
import {Container, Row, Col, Form, FormGroup, Input, Label, Button } from "reactstrap";

function vote (){
    return (
        <Container>
            <Row>
        <h1>Vote Page</h1>
        </Row>
        <br/>
        <Row>
            <Col md={4}>
                <Form>
                    <FormGroup>
                        <Label for ="stateselect" className="stateselect">State Where You're Registered to Vote</Label>
                        <Input type="select" name="select" id="votestate" placeholder="State of Residence">
                            <option>Select</option>
                            <option>AL</option>
                            <option>AK</option>
                            <option>AR</option>
                            <option>AZ</option>
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
                            <option>MA</option>
                            <option>MD</option>
                            <option>ME</option>
                            <option>MI</option>
                            <option>MN</option>
                            <option>MO</option>
                            <option>MS</option>
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
        </Row>

<br/>
        <Row>
        <Col md={4}>
            <Form>
                <FormGroup>
                    <Label for ="natpres" className="natpres">Presidential Election</Label>
                    <Input type= "select" name="select" id="votepres" placeholder="Presidential Election">
                        <option>Select</option>
                        <option>Joesph R Biden Jr (D)</option>
                        <option>Orange Traffic Cone (R)</option>
                        <option>Yeezy (B)</option>
                    </Input>
                </FormGroup>
            </Form>
        </Col>
        <Col md={4}>
            <Form>
                <FormGroup>
                    <Label for ="natsenate" className="natsenate">Senate Election</Label>
                    <Input type= "select" name="select" id="votesenate" placeholder="Senate Election">
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
                    <Label for ="nathouse" className="nathouse">House of Representatives Election</Label>
                    <Input type= "select" name="select" id="votehouse" placeholder="House Election">
                        <option>Select</option>
                        <option></option>
                        <option></option>
                        
                    </Input>
                </FormGroup>
            </Form>
        </Col>
        </Row>
        <br/>
        <Button color="secondary" id="finalvote">Submit my vote</Button>
        </Container>
    )
}

export default vote