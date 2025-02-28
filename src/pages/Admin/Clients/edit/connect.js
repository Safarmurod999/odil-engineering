import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateClients } from "store/slices/clientsSlice";
import { useNavigate, useParams } from "react-router";
import { fetchClientsDetail } from "store/slices/clientsSlice";
import { selectClientsData } from "store/selectors/clients";
import { useEffect } from "react";
import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { clientsData } = useSelector(selectClientsData);
  const navigate = useNavigate();
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", values?.image);
    dispatch(updateClients({ params: formData, id })).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Mijoz tahrirlandi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/clients");
      }
    });
  };
  useEffect(() => {
    dispatch(fetchClientsDetail(id));
  }, [dispatch]);
  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: clientsData,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });
  const handleImage = (e) => {
    setFieldValue("image", e.target.files[0]);
  };
  return {
    values,
    handleChange,
    handleSubmit,
    handleImage,
  };
};

export default useConnect;
