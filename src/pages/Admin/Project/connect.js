import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProjectData,
  selectProjectFilter,
} from "store/selectors/project";
import {
  deleteProject,
  fetchProject,
  updateProject,
  setFilter,
} from "store/slices/projectSlice";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useConnect = () => {
  const dispatch = useDispatch();
  const project = useSelector(selectProjectData);
  const filter = useSelector(selectProjectFilter);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteProject, { params: {}, id }).then((res) => {
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
    dispatch(updateProject({ params: { is_active: !is_active }, id })).then(
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
    dispatch(fetchProject(filter));
  }, [filter, dispatch]);

  return {
    project,
    navigate,
    handleDelete,
    handleUpdate,
    dispatch,
    filter,
    setFilter,
  };
};

export default useConnect;
