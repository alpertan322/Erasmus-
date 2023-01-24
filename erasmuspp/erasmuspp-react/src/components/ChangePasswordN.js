import DefaultFooter from './DefaultFooter';
import TopNavBar from './TopNavBar';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ForgotPasswordN() {

    const [userOldPassword, setuserOldPassword] = useState("");
    const [userOldPasswordInput, setuserOldPasswordInput] = useState("");
    const [userNewPassword, setuserNewPassword] = useState("");
    const [userNewPasswordConfirm, setuserNewPasswordConfirm] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/user/token=" + window.localStorage.getItem("USER_TOKEN"))
          .then(res => {
            setuserOldPassword(res.data.password);
          })
          .catch(err=>{
            console.log(err)
          })
    
      }, [])

    const changePassword = () => {
        if (userNewPassword != userNewPasswordConfirm) {
            alert("Passwords do not match!");
            return;
        }

        if (userOldPassword != userOldPasswordInput) {
            alert("Your old password is wrong!");
            return;
        }
        axios
            .put("http://localhost:8080/api/v1/user/changePassword/token=" + window.localStorage.getItem("USER_TOKEN"), 
                userNewPassword
            )
            .then(res => {
                if (res.data === 1) {
                    alert("Password changed successfully");
                }
                else {
                    alert("Something went wrong");
                }
            });
    }

    let checked = false;
    let navigate = useNavigate();
    function clickBack() {
        navigate("/profile");
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
                    <header style={{ fontSize: '50px', color: '#FBFCF8' }}>Change Password</header>
                    <br></br><br></br><br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black' }}>Enter Old Password: </header>
                    <br></br>
                    <input onChange={(e) => setuserOldPasswordInput(e.target.value)}></input>
                    <br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black' }}>Enter New Password: </header>
                    <br></br>
                    <input onChange={(e) => setuserNewPassword(e.target.value)}></input>
                    <br></br><br></br>
                    <header style={{ fontSize: '18px', color: 'black' }}>Confirm New Password: </header>
                    <br></br>
                    <input onChange={(e) => setuserNewPasswordConfirm(e.target.value)}></input>
                    <br></br><br></br><br></br><br></br>
                    <Button onClick={changePassword} style={{ backgroundColor: "#3C7479" }}>
                        Change Password
                    </Button>
                </div>

                <div class="col-md-2">

                </div>

            </div>
            <DefaultFooter />
        </div>
    );
}