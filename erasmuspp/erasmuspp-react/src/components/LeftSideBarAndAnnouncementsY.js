import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import AnnouncementsY from './AnnouncementsY';
import TopNavBar from './TopNavBar';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState} from 'react';
import Image from "./defaultpp.png";

export default function LeftSideBarAndAnnouncements(){

  const [userFirstName, setuserFirstName] = useState("");
  const [userSecondName, setuserSecondName] = useState("");
  const [userRole, setuserRole] = useState("");

  const [myAppsHidden, setMyAppsHidden] = useState(true);
  const [toDoListHidden, setToDoListHidden] = useState(true);
  const [registerCandidateHidden, setRegisterCandidateHidden] = useState(true);
  const [studentsListHidden, setStudentsListHidden] = useState(true);
  
  const[pp, setPP] = useState(Image);
  useEffect(() => {
    var userToken = 
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then((res) => {
          setuserFirstName(res.data.firstName);
          setuserSecondName(res.data.lastName);
          setPP(res.data.profilePhoto);
        });
  }, [userFirstName]) 

  useEffect(() => {
    var userToken = 
    axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
         .then((res) => {setuserRole(res.data.role); })
  }, [userRole] ) 

  useEffect(() => {
    // 👇️ only runs once
    setButtons();
  });


  function setButtons(){
    if(userRole == "ROLE_CANDIDATE"){
      setMyAppsHidden(false);
    }

    if(userRole == "ROLE_COORDINATOR"){
      setToDoListHidden(false);
      setStudentsListHidden(false);
    }

    if(userRole == "ROLE_ADMIN"){
      setRegisterCandidateHidden(false);
      setStudentsListHidden(false);
    }

  }

  let navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }

  function handleClickMyApplications() {
    navigate("/myApplications");
  }

  function handleClickCandidateRegistration() {
      navigate("/candidateRegistration");
  }

  function handleClickStudentsTable() {
      navigate("/studentsTable");
  }

  function handleClickToDo() {
    navigate("/toDoList");
  }

  return (
    <div>
      <TopNavBar/>
      <div class="container-fluid" style={{backgroundColor: "#1F908F"}}>
        <div class="row">
          <div class="col-md-2" style={{backgroundColor: "#A7DFD7"}}>
            <br/>
            <br/>
            <view style={{padding: 40, alignSelf: 'flex-start'}}>
              <img style={{ width: "10rem", height: "12rem" }} alt="Bootstrap Image Preview" src={pp}/>
            </view>
            <p style={{textAlign: "center"}}>
              {userFirstName} {userSecondName}
              <br/>
              <br/>
              <br/>
            </p>	
            <div className="d-grid gap-2">
              <Button onClick={handleClick} style={{backgroundColor: "#3C7479"}} size="lg">
                Profile
              </Button>
              <br/>
              <br/>
              <Button hidden={myAppsHidden} onClick={handleClickMyApplications} style={{backgroundColor: "#3C7479"}} size="lg">
                My Applications
              </Button>
              <br/>
              <br/>
              <Button hidden={toDoListHidden} onClick={handleClickToDo} style={{backgroundColor: "#3C7479"}} size="lg">
                To Do List
              </Button>
              <br/>
              <br/>
              <Button  hidden={registerCandidateHidden} onClick={handleClickCandidateRegistration} style={{backgroundColor: "#3C7479"}} size="lg">
                Register Candidate
              </Button>
              <br/>
              <br/>
              <Button hidden={studentsListHidden} onClick={handleClickStudentsTable} style={{backgroundColor: "#3C7479"}} size="lg">
                Students List
              </Button>
              <LargeBreak></LargeBreak>
            </div>
          </div>
          <div class="col-md-10">
            <div id="scrollable">
              <AnnouncementsY/>
              <br/>
            </div>
          </div>
        </div>
      </div>
      <DefaultFooter/>
    </div>
  );
}