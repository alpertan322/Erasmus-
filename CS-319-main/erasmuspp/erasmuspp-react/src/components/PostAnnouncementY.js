import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import LargeBreak from './LargeBreak';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/Button';
import DefaultFooter from './DefaultFooter';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostAnnouncementY() {

  const [departmentNameInit, setDepartmentNameInit] = useState([]);
  const [countryInit, setCountryInit] = useState([]);
  const [universityInit, setUniversityInit] = useState([]);

  const [departmentName, setDepartmentName] = useState("");
  const [country, setCountry] = useState("");
  const [erasmusSemester, setErasmusSemester] = useState("");
  const [university, setUniversity] = useState("");
  const [bilkentId, setBilkentId] = useState("");

  const semesters = ['Fall', 'Spring'];


  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementDescription, setAnnouncementDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/user/department")
      .then(res => setDepartmentNameInit(res.data));
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/user/country")
      .then(res => setCountryInit(res.data));
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/user/university")
      .then(res => setUniversityInit(res.data));
  }, [])

  const postAnnouncement = () => {
    axios
      .post("http://localhost:8080/api/v1/announcement/token=" + window.localStorage.getItem("USER_TOKEN"),
      {
        title: announcementTitle,
        content: announcementDescription,
        postDate: Date(),
        expireDate: "",
        filters: [
          departmentName,
          country,
          erasmusSemester,
          university,
          bilkentId
        ],
        poster: ""
      })
      .then((res) => {
        if (res.data === 1) {
          alert("Announcement posted successfully.");
        }
        else {
          alert("Something went wrong.");
        }
      }).catch((error) => {
        console.log(error);
      });
  };


  let navigate = useNavigate();
  function clickBack() {
    navigate("/main");
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
            <h1 style={{ color: '#f4eff2' }}>Post Announcement</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <LargeBreak />
          </div>
          <div class="col-md-4" style={{ backgroundColor: "#1F8F8E" }}>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="postAnnouncementTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control type='text' placeholder="Title" onChange={(e) => setAnnouncementTitle(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="postAnnouncementDescription">
                <Form.Label>Announcement Description:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Content" onChange={(e) => setAnnouncementDescription(e.target.value)}/>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>

          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br />
            <Form>
              <Form.Group className="mb-3" controlId="postAnnouncementDepartment" style={{ textAlign: 'left' }}>
                <Form.Label>Department:</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="postAnnouncementCountry" style={{ textAlign: 'left' }}>
                <Form.Label>Country:</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="postAnnouncementErasmusSemester" style={{ textAlign: 'left' }}>
                <Form.Label>Erasmus Semester:</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="postAnnouncementUniversity" style={{ textAlign: 'left' }}>
                <Form.Label>University:</Form.Label>
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="postAnnouncementNameID" style={{ textAlign: 'left' }}>
                <Form.Label>Query by ID:</Form.Label>
              </Form.Group>
            </Form>
          </div>
          <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br />
            <Form.Select aria-label="Department Select" onChange={(e) => setDepartmentName(e.target.value)}>
              <option>Select</option>
              {
              departmentNameInit
              .map((variant) => (
              <option value={variant}>{variant}</option>
              ))}
            </Form.Select>
            <br />
            <Form.Select aria-label="Country Select" onChange={(e) => setCountry(e.target.value)}>
              <option>Select</option>
              {
              countryInit
              .map((variant) => (
              <option value={variant}>{variant}</option>
              ))}
            </Form.Select>
            <br /><br />
            <Form.Select aria-label="Erasmus Semester Select" onChange={(e) => setErasmusSemester(e.target.value)}>
              <option>Select</option>
              {
              semesters
              .map((variant) => (
              <option value={variant}>{variant}</option>
              ))}
            </Form.Select>
            <br /><br />
            <Form.Select aria-label="University Select" onChange={(e) => setUniversity(e.target.value)}>
              <option>Select</option>
              {
              universityInit
              .map((variant) => (
              <option value={variant}>{variant}</option>
              ))}
            </Form.Select>
            <br /><br />
            <Form className="d-flex">
              <Form.Control onChange={(e) => setBilkentId(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <br /><br /><br /><br /><br /><br /><br />
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br /><br />
            <Button onClick={postAnnouncement} style={{ backgroundColor: "#3C7479" }}>Post Announcement</Button>
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}