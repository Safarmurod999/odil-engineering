import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { createCategory } from "store/slices/categoriesSlice";
import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name_uz", values.name_uz);
    formData.append("name_ru", values.name_ru);
    formData.append("name_en", values.name_en);
    formData.append("link", values.link);
    formData.append("description_uz", values.description_uz);
    formData.append("description_ru", values.description_ru);
    formData.append("description_en", values.description_en);
    formData.append("image", values.image);
    dispatch(createCategory(formData)).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Kategoriya yaratildi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/users");
      }
    });
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name_uz: "",
      name_ru: "",
      name_en: "",
      link: "",
      description_uz: "",
      description_ru: "",
      description_en: "",
      image: "",
    },
    onSubmit: onSubmit,
  });
  const handleImage = (e) => {
    if (
      e.target.files[0].type !== "image/jpeg" &&
      e.target.files[0].type !== "image/png" &&
      e.target.files[0].type !== "image/jpg"
    ) {
      toast.error("Only jpeg and png files are allowed", {
        position: "bottom-right",
        duration: 2000,
      });
      return;
    } else {
      setFieldValue("image", e.target.files[0]);
    }
  };
  return {
    values,
    handleChange,
    handleSubmit,
    handleImage,
  };
};

export default useConnect;
