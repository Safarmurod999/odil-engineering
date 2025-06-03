import request from "../index";

class SuppliersServices {
  static SuppliersList = (params) => {
    return request.get("/suppliers", { params });
  };
  static SuppliersDetail = (id) => {
    return request.get(`/suppliers/${id}`);
  };
  static SuppliersCreate = (params) => {
    console.log(params);
    return request.post("/suppliers", params);
  };
  static SuppliersUpdate = (params, id) => {
    return request.put(`/suppliers/${id}`, params);
  };
  static SuppliersDelete = (params, id) => {
    return request.delete(`/suppliers/${id}`, params);
  };
}
export default SuppliersServices;
