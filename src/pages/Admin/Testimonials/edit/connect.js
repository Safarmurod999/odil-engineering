import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router";
import { updateTestimonials } from "store/slices/testimonialsSlice";
import { fetchTestimonialsDetail } from "store/slices/testimonialsSlice";
import { selectTestimonialsData } from "store/selectors/testimonials";
import { toast } from "sonner";
import { useEffect } from "react";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { testimonialsData } = useSelector(selectTestimonialsData);
  console.log(testimonialsData);
  
  useEffect(() => {
    dispatch(fetchTestimonialsDetail(id));
  }, [dispatch,id]);

  const onSubmit = (values) => {
    dispatch(updateTestimonials({ params: values, id })).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Proyekt tahrirlandi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/testimonials");
      }
    });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: testimonialsData,
    onSubmit: onSubmit,
  });
  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useConnect;
