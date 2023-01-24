import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Image from "./lastPrint.png";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

export default function LearningAgreementN() {

  const [learningAgreementF, setlearningAgreementF] = useState("");
  const [learningAgreementFb64, setlearningAgreementFb64] = useState("");


  let checked = false;
  let submissionSuccess = false;
  let navigate = useNavigate();
  function clickBack() {
    navigate("/myApplication");
  }

  function handleCLickRoadmap() {
    navigate("/roadmap");
  }

  const uploadlearningAgreementF = async (e) => {
    const learningAgreementF = e.target.files[0];

    setlearningAgreementFb64(await toB64(learningAgreementF));
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

  const uploadLearningAgreementFinal = () => {
    console.log(learningAgreementFb64);
    axios
      .post("http://localhost:8080/api/v1/application/uploadPreApprovalForm/token=" + window.localStorage.getItem("USER_TOKEN"),
        {
          learningAgreement: learningAgreementFb64
        }
      )
      .then((res) => {
        if (res.data.status === true) {
          alert("Pre Approval Form Uploaded Successfully")
        }
        else {
          alert("Pre Approval Form Failed to Upload")
        }
      }).catch((err) => {

        alert("Pre Approval Form Failed to Upload")
      });
  }

  function clickPrint() {
    fetch("ErasmusLearningAgreement.docx").then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Erasmus Learning Agreement.docx';
        alink.click();
      })
    })
  }

  function clickUpload() {

  }

  function clickSubmit() {
    if (submissionSuccess)
      alert("Learning Agreement Submitted Succesfully!");
    else
      alert("Learning Agreement Submission Failed.");
  }

  return (
    <div class="container-fluid">
      <TopNavBar />
      <div class="row" style={{ backgroundColor: '#1F8F8E', height: '100vh' }}>

        <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
          <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
            Go Back
          </Button>
        </div>

        <div class="col-md-8 text-center">
          <br></br>
          <header style={{ fontSize: '50px', color: '#FBFCF8' }}>Learning Agreement</header>
          <br></br><br></br><br></br><br></br>
          <header style={{ fontSize: '18px', color: 'black' }}>Print Learning Agreement </header>
          <br></br>
          <img id="printImage" src={Image} onClick={clickPrint} style={{ cursor: 'pointer' }}></img>
          <br></br><br></br>
          <header style={{ fontSize: '18px', color: 'black' }}>Upload Signed Learning Agreement</header>
          <br></br>
          <div class="justify-content-center" style={{ display: 'flex' }}>
            <Form.Group style={{ width: '270px', justifyContent: 'center' }}>
              <Form.Control type="file" value={learningAgreementF} onChange={(e) => { setlearningAgreementF(e.target.value); uploadlearningAgreementF(e); }} size="lg" />
            </Form.Group>
          </div>
          <br></br>

          <br></br><br></br>
          <Button onClick={uploadLearningAgreementFinal} style={{ backgroundColor: "#3C7479", borderRadius: '20px', fontSize: '20px' }}>
            Submit and Upload
          </Button>
        </div>
        <div class="col-md-2">
        </div>
        <div class="row">
          <div class="col-md-5" style={{ backgroundColor: '#1F8F8E' }}>
          </div>
          <div class="col-md-2 ms-2 text-center" style={{ backgroundColor: '#1F8F8E' }}>
            <Button onClick={handleCLickRoadmap} style={{ backgroundColor: "#3C7479" }}>
              Go to Roadmap
            </Button>
            <br /><br /><br />
          </div>
          <div class="col-md-5" style={{ backgroundColor: '#1F8F8E' }}>
          </div>
        </div>

      </div>
      <DefaultFooter />
    </div>
  );
}