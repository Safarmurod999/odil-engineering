import request from "../index";

class CategoriesServices {
  static CategoriesList = (params) => {
    return request.get("/categories", { params });
  };
  static CategoriesDetail = (id) => {
    return request.get(`/categories/${id}`);
  };
  static CategoriesCreate = (params) => {
    return request.post("/categories", params);
  };
  static CategoriesUpdate = (params, id) => {
    return request.put(`/categories/${id}`, params);
  };
  static CategoriesDelete = (params, id) => {
    return request.delete(`/categories/${id}`, params);
  };
}
export default CategoriesServices;
