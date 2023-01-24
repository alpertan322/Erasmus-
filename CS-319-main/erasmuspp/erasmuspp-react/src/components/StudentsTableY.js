import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function PostAnnouncementY() {

  const [candidateList, setCandidateList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/user/candidates")
      .then(res => setCandidateList(res.data));
  }, [candidateList])


  let navigate = useNavigate();

  function clickBack() {
    navigate("/main");
  }

  return(
    <div style={{backgroundColor: "#C7D6D2"}}>
      <TopNavBar/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
            <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
              Go Back
            </Button>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12 text-center" style={{backgroundColor: "#1F8F8E"}}>
                <br/><br/>
                <h3 style={{ color: '#f4eff2' }}>Registered Students:</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-1" style={{backgroundColor: "#1F8F8E"}}>
              </div>
              <div class="col-md-10">
                <br/>
                <Table responsive striped bordered hover variant="#b6f1cf">
                  <thead>
                    <tr>
                      <th>#</th>
                      <td>First Name</td>
                      <td>Last Name</td>
                      <td>Bilkent ID</td>
                      <td>Bilkent Department</td>
                      <td>E-mail Address</td>
                      <td>Nationality</td>
                      <td>Cumulative GPA</td>
                      <td>Personal E-mail</td>
                      <td>Mobile Phone</td>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: candidateList.length }).map((_, index) => (
                      <>
                        <tr>
                          <td key={index + 1}>
                            {index + 1}
                          </td>
                          <td>{candidateList[index].firstName}</td>
                          <td>{candidateList[index].lastName}</td>
                          <td>{candidateList[index].bilkentId}</td>
                          <td>{candidateList[index].department}</td>
                          <td>{candidateList[index].email}</td>
                          <td>{candidateList[index].nationality}</td>
                          <td>{candidateList[index].gpa}</td>
                          <td>{candidateList[index].personalEmail}</td>
                          <td>{candidateList[index].mobilePhone}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div class="col-md-1 text-center" style={{backgroundColor: "#1F8F8E"}}>
              </div>
            </div>
              <div class="row">
                <div class="col-md-12 text-center" style={{backgroundColor: "#1F8F8E"}}>
                  <br/><br/><br/><br/><br/><br/>
                </div>
              </div>
            </div>
          <div class="col-md-2">
          </div>
        </div>
      </div>
      <DefaultFooter/>
    </div>
  );
}