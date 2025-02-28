import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTestimonialsData,
  selectTestimonialsFilter,
} from "store/selectors/testimonials";
import {
  deleteTestimonials,
  fetchTestimonials,
  updateTestimonials,
  setFilter,
} from "store/slices/testimonialsSlice";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useConnect = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector(selectTestimonialsData);
  const filter = useSelector(selectTestimonialsFilter);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTestimonials({ params: {}, id })).then((res) => {
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
    dispatch(updateTestimonials({ params: { is_active: !is_active }, id })).then(
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
    dispatch(fetchTestimonials(filter));
  }, [filter, dispatch]);

  return {
    testimonials,
    navigate,
    handleDelete,
    handleUpdate,
    dispatch,
    filter,
    setFilter,
  };
};

export default useConnect;
