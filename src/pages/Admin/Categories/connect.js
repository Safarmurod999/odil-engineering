import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoriesData,
  selectCategoriesFilter,
} from "store/selectors/categories";
import {
  deleteCategory,
  fetchCategories,
  updateCategory,
  setFilter,
} from "store/slices/categoriesSlice";
import { useNavigate, useSearchParams } from "react-router";
import { useFormik } from "formik";
import { toast } from "sonner";

const useConnect = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesData);
  const filter = useSelector(selectCategoriesFilter);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmit = (values) => {
    if (values.search.trim()) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("search", values.search);
      setSearchParams(newParams);
      dispatch(setFilter({ search: values.search }));
    }
  };
  const { setFieldValue, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      search: searchParams.get("search") ?? "",
    },
    onSubmit: onSubmit,
  });

  const handleReset = () => {
    setFieldValue("search", "");
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("search");
    setSearchParams(newParams);
    dispatch(setFilter({ search: "" }));
  };
  const handleDelete = (id) => {
    dispatch(deleteCategory({ params: {}, id })).then((res) => {
      if (res.error) {
        toast.error("Ma'lumotlarni o'chirib bo'lmadi", {
          position: "bottom-right",
          duration: 2000,
        });
      } else {
        toast.success("Ma'lumotlar o'chirildi", {
          position: "bottom-right",
          duration: 2000,
        });
      }
    });
  };

  const handleUpdate = (e, id, is_active) => {
    e.preventDefault();
    dispatch(updateCategory({ params: { is_active: !is_active }, id })).then(
      (res) => {
        if (res.error) {
          toast.error("Ma'lumotlarni tahrirlab bo'lmadi", {
            position: "bottom-right",
            duration: 2000,
          });
        } else {
          toast.success("Ma'lumotlar tahrirlandi", {
            position: "bottom-right",
            duration: 2000,
          });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchCategories(filter));
  }, [filter, dispatch]);

  return {
    categories,
    navigate,
    values,
    handleChange,
    handleSubmit,
    handleReset,
    handleDelete,
    handleUpdate,
    dispatch,
    filter,
    setFilter,
  };
};

export default useConnect;
