import Form from 'react-bootstrap/Form';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import LargeBreak from './LargeBreak';

export default function CoordinatorViewApplicationN() {

    const [sopB64, setsopB64] = useState("");

    const [CVB64, setCVB64] = useState("");

    const [appFormB64, setappFormB64] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/application/")
          .then(res => {
            setsopB64(res.data);
          })
          .catch(err=>{
            console.log(err)
          })
    
      }, [sopB64])

      useEffect(() => {
        axios.get("http://localhost:8080/api/v1/announcement/")
          .then(res => {
            setCVB64(res.data);
          })
          .catch(err=>{
            console.log(err)
          })
    
      }, [CVB64])

      useEffect(() => {
        axios.get("http://localhost:8080/api/v1/announcement/")
          .then(res => {
            setappFormB64(res.data);
          })
          .catch(err=>{
            console.log(err)
          })
    
      }, [appFormB64])


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
        navigate("/toDoList");
    }

    const downloadSop = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = sopB64;
        downloadLink.download = "Fill Application Form";
        downloadLink.click();
    }

    
    const downloadApplicationForm = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = appFormB64;
        downloadLink.download = "Fill Application Form";
        downloadLink.click();
    }

    const downloadCV = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = CVB64;
        downloadLink.download = "Fill Application Form";
        downloadLink.click();
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
                        <h3 style={{ color: '#f4eff2' }}>My Application</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
                    </div>
                    <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>
                    </div>
                    <div class="col-md-2" style={{ backgroundColor: "#1F8F8E" }}>
                        <br />
                        <div className="pt-2">
                            <Form.Group controlId="uploadStatementofPurposeForm" className="mb-3">
                                <Form.Label style={{ color: '#f4eff2' }}>Download Statement of Purpose</Form.Label>
                            </Form.Group>
                        </div>

                        <br /><br /><br />
                        <div className='pt-2'>
                            <Form.Group controlId="uploadCVForm" className="mb-3">
                                <Form.Label style={{ color: '#f4eff2' }}>Download CV</Form.Label>
                            </Form.Group>
                        </div>

                        <br /><br />
                        <div className='pt-2'>
                            <Form.Group controlId="uploadApplicationForm" className="mb-3">
                                <Form.Label style={{ color: '#f4eff2' }}>Download Application Form</Form.Label>
                            </Form.Group>
                        </div>

                    </div>
                    <div class="col-md-1" style={{ backgroundColor: "#1F8F8E" }}>

                        <br />
                        <br />
                        <div className='pt-2'>
                            <Button style={{ backgroundColor: "#3C7479" }} onClick={downloadSop}>
                                Download
                            </Button>
                        </div>
                        <br /><br /><br />
                        <div className='pt-2'>
                            <Button style={{ backgroundColor: "#3C7479" }} onClick={downloadCV}>
                                Download
                            </Button>
                        </div>
                        <br /><br /><br />
                        <div className='pt-2'>
                            <Button style={{ backgroundColor: "#3C7479" }} onClick={downloadApplicationForm}>
                                Download
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
                        <LargeBreak></LargeBreak>
                        <Button onClick={(e) => { }} style={{ margin: '2rem', backgroundColor: "#3C7479" }}>
                            Approve
                        </Button>
                        <Button onClick={(e) => { }} style={{ margin: '2rem', backgroundColor: "#3C7479" }}>
                            Disapprove
                        </Button>
                    </div>
                </div>
            </div>
            <DefaultFooter />
        </div>
    );
}