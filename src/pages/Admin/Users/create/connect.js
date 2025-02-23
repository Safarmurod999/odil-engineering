import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createUser } from "store/slices/usersSlice";
import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("user_name", values.user_name);
    formData.append("password", values.password);
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("email", values.email);
    formData.append("description_uz", values.description_uz);
    formData.append("description_ru", values.description_ru);
    formData.append("description_en", values.description_en);
    formData.append("avatar", values.avatar);
    dispatch(createUser(formData));
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      user_name: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
      description_uz: "",
      description_ru: "",
      description_en: "",
      avatar: "",
    },
    onSubmit: onSubmit,
  });
  const handleImage = (e) => {
    console.log(e.target.files[0]);

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
      setFieldValue("avatar", e.target.files[0]);
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
