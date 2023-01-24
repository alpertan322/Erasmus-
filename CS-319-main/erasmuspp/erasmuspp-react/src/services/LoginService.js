import axios from "axios";

const LOGIN_BASE_URL = "";

class LoginService{

    login(){
        return axios.get(LOGIN_BASE_URL);
    }

    
}