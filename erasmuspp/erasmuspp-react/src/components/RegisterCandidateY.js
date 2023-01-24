import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import React, { useState } from 'react';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostAnnouncementY() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userDoB, setUserDoB] = useState("");
  const [userNationality, setUserNationality] = useState("");
  const [userStudentIDNo, setUserIDNo] = useState("");
  const [userDepartment, setUserDepartment] = useState("");
  const [userBilkentEmail, setUserBilkentEmail] = useState("");
  const [userCumGPA, setUserCumGPA] = useState("");

  let navigate = useNavigate();

  function clickBack() {
    navigate("/main");
  }

  function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  const saveCandidateInformation = () => {
    axios
      .post("http://localhost:8080/api/v1/user",
        {
          firstName: userFirstName,
          lastName: userLastName,
          dob: userDoB,
          nationality: userNationality,
          email: userBilkentEmail,
          bilkentId: userStudentIDNo,
          department: userDepartment,
          gpa: userCumGPA,
          personalEmail: "",
          mobilePhone: "",
          aboutMe: "",
          password: generatePassword(),
          role: "ROLE_CANDIDATE",
          token: "",
          profilePhoto: ""
        })
      .then((res) => {
        if (res.data === 1) {

          alert("Candidate information saved successfully.");
        }
        else {
          alert("Something went wrong.");
        }
      }).catch((error) => {
        alert("Something went wrong.");
      });
  };

  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
            <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
              Go Back
            </Button>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br /><br />
                <h3 style={{ color: '#f4eff2' }}>Personal Information:</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
              <div class="col-md-2 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <Form>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateFirstName">
                    <Form.Label>First Name:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateLastName">
                    <Form.Label>Last Name:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateDoB">
                    <Form.Label>Date of Birth:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateNationality">
                    <Form.Label>Nationality:</Form.Label>
                  </Form.Group>
                </Form>
              </div>
              <div class="col-md-4 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <Form.Group className="mb-3" controlId="registerCandidateFirstNameForm">
                  <Form.Control onChange={(e) => setUserFirstName(e.target.value)} type="text" placeholder="Yunus Eren" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateLastNameForm">
                  <Form.Control onChange={(e) => setUserLastName(e.target.value)} type="text" placeholder="Türkeri" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateDoBForm">
                  <Form.Control onChange={(e) => setUserDoB(e.target.value)} type="text" placeholder="dd/mm/yyyy" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateNationalityForm">
                  <Form.Control onChange={(e) => setUserNationality(e.target.value)} type="text" placeholder="Turkey" />
                </Form.Group>
              </div>
              <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <h3 style={{ color: '#f4eff2' }}>Student Information:</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
              <div class="col-md-2 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <Form>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateStudentID">
                    <Form.Label>Student ID No.:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateDepartment">
                    <Form.Label>Department:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandiateBilkentEmail">
                    <Form.Label>Bilkent E-mail:</Form.Label>
                  </Form.Group>
                  <Form.Group className="mb-3 text-end" controlId="registerCandidateCumGPA">
                    <Form.Label>Cumulative GPA:</Form.Label>
                  </Form.Group>
                </Form>
              </div>
              <div class="col-md-4 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br />
                <Form.Group className="mb-3" controlId="registerCandidateStudentIDForm">
                  <Form.Control onChange={(e) => setUserIDNo(e.target.value)} type="text" placeholder="22001842" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateDepartmentForm">
                  <Form.Control onChange={(e) => setUserDepartment(e.target.value)} type="text" placeholder="Computer Science" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateBilkentEmailForm">
                  <Form.Control onChange={(e) => setUserBilkentEmail(e.target.value)} type="text" placeholder="eren.turkeri@ug.bilkent.edu.tr" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerCandidateCumGPAForm">
                  <Form.Control onChange={(e) => setUserCumGPA(e.target.value)} type="text" placeholder="3.21" />
                </Form.Group>
              </div>
              <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br /><br />
                <Button onClick={saveCandidateInformation} style={{ backgroundColor: "#3C7479" }}>
                  Save Candidate Info
                </Button>
                <br /><br /><br /><br />
              </div>
            </div>
          </div>
          <div class="col-md-2">
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}