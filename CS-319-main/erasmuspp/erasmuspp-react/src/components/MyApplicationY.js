import Form from 'react-bootstrap/Form';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyApplicationY() {

  const [statementOfPurpose, setStatementOfPurpose] = useState("");
  const [sopB64, setsopB64] = useState("");

  const [CV, setCV] = useState("");
  const [CVB64, setCVB64] = useState("");

  const [appForm, setAppForm] = useState("");
  const [appFormB64, setappFormB64] = useState("");

  const [external, setExternal] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setExternal(res.data[2].content));
  }, [external])


  let navigate = useNavigate();
  function handleClickEditApplicationForm() {
    navigate("/editApplicationForm");
  }

  function handleClickViewApplicationForm() {
    navigate("/viewApplicationForm");
  }

  function handleCLickRoadmap() {
    navigate("/roadmap");
  }

  function clickBack() {
    navigate("/myApplications");
  }

  const uploadStatemenetOfPurpose = async (e) => {
    const statementOfPurpose = e.target.files[0];

    setsopB64(await toB64(statementOfPurpose));
  };

  const toB64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    })
  }

  const uploadSOPFinal = () => {
    axios
      .post("http://localhost:8080/api/v1/file/applicationId=" + window.localStorage.getItem("LAST_APPLICATION"), 
        { 
          applicationId: window.localStorage.getItem("LAST_APPLICATION"),
          content: sopB64,
          fileName: "Statement of Purpose Form",
          fileType: "Statement of Purpose",
          uploadTime: Date()
        } 
        )
      .then((res) => {
        if (res.data.status === true) {
          alert("Statement of Purpose Uploaded Successfully")
        }
        else {
          alert("Statement of Purpose Failed to Upload")
        }
      }).catch((err) => {

        alert("Statement of Purpose Failed to Upload")
      });
  }

  const downloadExternal = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = external;
    downloadLink.download = "Fill Application Form";
    downloadLink.click();
  }

  const uploadCV = async (e) => {
    const CV = e.target.files[0];

    setCVB64(await toB64(CV));
  }

  const uploadAppFormFinal = () => {
    axios
      .post("http://localhost:8080/api/v1/file/applicationId=" + window.localStorage.getItem("LAST_APPLICATION"), 
        { 
          applicationId: window.localStorage.getItem("LAST_APPLICATION"),
          content: appFormB64,
          fileName: "Application Form",
          fileType: "Application",
          uploadTime: Date()
        } 
        )
      .then((res) => {
        if (res.data.status === true) {
          alert("Application Form Uploaded Successfully")
        }
        else {
          alert("Application Form Failed to Upload")
        }
      }).catch((err) => {

        alert("Application Form Failed to Upload")
      });
  }

  const uploadCVFinal = () => {
    axios
      .post("http://localhost:8080/api/v1/file/applicationId=" + window.localStorage.getItem("LAST_APPLICATION"), 
        { 
          applicationId: window.localStorage.getItem("LAST_APPLICATION"),
          content: CVB64,
          fileName: "CV",
          fileType: "CV",
          uploadTime: Date()
        } 
        )
      .then((res) => {
        if (res.data.status === true) {
          alert("CV Uploaded Successfully")
        }
        else {
          alert("CV Failed to Upload")
        }
      }).catch((err) => {

        alert("CV Failed to Upload")
      });
  }

  const uploadApplicationForm = async (e) => {
    const appForm = e.target.files[0];

    setappFormB64(await toB64(appForm));
  };

  return (
    <div style={{ backgroundColor: "#C7D6D2" }}>
      <TopNavBar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
            <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
              GO BACK
            </Button>
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br />
            <h3 style={{ color: '#f4eff2' }}>My Application</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
          </div>
          <div class="col-md-3" style={{ backgroundColor: "#1F8F8E" }}>
            <Form.Group controlId="uploadStatementofPurposeForm" className="mb-3">
              <Form.Label style={{ color: '#f4eff2' }}>Upload Statement of Purpose</Form.Label>
              <Form.Control type="file" size="lg" value={statementOfPurpose} onChange={(e) => { setStatementOfPurpose(e.target.value); uploadStatemenetOfPurpose(e); }} />
            </Form.Group>
            <br />
            <Form.Group controlId="uploadCVForm" className="mb-3">
              <Form.Label style={{ color: '#f4eff2' }}>Upload CV</Form.Label>
              <Form.Control type="file" size="lg" value={CV} onChange={(e) => { setCV(e.target.value); uploadCV(e); }} />
            </Form.Group>
            <br />
            <Form.Group controlId="uploadApplicationForm" className="mb-3">
              <Form.Label style={{ color: '#f4eff2' }}>Upload Application Form</Form.Label>
              <Form.Control type="file" size="lg" value={appForm} onChange={(e) => { setAppForm(e.target.value); uploadApplicationForm(e); }} />
            </Form.Group>

          </div>
          <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
            <br />
            <div className='pt-2'>
              <Button style={{ backgroundColor: "#3C7479" }} onClick={uploadSOPFinal}>
                Upload
              </Button>
            </div>
            <br /><br /><br />
            <div className='pt-2'>
              <Button style={{ backgroundColor: "#3C7479" }} onClick={uploadCVFinal}>
                Upload
              </Button>
            </div>
            <br /><br /><br />
            <div className='pt-2'>
              <Button style={{ backgroundColor: "#3C7479" }} onClick={uploadAppFormFinal}>
                Upload
              </Button>
            </div>
          </div>
          <div class="col-md-3 text-center" style={{ backgroundColor: "#1F8F8E" }}>

          </div>
          <div class="col-md-2">
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
          </div>
          <div class="col-md-8 text-center" style={{ backgroundColor: "#1F8F8E" }}>
            <br /><br /><br /><br /><br />
            <Button onClick={handleCLickRoadmap} style={{ backgroundColor: "#3C7479" }}>
              Go to Roadmap
            </Button>
            <br /><br /><br /><br />
          </div>
        </div>
      </div>
      <DefaultFooter />
    </div>
  );
}