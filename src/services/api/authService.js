import request from "../index";

class AuthServices {
  static Login = (param) => {
    return request.post("/signin", param);
  };
  static Register = (param) => {
    return request.post("/signup", param);
  };
}
export default AuthServices;
