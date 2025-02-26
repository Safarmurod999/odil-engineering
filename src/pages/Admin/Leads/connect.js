import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLeadsData,
  selectLeadsFilter,
} from "store/selectors/leads";
import {
  deleteLead,
  fetchLeads,
  updateLead,
  setFilter,
} from "store/slices/leadsSlice";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useConnect = () => {
  const dispatch = useDispatch();
  const leads = useSelector(selectLeadsData);
  const filter = useSelector(selectLeadsFilter);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteLead({ params: {}, id })).then((res) => {
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
    dispatch(updateLead({ params: { is_active: !is_active }, id })).then(
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
    dispatch(fetchLeads(filter));
  }, [filter, dispatch]);

  return {
    leads,
    navigate,
    handleDelete,
    handleUpdate,
    dispatch,
    filter,
    setFilter,
  };
};

export default useConnect;
