import request from "../index";

class ProjectServices {
  static ProjectList = (params) => {
    return request.get("/project", { params });
  };
  static ProjectDetail = (id) => {
    return request.get(`/project/${id}`);
  };
  static ProjectCreate = (params) => {
    console.log(params);
    return request.post("/project", params);
  };
  static ProjectUpdate = (params, id) => {
    return request.put(`/project/${id}`, params);
  };
  static ProjectDelete = (params, id) => {
    return request.delete(`/project/${id}`, params);
  };
}
export default ProjectServices;
