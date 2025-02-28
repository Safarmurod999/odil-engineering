import request from "../index";

class TestimonialsServices {
  static TestimonialsList = (params) => {
    return request.get("/testimonials", { params });
  };
  static TestimonialsDetail = (id) => {
    return request.get(`/testimonials/${id}`);
  };
  static TestimonialsCreate = (params) => {
    return request.post("/testimonials", params);
  };
  static TestimonialsUpdate = (params, id) => {
    return request.put(`/testimonials/${id}`, params);
  };
  static TestimonialsDelete = (params, id) => {
    return request.delete(`/testimonials/${id}`, params);
  };
}
export default TestimonialsServices;
