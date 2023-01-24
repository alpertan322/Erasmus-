import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Image from "./lastPrint.png";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CoordinatorPreApprovalFormN() {
  
    const [preApprovalFb64, setpreApprovalFb64] = useState("");
    useEffect(() => {
      axios.get("http://localhost:8080/api/v1/announcement/")
        .then(res => {
          setpreApprovalFb64(res.data);
        })
        .catch(err=>{
          console.log(err)
        })
  
    }, [preApprovalFb64])
  
    let checked = false;
    let submissionSuccess = false;
    let navigate = useNavigate();
    function clickBack() {
        navigate("/toDoList");
    }


    const downloadPreApproval = () => {
      const downloadLink = document.createElement("a");
      downloadLink.href = preApprovalFb64;
      downloadLink.download = "Fill Application Form";
      downloadLink.click();
    }


    function clickSubmit() {
        if(submissionSuccess)
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
                    <header style={{ fontSize: '50px', color: '#FBFCF8' }}>Pre-Approval Form </header>
                    <br></br><br></br><br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black' }}>Download Pre-Approval Form </header>
                    <br></br>
                    <img id="printImage" src={Image} onClick ={downloadPreApproval} style={{cursor: 'pointer'}}></img>
                    <br></br><br></br>
                   
                    <br></br><br></br><br></br>
                    <Button  style={{ margin: '1rem', backgroundColor: "#3C7479", borderRadius: '20px'}}>
                        Approve
                    </Button>
                    <Button style={{ margin:'1rem', backgroundColor: "#3C7479", borderRadius: '20px'}}>
                        Disapprove
                    </Button>
                </div>

                <div class="col-md-2">

                </div>

            </div>
            <DefaultFooter />
        </div>
    );
}