import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router";
import { updateMedia } from "store/slices/mediaSlice";
import { fetchProducts } from "store/slices/productsSlice";
import { selectProductsData } from "store/selectors/products";
import { fetchMediaDetail } from "store/slices/mediaSlice";
import { selectMediaData } from "store/selectors/media";
import { toast } from "sonner";
import { useEffect } from "react";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { mediaData } = useSelector(selectMediaData);
  useEffect(() => {
    dispatch(fetchMediaDetail(id));
  }, [dispatch]);
  const products = useSelector(selectProductsData);
  const productOptions = products?.productsList?.data.map((product) => ({
    value: product.id,
    label: product.name_uz,
  }));
  const onSubmit = (values) => {
    dispatch(updateMedia({ params: values, id })).then(() => {
      toast.success("Media updated successfully", {
        position: "bottom-right",
        duration: 2000,
      });
      navigate("/admin/media");
    });
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: mediaData,
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
