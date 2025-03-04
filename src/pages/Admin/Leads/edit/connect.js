import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router";
import { updateLead } from "store/slices/leadsSlice";
import { fetchLeadDetail } from "store/slices/leadsSlice";
import { selectLeadsData } from "store/selectors/leads";
import { toast } from "sonner";
import { useEffect } from "react";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { leadData } = useSelector(selectLeadsData);
  useEffect(() => {
    dispatch(fetchLeadDetail(id));
  }, [dispatch,id]);

  const onSubmit = (values) => {
    dispatch(updateLead({ params: values, id })).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Lead tahrirlandi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/lead");
      }
    });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: leadData,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });
  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useConnect;
