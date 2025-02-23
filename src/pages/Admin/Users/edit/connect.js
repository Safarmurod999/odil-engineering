import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateUser } from "store/slices/usersSlice";
import { fetchUserDetail } from "store/slices/usersSlice";
import { useParams } from "react-router";
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
    formData.append("description_uz", values.description_uz);
    formData.append("description_ru", values.description_ru);
    formData.append("description_en", values.description_en);
    formData.append("avatar", values.avatar);
    dispatch(updateUser({ params: formData, id }));
    toast.success("User updated successfully", {
      position: "bottom-right",
      duration: 2000,
    });
  };
  useEffect(() => {
    dispatch(fetchUserDetail(id));
  }, [dispatch]);
  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: userData,
    onSubmit: onSubmit,
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
