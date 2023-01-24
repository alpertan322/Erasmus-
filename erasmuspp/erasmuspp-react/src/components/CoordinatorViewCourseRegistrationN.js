import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import DefaultFooter from './DefaultFooter';
import LargeBreak from './LargeBreak';
import { useNavigate } from "react-router-dom";
import TopNavBar from './TopNavBar';
import axios from 'axios';

export default function CoordinatorViewCourseRegistrationN() {


  const [bilkentCourses, setBilkentCourses] = useState([])
  const [preApprovedCourses, setPreApprovedCourses] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setBilkentCourses(res.data));
  }, [bilkentCourses])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPreApprovedCourses(res.data));
  }, [preApprovedCourses])

  let navigate = useNavigate();

  function clickBack() {
    navigate("/toDoList");
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
              {bilkentCourses.map((index) => {
                return (
                  <div key={index}>
                    <input disabled="true" type="text" class="form-control mb-4"
                      style={{ width: "14rem", height: "2rem" }}
                      id="profileScreenEmail"
                      aria-describedby="emailHelp"
                      value={index.title} />
                  </div>
                )
              })}
            </div>
            <LargeBreak></LargeBreak>
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <h5 className='pt-4' style={{ color: '#f4eff2' }}>
              Pre-approved Courses for Equivalence:
            </h5>
            <div class="form-group">
              {preApprovedCourses.map((index) => {
                return (
                  <div key={index}>
                    <input disabled="true" type="text" class="form-control mb-4"
                      style={{ width: "14rem", height: "2rem" }}
                      id="profileScreenEmail"
                      aria-describedby="emailHelp"
                      value={index.title} />

                  </div>
                )
              })}
            </div>
            <LargeBreak></LargeBreak>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 text-center">
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
          <Button onClick={(e) => { }} style={{  margin: '2rem',  backgroundColor: "#3C7479" }}>
              Approve
            </Button>
            <Button onClick={(e) => { }} style={{ margin: '2rem' , backgroundColor: "#3C7479" }}>
              Disapprove
            </Button>
            <LargeBreak></LargeBreak>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  )
}