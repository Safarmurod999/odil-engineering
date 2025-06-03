import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router";
import { updateSupplier } from "store/slices/suppliersSlice";
import { fetchSupplierDetail } from "store/slices/suppliersSlice";
import { selectSuppliersData } from "store/selectors/suppliers";
import { toast } from "sonner";
import { useEffect } from "react";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { suppliersData } = useSelector(selectSuppliersData);
  useEffect(() => {
    dispatch(fetchSupplierDetail(id));
  }, [dispatch,id]);
  console.log("supplierData", suppliersData);
  
  const onSubmit = (values) => {
    dispatch(updateSupplier({ params: values, id })).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Taklif tahrirlandi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/suppliers");
      }
    });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: suppliersData,
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
