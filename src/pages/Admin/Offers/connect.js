import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSuppliersData, selectSuppliersFilter } from "store/selectors/suppliers";
import {
  deleteSupplier,
  fetchSuppliers,
  updateSupplier,
  setFilter,
} from "store/slices/suppliersSlice";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useConnect = () => {
  const dispatch = useDispatch();
  const suppliers = useSelector(selectSuppliersData);
  const filter = useSelector(selectSuppliersFilter);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteSupplier({ params: {}, id })).then((res) => {
      console.log(res);

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
    dispatch(updateSupplier({ params: { is_active: !is_active }, id })).then(
      (res) => {
        if (res.error) {
          console.log(res.error);
          
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
    dispatch(fetchSuppliers(filter));
  }, [filter, dispatch]);

  return {
    suppliers,
    navigate,
    handleDelete,
    handleUpdate,
    dispatch,
    filter,
    setFilter,
  };
};

export default useConnect;
