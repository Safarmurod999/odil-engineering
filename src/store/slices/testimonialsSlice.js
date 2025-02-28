import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TestimonialsServices from "services/api/testimonialsService";
import { get } from "lodash";

const initialState = {
  testimonialsData: null,
  testimonialsList: {
    data: [],
    currentPage: 1,
    totalPages: 1,
  },
  loading: false,
  error: null,

  filter: {
    page: 1,
    limit: 10,
  },
};

export const fetchTestimonials = createAsyncThunk(
  "media/fetchTestimonials",
  async (params, thunkAPI) => {
    try {
      const request = await TestimonialsServices.TestimonialsList(params);
      if (get(request, "status") != 200) {
        return thunkAPI.rejectWithValue(get(request, "message", ""));
      }
      const respond = await request.data;
      return respond;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const fetchTestimonialsDetail = createAsyncThunk(
  "media/fetchTestimonialsDetail",
  async (id, thunkAPI) => {
    try {
      const request = await TestimonialsServices.TestimonialsDetail(id);
      if (get(request, "status") != 200) {
        return thunkAPI.rejectWithValue(get(request, "message", ""));
      }
      const respond = await request.data;
      return respond;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const createTestimonials = createAsyncThunk(
  "media/createTestimonials",
  async (params, thunkAPI) => {
    try {
      const request = await TestimonialsServices.TestimonialsCreate(params);
      if (get(request, "status") != 201) {
        return thunkAPI.rejectWithValue(get(request, "message", ""));
      }
      const respond = await request.data;
      return respond;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const updateTestimonials = createAsyncThunk(
  "media/updateTestimonials",
  async ({ params, id }, thunkAPI) => {
    try {
      console.log(params, id);

      const request = await TestimonialsServices.TestimonialsUpdate(params, id);
      if (get(request, "status") != 200) {
        return thunkAPI.rejectWithValue(get(request, "message", ""));
      }
      const respond = await request.data;
      return respond;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const deleteTestimonials = createAsyncThunk(
  "media/deleteTestimonials",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await TestimonialsServices.TestimonialsDelete(params, id);
      if (get(request, "status") != 200) {
        return thunkAPI.rejectWithValue(get(request, "message", ""));
      }

      const respond = await request.data;
      return respond;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTestimonials.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTestimonials.fulfilled, (state, action) => {
      state.loading = false;
      state.testimonialsList = {
        data: get(action, "payload.data", []),
        currentPage: get(action, "payload.currentPage", 1),
        totalPages: get(action, "payload.totalPages", 1),
      };
    });
    builder.addCase(fetchTestimonials.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(fetchTestimonialsDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTestimonialsDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.testimonialsData = get(action, "payload.data", "");
    });
    builder.addCase(fetchTestimonialsDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createTestimonials.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTestimonials.fulfilled, (state, action) => {
      state.loading = false;
      state.testimonialsList = {
        ...state.testimonialsList,
        data: [...state.testimonialsList.data, action.payload.data],
      };
    });
    builder.addCase(createTestimonials.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateTestimonials.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTestimonials.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.data) {
        state.testimonialsList = {
          ...state.testimonialsList,
          data: state.testimonialsList.data.map((media) =>
            media.id === action.payload.data.id ? action.payload.data : media
          ),
        };
      }
    });
    builder.addCase(updateTestimonials.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteTestimonials.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTestimonials.fulfilled, (state, action) => {
      state.loading = false;
      state.testimonialsList = {
        ...state.testimonialsList,
        data: state.testimonialsList.data.filter(
          (media) => media.id != action.payload.data
        ),
      };
    });
    builder.addCase(deleteTestimonials.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export const { setFilter } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
