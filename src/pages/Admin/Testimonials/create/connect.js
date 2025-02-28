import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { createTestimonials } from "store/slices/testimonialsSlice";

import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    dispatch(createTestimonials(values)).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Proyekt yaratildi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/testimonials");
      }
    });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name_uz: "",
      name_en: "",
      name_ru: "",
      message_uz: "",
      message_ru: "",
      message_en: "",
    },
    onSubmit: onSubmit,
  });

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useConnect;
