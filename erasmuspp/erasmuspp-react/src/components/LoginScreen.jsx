import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import DefaultFooter from './DefaultFooter';


export default function LoginScreen() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  let navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    const loginRequest = {  
      email: emailInput,
      password: passwordInput
    };
    axios
      .post("http://localhost:8080/api/v1/auth/login", 
        { 
            email: emailInput,
            password: passwordInput } )
      .then((res) => {
        if (res.data.status === true) {
          window.localStorage.setItem("USER_TOKEN", res.data.token);
          navigate("/main");
        }
        else {
          alert("E-Mail/Password do not match")
        }
      }).catch(err=> alert("Server Error! Try again later."));
  };

  function handleClickForgotPassword() {
    navigate("/forgotPassword");
  }


  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br />
            <img
              src="/E++-logos_white_square.png"
              width="180rem"
              height="180rem"
              className="d-inline-block align-top"
              alt="epp logo"
            />
            <br /><br />
            <h1 style={{ color: "#f4eff2" }}> Welcome to Erasmus++</h1>
            <br />
            <h2 style={{ color: "#f4eff2" }}>Please Log In</h2>
            <div class="row">
              <div class="col-md-4">
              </div>
              <div class="col-md-4" style={{ backgroundColor: "#1F8F8E" }}>
                <Card>
                  <Form className='text-center'>
                    <Form.Group className="ms-3 me-3 mb-3" controlId="loginEmail">
                      <br />
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        Login via your instutition e-mail
                      </Form.Text>
                    </Form.Group>
                      
                    <Form.Group className="ms-3 me-3 mb-3" controlId="loginPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Button style={{ backgroundColor: "#3C7479" }} type="submit" onClick={login}>
                      Login
                    </Button>
                    <br /><br />
                    <a onClick={handleClickForgotPassword} class="link-primary">Forgot Your Password?</a>
                    <br /><br />
                  </Form>
                </Card>
                <br /><br /><br /><br /><br /><br /><br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}

function navigateMainScreen() {

}