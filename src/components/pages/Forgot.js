import React from "react";
import emailjs from "emailjs-com";
// import { Link } from "react-router-dom";
// import Footer from "../footer"
// import { Container, Row, Col, Form, FormGroup, Jumbotron, Label, Input, Button } from "reactstrap";
// // import { ForgotPasswordReset } from "@unleashit/forgot-password"


export default function Contact () {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_kl4edzx', e.target, 'user_a22uGxDKlju4sAPyBBnir')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return(
        <div>
            < div className="containter">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        {/* <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Email Address" name="email"/>
                        </div> */}
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="forgotmessage" cols="30" rows ="8" placeholder="Reset Password" name="message"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Email"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

// function forgot (){
//     return (
//         <div>
// <h1 className="forgot ">Forgot Password???</h1>
// <br/>
// <p className="forgot">Please Enter Email Address used to create account</p>
// <Row>
//     <Col md={6}></Col>
//     <Col md={6}>
// <Form>
// <FormGroup>
//     <Label for ="forgotPassword"  className="forgotpass">Email Address:</Label>
//     <Input type="email"
//     name="forgotpass"
//     placeholder="Email Address"/>

// </FormGroup>
// </Form>
// </Col>
// </Row>

// <button className="forgotSubmit">Submit</button>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// <br/>
// {/* <Footer className="footer" /> */}
// </div>

//     )
// }




// export default forgot


