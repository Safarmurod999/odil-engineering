import request from "../index";

class UsersServices {
  static UsersList = (params) => {
    return request.get("/users", { params });
  };
  static UsersDetail = (id) => {
    return request.get(`/users/${id}`);
  };
  static UsersCreate = (params) => {
    console.log(params);
    return request.post("/signup", params);
  };
  static UsersUpdate = (params, id) => {


    return request.put(`/users/${id}`, params);
  };
  static UsersDelete = (params, id) => {
    return request.delete(`/users/${id}`, params);
  };
}
export default UsersServices;
