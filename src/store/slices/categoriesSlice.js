import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CategoriesServices from "services/api/categoriesService";
import { get } from "lodash";

const initialState = {
  categoriesData: null,
  categoriesList: {
    data: [],
    currentPage: 1,
    totalPages: 1,
  },
  loading: false,
  error: null,

  filter: {
    page: 1,
    limit: 10,
    // search: "",
  },
};

export const fetchCategories = createAsyncThunk(
  "auth/fetchCategories",
  async (params, thunkAPI) => {
    try {
      const request = await CategoriesServices.CategoriesList(params);
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
export const fetchCategoriesDetail = createAsyncThunk(
  "auth/fetchCategoriesDetail",
  async (id, thunkAPI) => {
    try {
      const request = await CategoriesServices.CategoriesDetail(id);
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
export const createCategory = createAsyncThunk(
  "auth/createCategory",
  async (params, thunkAPI) => {
    try {
      const request = await CategoriesServices.CategoriesCreate(params);
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
export const updateCategory = createAsyncThunk(
  "auth/updateCategory",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await CategoriesServices.CategoriesUpdate(params, id);
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
export const deleteCategory = createAsyncThunk(
  "auth/deleteCategory",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await CategoriesServices.CategoriesDelete(params, id);
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
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categoriesList = {
        data: get(action, "payload.data", []),
        currentPage: get(action, "payload.currentPage", 1),
        totalPages: get(action, "payload.totalPages", 1),
      };
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(fetchCategoriesDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoriesDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.categoriesData = get(action, "payload.data", "");
    });
    builder.addCase(fetchCategoriesDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categoriesList = {
        ...state.categoriesList,
        data: [...state.categoriesList.data, action.payload.data],
      };
    });
    builder.addCase(createCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.data) {
        state.categoriesList = {
          ...state.categoriesList,
          data: state.categoriesList.data.map((user) =>
            user.id === action.payload.data.id ? action.payload.data : user
          ),
        };
      }
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categoriesList = {
        ...state.categoriesList,
        data: state.categoriesList.data.filter(
          (user) => user.id != action.payload.data
        ),
      };
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export const { setFilter } = categoriesSlice.actions;
export default categoriesSlice.reducer;
