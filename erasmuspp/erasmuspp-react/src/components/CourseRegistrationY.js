import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import { useNavigate } from "react-router-dom";
import TopNavBar from './TopNavBar';
import axios from 'axios';

export default function CourseRegistrationY() {

  const [coursesSize, setCoursesSize] = useState(2);
  const [bilkentCourses, setBilkentCourses] = useState([])
  const [preApprovedCourses, setPreApprovedCourses] = useState([])


  const postBilkentCourses = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/user/changeEmail/token=" + window.localStorage.getItem("USER_TOKEN"),
        {
          bilkentCourse: bilkentCourses
        })
      .then((res) => {
        if (res.data === true) {
          alert("Email updated successfully.");
        }
        else {
          alert("Something went wrong.");
        }
      }).catch((error) => {
        alert("Something went wrong.");
      });
  };

  const postPreApprovedCourses = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/user/changeEmail/token=" + window.localStorage.getItem("USER_TOKEN"),
        {
          preApprovedCourse: preApprovedCourses
        })
      .then((res) => {
        if (res.data === true) {
          alert("Email updated successfully.");
        }
        else {
          alert("Something went wrong.");
        }
      }).catch((error) => {
        alert("Something went wrong.");
      });
  };

  const handleBilkentChange = (index, event) => {
    let data = [...bilkentCourses];
    data[index][event.target.courseIndex] = event.target.value;
    setBilkentCourses(data);
  }

  const handleApprovedChange = (index, event) => {
    let data = [...preApprovedCourses];
    data[index][event.target.courseIndex] = event.target.value;
    setPreApprovedCourses(data)
  }

  const addFields = (index) => {
    setCoursesSize(coursesSize + 1);

    let newfield = { courseIndex: "New Course" }

    setBilkentCourses([...bilkentCourses, newfield])
    setPreApprovedCourses([...preApprovedCourses, newfield])
  }

  const removeFields = (index) => {
    setCoursesSize(coursesSize - 1);
    let data1 = [...bilkentCourses];
    let data2 = [...preApprovedCourses];
    data1.splice(index, 1)
    data2.splice(index, 1)
    setBilkentCourses(data1)
    setPreApprovedCourses(data2)
  }

  let navigate = useNavigate();
  function handleClickCourseEquivalenceRequest() {
    navigate("/courseEquivalenceRequest");
  }

  function clickBack() {
    navigate("/myApplications");
  }

  function handleCLickRoadmap() {
    navigate("/roadmap");
  }

  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid" >
        <div class="row">
          <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
            <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
              Go Back
            </Button>
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <h3 className="pt-4" style={{ color: "#f4eff2" }}>
              <br />
              Course Registration
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
            <h5 className="pt-4" style={{ color: "#f4eff2" }}>
              Bilkent Courses:
            </h5>
            <div class="form-group">
              {bilkentCourses.map((input, index) => {
                return (
                  <div key={index}>
                    <input class="form-control mb-4"
                      style={{ width: "14rem", height: "2rem" }}
                      id="profileScreenEmail"
                      aria-describedby="emailHelp"
                      placeholder={input.courseIndex}
                      onChange={event => handleBilkentChange(index, event)} />
                  </div>
                )
              })}
            </div>
            <Button onClick={() => addFields(coursesSize)}
              className='mt-3'
              style={{ backgroundColor: "#3C7479", width: "13rem" }}>Add Bilkent Course</Button>
            <Button onClick={() => removeFields(coursesSize)}
              className='mt-3'
              style={{ backgroundColor: "#3C7479", width: "13rem" }}>Remove Bilkent Course</Button>
            <br />
            <LargeBreak></LargeBreak>
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <h5 className='pt-4' style={{ color: '#f4eff2' }}>
              Pre-approved Courses for Equivalence:
            </h5>
            <div class="form-group">
              {preApprovedCourses.map((input, index) => {
                return (
                  <div key={index}>
                    <input class="form-control mb-4"
                      style={{ width: "14rem", height: "2rem" }}
                      id="profileScreenEmail"
                      aria-describedby="emailHelp"
                      placeholder={input.courseIndex}
                      onChange={event => handleApprovedChange(index, event)} />

                  </div>
                )
              })}
              <Button onClick={handleClickCourseEquivalenceRequest} style={{ backgroundColor: "#3C7479", width: "18rem" }}>
                Request Course Equivalence
              </Button>
            </div>
            <LargeBreak></LargeBreak>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 text-center">
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <Button onClick={(e) => { postBilkentCourses(e); postPreApprovedCourses(e); }} style={{ backgroundColor: "#3C7479" }}>
              Submit
            </Button>
            <br /><br /><br /><br /><br />
            <Button onClick={handleCLickRoadmap} style={{ backgroundColor: "#3C7479" }}>
              Go to Roadmap
            </Button>
            <LargeBreak></LargeBreak>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  )
}