import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { fetchCategories } from "store/slices/categoriesSlice";
import { selectCategoriesData } from "store/selectors/categories";
import { createProduct } from "store/slices/productsSlice";
import { toast } from "sonner";
import { useEffect } from "react";
const useConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    values.images.forEach((image) => {
      formData.append("images", image);
    });
    dispatch(createProduct(formData)).then(() => {
      toast.success("Product created successfully", {
        position: "bottom-right",
        duration: 2000,
      });
      navigate("/admin/products");
    });
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name_uz: "",
      name_ru: "",
      name_en: "",
      category_id: 0,
      description_uz: "",
      description_ru: "",
      description_en: "",
      image: "",
      images: [],
    },
    onSubmit: onSubmit,
  });
  const handleImage = (e) => {
    if (
      e.target.files[0].type !== "image/jpeg" &&
      e.target.files[0].type !== "image/png" &&
      e.target.files[0].type !== "image/jpg"
    ) {
      toast.error("Only jpeg and png files are allowed", {
        position: "bottom-right",
        duration: 2000,
      });
      return;
    } else {
      setFieldValue("image", e.target.files[0]);
    }
  };
  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

    const invalidFiles = files.filter(
      (file) => !allowedTypes.includes(file.type)
    );
    if (invalidFiles.length > 0) {
      toast.error("Only jpeg and png files are allowed", {
        position: "bottom-right",
        duration: 2000,
      });
      return;
    }

    // Yangi rasmlarni qo'shish
    setImages((prevImages) => [...prevImages, ...files]);
  };

  useEffect(() => {
    dispatch(fetchCategories({}));
  }, [dispatch]);
  return {
    values,
    categories,
    categoryOptions,
    handleChange,
    handleSubmit,
    handleImage,
    handleImages,
    setFieldValue,
  };
};

export default useConnect;
