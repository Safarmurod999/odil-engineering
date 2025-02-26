import { useDispatch   } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { createProject } from "store/slices/projectSlice";

import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    dispatch(createProject(values)).then((res) => {
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
        navigate("/admin/project");
      }
    });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title_uz: "",
      title_en: "",
      title_ru: "",
      description_uz: "",
      description_ru: "",
      description_en: "",
      link: "",
    },
    onSubmit: onSubmit,
  });

  return {
    values,
    handleChange,
    handleSubmit
  };
};

export default useConnect;
