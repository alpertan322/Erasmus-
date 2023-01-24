import DefaultFooter from './DefaultFooter';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordN() {
    let checked = false;
    let navigate = useNavigate();
    function clickBack(){
        navigate("/login");
    }

    return (
        <div class="container-fluid" >
            <div class="row" style={{ backgroundColor: '#1F8F8E', height: '100vh'}}>
                <div class="col-md-2 justify-content-end" style={{display: 'flex'}}>
                    <Button style={{margin: '40px', height: '40px'}} onClick={clickBack}>
                        Go Back
                    </Button>
                </div>

                <div class="col-md-8 text-center">
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <header style={{ fontSize: '40px', color: 'black'}}>Forgot Password?</header>
                    <br></br><br></br>
                    <header style={{ fontSize: '20px', color: 'black'}}> Please enter your university e-mail below. We will send your password in e-mail format.</header>
                    <br></br><br></br>
                    <input></input>
                    <br></br><br></br>
                    <Button style={{backgroundColor: '#3C7479'}}>Send</Button>
                    <br></br><br></br>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <input type="checkbox" disabled="true" checked={checked} style={{marginRight: '20px', scale: '2'}}></input>
                        <header style={{ color: 'white' }}>Password is sent to your e-mail</header>
                    </div>
                </div>

                <div class="col-md-2">

                </div>
                
            </div>
            <DefaultFooter/>
        </div>
    );
}