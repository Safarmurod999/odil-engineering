import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateUser } from "store/slices/usersSlice";
import { useParams } from "react-router";
import { fetchUserDetail } from "store/slices/usersSlice";
import { selectUsersData } from "store/selectors/users";
import { useEffect } from "react";
import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userData } = useSelector(selectUsersData);
  
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("user_name", values.user_name);
    formData.append("password", values.password);
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("email", values.email);
    formData.append("avatar", values?.avatar);
    dispatch(updateUser({ params: formData, id })).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Foydalanuvchi tahrirlandi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/users");
      }
    });
  };
  useEffect(() => {
    dispatch(fetchUserDetail(id));
  }, [dispatch]);
  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: userData,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });
  const handleImage = (e) => {
    setFieldValue("avatar", e.target.files[0]);
  };
  return {
    values,
    handleChange,
    handleSubmit,
    handleImage,
  };
};

export default useConnect;
