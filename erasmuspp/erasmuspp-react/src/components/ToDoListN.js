import DefaultFooter from "./DefaultFooter";
import TopNavBar from "./TopNavBar";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FormText from "react-bootstrap/esm/FormText";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownContext from "react-bootstrap/esm/DropdownContext";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useNavigate } from "react-router-dom";

export default function ToDoListN() {

    let navigate = useNavigate();
    
    function applyFilters() {
        //TODO
    }

    function clickBack() {
        navigate("/main");
    }

    function clickView() {
        navigate("/coordinatorViewApplication")
    }
    return (
        <div>
            <TopNavBar />
            <div class="container-fluid" style={{ height: "100vh", backgroundColor: '#A7DFD7' }}>
                <div class="row">

                    <div class="col-md-2 justify-content-end" style={{ display: 'flex' }}>
                        <Button style={{ margin: '40px', height: '40px' }} onClick={clickBack}>
                            Go Back
                        </Button>
                    </div>

                    <div class="col-md-3" style={{ padding: '40px' }}>
                        <header class="col text-center" style={{ color: 'white', padding: '40px', fontSize: '30px' }}><b>Filtered Applications</b></header>
                        <Form id="scrollable" style={{ height: '70vh', background: '#3C8480', padding: '50px' }}>
                            {[
                                'Primary',
                                'Secondary',
                                'Success',
                                'Danger',
                                'Warning',
                                'Info',
                                'Light',
                                'Dark',
                            ].map((variant) => (
                                <Card
                                    key={variant}
                                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                    style={{ width: '26rem', background: "#EB9181", margin: '10px' }}
                                >
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{variant} Card Title </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer style={{ alignContent: 'center', justifyContent: 'center', }}>
                                        <Button onClick={clickView} style={{ textAlign: 'left', margin: '5px' }}>
                                            View
                                        </Button>
                                        <Button style={{ textAlign: 'right', margin: '5px' }}>
                                            Approve
                                        </Button>
                                        <Button style={{ textAlign: 'right', margin: '5px' }}>
                                            Disapprove
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            ))}
                        </Form>

                    </div>

                    <div class="col-md-1">

                    </div>

                    <div class="col-md-2" style={{ paddingTop: '100px', textAlign: 'right' }}>
                        <FormText style={{ fontSize: '20px', color: 'black' }}>Stage: </FormText>
                        <br></br><br></br>
                        <FormText style={{ fontSize: '20px', color: 'black' }}>Erasmus Semester: </FormText>
                    </div>

                    <div class="col-md-2" style={{ paddingTop: '100px', textAlign: 'left' }}>
                        <Form.Select>
                            {[
                                "Stage 1",
                                "Stage 2",
                                "Stage 3"
                            ].map((stage) => (
                                <option>{stage}</option>
                            ))}
                        </Form.Select>
                        <br></br>
                        <Form.Select>
                            {[
                                "Semester 1",
                                "Semester 2",
                                "Semester 3"
                            ].map((stage) => (
                                <option>{stage}</option>
                            ))}
                        </Form.Select>
                        <br></br><br></br>
                        <Button onClick={applyFilters()}>
                            Apply Filters
                        </Button>
                    </div>

                </div>
            </div>

            <DefaultFooter />
        </div>
    );
}