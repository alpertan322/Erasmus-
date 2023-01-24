import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import TopNavBar from './TopNavBar';
import DefaultFooter from './DefaultFooter';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MyApplicationsN() {


    const [myApplications, setmyAnnouncements] = useState([]);
    let preapproval, equivalance;
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/application/token=" + window.localStorage.getItem("USER_TOKEN"))
            .then(res => {
                setmyAnnouncements(res.data);
            })
            .catch(err => {
                console.log(err)
            })

    }, [])


    let navigate = useNavigate();
    function handleClickMyApplication(id, stage) {
        window.localStorage.setItem("LAST_APPLICATION", id);
        if (stage === 1)
            navigate("/myApplication");
        if(stage === 2)
            navigate("/courseRegistration");
        if(stage === 3)
            navigate("/preApprovalForm");
        if(stage===4)
            navigate("/learningAgreement")


    }
    function newApplication() {
        navigate("/editApplicationForm");
    }

    function clickBack() {
        navigate("/main");
    }
    return (
        <div>
            <TopNavBar>

            </TopNavBar>
            <div class="container-fluid">
                <div class="row" style={{ background: "#A7DFD7", }}>
                    <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
                        <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
                            Go Back
                        </Button>
                    </div>
                    <div class="col-md-8" style={{
                        display: 'grid',
                        justifyContent: 'center',
                        height: '100vh',
                        background: "#A7DFD7",
                        paddingBottom: '50px'
                    }}>
                        <div>
                            <header style={{
                                justifySelf: 'center',
                                alignItems: 'center',
                                fontSize: '50px',
                                padding: '50px',
                            }}><b>My Applications</b></header>
                        </div>


                        <Form id="scrollableMyApps" style={{
                            width: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 'auto',
                            background: '#3C8480',
                            padding: '50px',

                        }}>
                            {myApplications.map((attributes) => (
                                <Card
                                    key={attributes.id}
                                    text={attributes.body}
                                    style={{ width: '18rem', background: "#EB9181", margin: 'auto', alignItems: 'center' }}
                                    className="mb-2"
                                >
                                    <Card.Header>Application for {attributes.choice1}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>Semester: {attributes.semester}</Card.Text>
                                        <Card.Text>
                                            Stage: {attributes.stage}
                                        </Card.Text>
                                        <Card.Text>
                                            Preapproval Approved: {attributes.ispreapprovalapproved ? 'Yes' : 'No'}
                                        </Card.Text>
                                        <Card.Text>
                                            Equivalance Approved: {attributes.isequivalanceapproved ? 'Yes' : 'No'}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                    }}>

                                        <Button onClick={() =>handleClickMyApplication(attributes.id, attributes.stage)} style={{
                                            textAlign: 'center',
                                        }}>
                                            Go to Application
                                        </Button>
                                    </Card.Footer>
                                </Card>

                            ))}

                        </Form>
                        <br></br>
                        <div class="col text-center">
                            <Button onClick={newApplication}>
                                New Application
                            </Button>
                        </div>
                    </div>
                    <div class="col-md-2">

                    </div>
                </div>
            </div>
            <DefaultFooter>

            </DefaultFooter>
        </div>
    );
}
