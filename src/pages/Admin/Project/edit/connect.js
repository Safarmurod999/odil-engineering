import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router";
import { updateProject } from "store/slices/projectSlice";
import { fetchProjectDetail } from "store/slices/projectSlice";
import { selectProjectData } from "store/selectors/project";
import { toast } from "sonner";
import { useEffect } from "react";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { projectData } = useSelector(selectProjectData);
  useEffect(() => {
    dispatch(fetchProjectDetail(id));
  }, [dispatch]);

  const onSubmit = (values) => {
    dispatch(updateProject({ params: values, id })).then((res) => {
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
        navigate("/admin/project");
      }
    });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: projectData,
    onSubmit: onSubmit,
  });
  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useConnect;
