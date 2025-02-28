import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectClientsData,
  selectClientsFilter,
} from "store/selectors/clients";
import {
  deleteClients,
  fetchClients,
  updateClients,
  setFilter,
} from "store/slices/clientsSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const useConnect = () => {
  const dispatch = useDispatch();
  const clients = useSelector(selectClientsData);
  const filter = useSelector(selectClientsFilter);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteClients({ params: {}, id })).then((res) => {
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
    dispatch(updateClients({ params: { is_active: !is_active }, id })).then(
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
    dispatch(fetchClients(filter));
  }, [filter, dispatch]);

  return {
    clients,
    navigate,
    handleDelete,
    handleUpdate,
    dispatch,
    filter,
    setFilter,
  };
};

export default useConnect;
