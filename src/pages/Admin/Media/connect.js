import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMediaData, selectMediaFilter } from "store/selectors/media";
import {
  deleteMedia,
  fetchMedia,
  updateMedia,
  setFilter,
} from "store/slices/mediaSlice";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useConnect = () => {
  const dispatch = useDispatch();
  const media = useSelector(selectMediaData);
  const filter = useSelector(selectMediaFilter);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteMedia({ params: {}, id }));
    toast.success("Media deleted successfully", {
      position: "bottom-right",
      duration: 2000,
    });
  };

  const handleUpdate = (e, id, is_active) => {
    e.preventDefault();
    dispatch(updateMedia({ params: { is_active: !is_active }, id }));
    toast.success("Media updated successfully", {
      position: "bottom-right",
      duration: 2000,
    });
  };

  useEffect(() => {
    dispatch(fetchMedia(filter));
  }, [filter, dispatch]);

  return {
    media,
    navigate,
    handleDelete,
    handleUpdate,
    dispatch,
    filter,
    setFilter,
  };
};

export default useConnect;
