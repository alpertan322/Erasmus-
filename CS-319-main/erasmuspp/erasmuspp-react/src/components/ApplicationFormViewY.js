import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';
import { useNavigate } from 'react-router-dom';

export default function ApplicationFormEditY() {
  let navigate = useNavigate();
  function clickBack() {
    navigate("/myApplication");
  }
 
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
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br />
            <h1 style={{ color: '#f4eff2' }}>Application Form (View Mode)</h1>
            <br />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <LargeBreak />
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
            <Form>
              <Form.Group className="ps-4" controlId="applicationFormPersonalInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Personal Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditFirstName">
                <Form.Label>First Name:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditLastName">
                <Form.Label>Last Name:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditDoB">
                <Form.Label>Date of Birth:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditNationality">
                <Form.Label>Nationality:</Form.Label>
              </Form.Group>

              <Form.Group className="ps-4" controlId="applicationFormEditStudentInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Student Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditStudentID">
                <Form.Label>Student ID No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditDepartment">
                <Form.Label>Department/Class:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditCumGPA">
                <Form.Label>Cumulative GPA:</Form.Label>
              </Form.Group>

              <Form.Group className="ps-4" controlId="applicationFormEditContactInformation">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Contact Information:</h5></Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditUnivEmail">
                <Form.Label>University E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditPersonalEmail">
                <Form.Label>Personal E-mail:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditMobilePhoneNo">
                <Form.Label>Mobile Phone No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditLocalPhoneNo">
                <Form.Label>Local Phone No.:</Form.Label>
              </Form.Group>
              <Form.Group className="ps-5 mb-2" controlId="applicationFormEditPostalAddress">
                <Form.Label>Postal Address:</Form.Label>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <br />
            <Form>
              <Form.Group className="pt-3 mb" controlId="applicationFormEditFirstNameForm">
                <Form.Label>Mehmet Behnan</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditLastNameForm">
                <Form.Label>Türkeri</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditDoBForm">
                <Form.Label>28/05/1998</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb" controlId="applicationFormEditNationalityForm">
                <Form.Label>Turkey</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="pt-4 mb-1" controlId="applicationFormEditStudentIDForm">
                <Form.Label>21602468</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-1" controlId="applicationFormEditDepartmentForm">
                <Form.Label>Management</Form.Label>
              </Form.Group>
              <Form.Group className="pt-1 mb-3" controlId="applicationFormEditCumGPAForm">
                <Form.Label>2.84</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="pt-1 mb-2" controlId="applicationFormEditUnivEmailForm">
                <Form.Label>behnan.turkeri@ug.bilkent.edu.tr</Form.Label>
              </Form.Group>
              <Form.Group className="me-5 mb-2" controlId="applicationformViewPersonalEmailForm">
                <Form.Label>mbehnant98@gmail.tr</Form.Label>
              </Form.Group>
              <Form.Group className="me-5 mb-2" controlId="applicationFormViewMobilePhoneForm">
                <Form.Label>0555 111 2345</Form.Label>
              </Form.Group>
              <Form.Group className="me-5 mb-2" controlId="applicationformViewPersonalEmailForm">
                <Form.Label>0312 555 6677</Form.Label>
              </Form.Group>
              <Form.Group className="me-5 mb-3" controlId="applicationFormEditPostalAddressForm">
                <Form.Control disabled readonly as="textarea" rows={4} placeholder="Postal Address" />
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <Form className="pe-2">
              <Form.Group controlId="applicationFormEditUnivPreferences">
                <Form.Label style={{ color: '#f4eff2' }}><h5>Erasmus Host University Preferences:</h5></Form.Label>
              </Form.Group>
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>1.</Form.Label>
              </Form.Group>
              <Form.Control as="textarea" rows={2} placeholder="Readonly text here..." readOnly />
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>2.</Form.Label>
              </Form.Group>
              <Form.Control as="textarea" rows={2} placeholder="Readonly text here..." readOnly />
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>3.</Form.Label>
              </Form.Group>
              <Form.Control as="textarea" rows={2} placeholder="Readonly text here..." readOnly />
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>4.</Form.Label>
              </Form.Group>
              <Form.Control as="textarea" rows={2} placeholder="Readonly text here..." readOnly />
              <Form.Group controlId="applicationFormEditFirstNameForm">
                <Form.Label>5.</Form.Label>
              </Form.Group>
              <Form.Control as="textarea" rows={2} placeholder="Readonly text here..." readOnly />
              <Form>
                <Form.Group className="pt-4 mb-1" controlId="applicationFormEditStudentIDForm">
                  <Form.Label>Preferred Semester: Spring/Fall</Form.Label>
                </Form.Group>
              </Form>
            </Form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <br /><br /><br /><br /><br /><br /><br />
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br /><br />
            <Button style={{ backgroundColor: "#3C7479" }}>Export Application Form</Button>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}