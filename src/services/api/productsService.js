import request from "../index";

class ProductsServices {
  static ProductsList = (params) => {
    return request.get("/products", { params });
  };
  static ProductsDetail = (id) => {
    return request.get(`/products/${id}`);
  };
  static ProductsCreate = (params) => {
    return request.post("/products", params);
  };
  static ProductsUpdate = (params, id) => {
    return request.put(`/products/${id}`, params);
  };
  static ProductsDelete = (params, id) => {
    return request.delete(`/products/${id}`, params);
  };
}
export default ProductsServices;
    