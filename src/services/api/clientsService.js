import request from "../index";

class ClientsServices {
  static ClientsList = (params) => {
    return request.get("/clients", { params });
  };
  static ClientsDetail = (id) => {
    return request.get(`/clients/${id}`);
  };
  static ClientsCreate = (params) => {
    return request.post("/clients", params);
  };
  static ClientsUpdate = (params, id) => {
    return request.put(`/clients/${id}`, params);
  };
  static ClientsDelete = (params, id) => {
    return request.delete(`/clients/${id}`, params);
  };
}
export default ClientsServices;
