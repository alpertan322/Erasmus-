import React, { useState, useEffect } from 'react';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';

export default function RoadmapY() {

  const [stageOneWeight, setStageOneWeight] = useState(0);
  const [stageTwoWeight, setStageTwoWeight] = useState(0);
  const [stageThreeWeight, setStageThreeWeight] = useState(0);
  const [stageFourWeight, setStageFourWeight] = useState(0);

  useEffect(() => {
    var userToken = 
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then((res) => {
          setStageOneWeight(res.data.firstName);
        });
  }, [stageOneWeight])

  useEffect(() => {
    var userToken = 
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then((res) => {
          setStageTwoWeight(res.data.firstName);
        });
  }, [stageTwoWeight])

  useEffect(() => {
    var userToken = 
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then((res) => {
          setStageThreeWeight(res.data.firstName);
        });
  }, [stageThreeWeight])

  useEffect(() => {
    var userToken = 
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then((res) => {
          setStageFourWeight(res.data.firstName);
        });
  }, [stageFourWeight])


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
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br /><br />
                <h3 style={{ color: '#f4eff2' }}>Roadmap</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-1 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
              <div class="col-md-10 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br /><br /><br /><br /><br />
                <ProgressBar style={{ height: "2rem" }}>
                  {/* <ProgressBar striped style={{ backgroundColor: "#76AA5F" }} animated now={stageOneWeight} key={1} label={"Application"} />
                  <ProgressBar striped style={{ backgroundColor: "#54363D" }} animated now={stageTwoWeight} key={2} label={"Course Registration"} />
                  <ProgressBar striped style={{ backgroundColor: "#266A80" }} animated now={stageThreeWeight} key={3} label={"Pre-Approval Form"} />
                  <ProgressBar striped style={{ backgroundColor: "#385A4E" }} animated now={stageFourWeight} key={4} label={"Learning Agreement"} /> */}
                  <ProgressBar striped style={{ backgroundColor: "#76AA5F" }} animated now={25} key={1} label={"Application"} />
                  <ProgressBar striped style={{ backgroundColor: "#54363D" }} animated now={25} key={2} label={"Course Registration"} />
                  <ProgressBar striped style={{ backgroundColor: "#266A80" }} animated now={25} key={3} label={"Pre-Approval Form"} />
                  <ProgressBar striped style={{ backgroundColor: "#385A4E" }} animated now={25} key={4} label={"Learning Agreement"} />
                </ProgressBar>
              </div>
              <div class="col-md-1 text-center" style={{ backgroundColor: "#1F8F8E" }}>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center" style={{ backgroundColor: "#1F8F8E" }}>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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