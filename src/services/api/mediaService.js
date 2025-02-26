import request from "../index";

class MediaServices {
  static MediaList = (params) => {
    return request.get("/media", { params });
  };
  static MediaDetail = (id) => {
    return request.get(`/media/${id}`);
  };
  static MediaCreate = (params) => {
    console.log(params);
    return request.post("/media", params);
  };
  static MediaUpdate = (params, id) => {
    return request.put(`/media/${id}`, params);
  };
  static MediaDelete = (params, id) => {
    return request.delete(`/media/${id}`, params);
  };
}
export default MediaServices;
