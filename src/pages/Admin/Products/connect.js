import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductsData,
  selectProductsFilter,
} from "store/selectors/products";
import {
  deleteProduct,
  fetchProducts,
  updateProduct,
  setFilter,
} from "store/slices/productsSlice";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useConnect = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsData);
  const filter = useSelector(selectProductsFilter);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteProduct({ params: {}, id })).then((res) => {
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
    dispatch(updateProduct({ params: { is_active: !is_active }, id })).then(
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
    dispatch(fetchProducts(filter));
  }, [filter, dispatch]);

  return {
    products,
    navigate,
    handleDelete,
    handleUpdate,
    dispatch,
    filter,
    setFilter,
  };
};

export default useConnect;
