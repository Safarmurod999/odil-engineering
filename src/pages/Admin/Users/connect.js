import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData, selectUsersFilter } from "store/selectors/users";
import {
  deleteUser,
  fetchUsers,
  updateUser,
  setFilter,
} from "store/slices/usersSlice";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { useFormik } from "formik";
import { toast } from "sonner";

const useConnect = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsersData);
  const filter = useSelector(selectUsersFilter);
  const navigate = useNavigate();
  const pathname = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmit = (values) => {
    if (values.user_name.trim()) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("user_name", values.user_name);
      setSearchParams(newParams);
      dispatch(setFilter({ user_name: values.user_name }));
    }
  };
  const { setFieldValue, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      user_name: searchParams.get("user_name") ?? "",
      password: "",
    },
    onSubmit: onSubmit,
  });

  const handleReset = () => {
    setFieldValue("user_name", "");
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("user_name");
    setSearchParams(newParams);
    dispatch(setFilter({ user_name: "" }));
  };
  const handleDelete = (id) => {
    dispatch(deleteUser({ params: {}, id }));
    toast.success("User deleted successfully", {
      position: "bottom-right",
      duration: 2000,
    });
  };

  const handleUpdate = (e, id, is_active) => {
    e.preventDefault();
    dispatch(updateUser({ params: { is_active: !is_active }, id }));
    toast.success("User updated successfully", {
      position: "bottom-right",
      duration: 2000,
    });
  };

  useEffect(() => {
    dispatch(fetchUsers(filter));
  }, [filter, dispatch]);

  return {
    users,
    navigate,
    values,
    handleChange,
    handleSubmit,
    handleReset,
    handleDelete,
    handleUpdate,
    dispatch,
    filter,
    setFilter,
  };
};

export default useConnect;
