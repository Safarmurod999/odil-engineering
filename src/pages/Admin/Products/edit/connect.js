import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateProduct, fetchProductsDetail } from "store/slices/productsSlice";
import { selectProductsData } from "store/selectors/products";
import { selectCategoriesData } from "store/selectors/categories";
import { toast } from "sonner";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { productData } = useSelector(selectProductsData);
  const categories = useSelector(selectCategoriesData);
  const categoryOptions = categories?.categoriesList?.data.map((category) => ({
    value: category.id,
    label: category.name_uz,
  }));
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name_uz", values.name_uz);
    formData.append("name_ru", values.name_ru);
    formData.append("name_en", values.name_en);
    formData.append("category_id", values.category_id);
    formData.append("description_uz", values.description_uz);
    formData.append("description_ru", values.description_ru);
    formData.append("description_en", values.description_en);
    formData.append("image", values.image);
    if (values.images && values.images.length) {
      values.images.forEach((image) => {
        if (image instanceof File) {
          formData.append("images", image);
        }
      });
    } else {
      formData.append("images", values.images);
    }
    if (values.delete_images_array && values.delete_images_array.length) {
      values.delete_images_array.forEach((image) => {
        formData.append("delete_images_array", image);
      });
    }
    dispatch(updateProduct({ params: formData, id })).then(() => {
      toast.success("Product created successfully", {
        position: "bottom-right",
        duration: 2000,
      });
      setFieldValue("delete_images_array", []);
      location.reload();
      // navigate("/admin/products");
    });
  };
  useEffect(() => {
    dispatch(fetchProductsDetail(id));
  }, [dispatch]);

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name_uz: productData?.name_uz,
      name_ru: productData?.name_ru,
      name_en: productData?.name_en,
      category_id: productData?.category_id,
      description_uz: productData?.description_uz,
      description_ru: productData?.description_ru,
      description_en: productData?.description_en,
      image: productData?.image,
      images: productData?.images,
      delete_images_array: [],
    },
    onSubmit: onSubmit,
    enableReinitialize: true,
  });
  const handleImage = (e) => {
    setFieldValue("image", e.target.files[0]);
  };
  return {
    values,
    categoryOptions,
    handleChange,
    handleSubmit,
    handleImage,
    setFieldValue,
  };
};

export default useConnect;
