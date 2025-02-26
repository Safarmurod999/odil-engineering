import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  updateCategory,
  fetchCategoriesDetail,
} from "store/slices/categoriesSlice";
import { selectCategoriesData } from "store/selectors/categories";
import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { categoriesData } = useSelector(selectCategoriesData);
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name_uz", values.name_uz);
    formData.append("name_ru", values.name_ru);
    formData.append("name_en", values.name_en);
    formData.append("link", values.link);
    formData.append("description_uz", values.description_uz);
    formData.append("description_ru", values.description_ru);
    formData.append("description_en", values.description_en);
    formData.append("image", values?.image);
    dispatch(updateCategory({ params: formData, id })).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Kategoriya tahrirlandi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/users");
      }
    });
  };

  useEffect(() => {
    dispatch(fetchCategoriesDetail(id));
  }, [dispatch]);

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: categoriesData,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });
  const handleImage = (e) => {
    setFieldValue("image", e.target.files[0]);
  };
  console.log(values);

  return {
    values,
    handleChange,
    handleSubmit,
    handleImage,
  };
};

export default useConnect;
