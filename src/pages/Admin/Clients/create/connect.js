import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { createClients } from "store/slices/clientsSlice";
import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", values.image);
    dispatch(createClients(formData)).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Mijoz yaratildi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/clients");
      }
    });
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name: "",
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
