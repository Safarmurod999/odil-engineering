import request from "../index";

class LeadsServices {
  static LeadsList = (params) => {
    return request.get("/leads", { params });
  };
  static LeadsDetail = (id) => {
    return request.get(`/leads/${id}`);
  };
  static LeadsCreate = (params) => {
    console.log(params);
    return request.post("/leads", params);
  };
  static LeadsDelete = (params, id) => {
    return request.delete(`/leads/${id}`, params);
  };
}
export default LeadsServices;
