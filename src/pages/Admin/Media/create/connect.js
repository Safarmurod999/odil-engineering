import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { createMedia } from "store/slices/mediaSlice";
import { fetchProducts } from "store/slices/productsSlice";
import { selectProductsData } from "store/selectors/products";

import { toast } from "sonner";
import { useEffect } from "react";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectProductsData);
  const productOptions = products?.productsList?.data.map((product) => ({
    value: product.id,
    label: product.name_uz,
  }));
  const onSubmit = (values) => {
    dispatch(createMedia(values)).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlar to'gri kiritilganligini tekshiring'", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Media yaratildi", {
          position: "bottom-right",
          duration: 2000,
        });
        navigate("/admin/media");
      }
    });
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      title_uz: "",
      title_en: "",
      title_ru: "",
      // description_uz: "",
      // description_ru: "",
      // description_en: "",
      link: "",
      product_id: "",
    },
    onSubmit: onSubmit,
  });
  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);
  return {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    productOptions,
  };
};

export default useConnect;
