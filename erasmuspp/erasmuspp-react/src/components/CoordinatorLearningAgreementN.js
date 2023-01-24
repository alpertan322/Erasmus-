import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import Image from "./lastPrint.png";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CoordinatorLearningAgreementN() {


    const [learningAgreementFb64, setlearningAgreementFb64] = useState("");


    useEffect(() => {
      axios.get("http://localhost:8080/api/v1/announcement/")
        .then(res => {
          setlearningAgreementFb64(res.data);
        })
        .catch(err=>{
          console.log(err)
        })
  
    }, [learningAgreementFb64])
    let navigate = useNavigate();
    function clickBack() {
        navigate("/toDoList");
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
                    <header style={{ fontSize: '18px', color: 'black' }}>Download Learning Agreement </header>
                    <br></br>
                    <img id="printImage" src={Image} style={{cursor: 'pointer'}}></img>
                    <br></br><br></br>
                    
                   <br></br><br></br><br></br>
                    <Button  style={{ margin: '1rem', backgroundColor: "#3C7479", borderRadius: '20px'}}>
                        Approve
                    </Button>
                    <Button  style={{ margin: '1rem', backgroundColor: "#3C7479", borderRadius: '20px'}}>
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