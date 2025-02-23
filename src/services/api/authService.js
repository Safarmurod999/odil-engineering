import request from "../index";

class AuthServices {
    static Login = (param) => {        
        return request.post("/signin", param);
    };
}
export default AuthServices;