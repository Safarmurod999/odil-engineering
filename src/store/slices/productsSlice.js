import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsServices from "services/api/productsService";
import { get } from "lodash";

const initialState = {
  productData: null,
  productsList: {
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

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params, thunkAPI) => {
    try {
      const request = await ProductsServices.ProductsList(params);
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
export const fetchProductsDetail = createAsyncThunk(
  "products/fetchProductsDetail",
  async (id, thunkAPI) => {
    try {
      const request = await ProductsServices.ProductsDetail(id);
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
export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (params, thunkAPI) => {
    try {
      const request = await ProductsServices.ProductsCreate(params);
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
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await ProductsServices.ProductsUpdate(params, id);
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
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await ProductsServices.ProductsDelete(params, id);
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
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productsList = {
        data: get(action, "payload.data", []),
        currentPage: get(action, "payload.currentPage", 1),
        totalPages: get(action, "payload.totalPages", 1),
      };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(fetchProductsDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.productData = get(action, "payload.data", "");
    });
    builder.addCase(fetchProductsDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.productsList = {
        ...state.productsList,
        data: [...state.productsList.data, action.payload.data],
      };
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.data) {
        state.productsList = {
          ...state.productsList,
          data: state.productsList.data.map((user) =>
            user.id === action.payload.data.id ? action.payload.data : user
          ),
        };
      }
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.productsList = {
        ...state.productsList,
        data: state.productsList.data.filter(
          (user) => user.id != action.payload.data
        ),
      };
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export const { setFilter } = productsSlice.actions;
export default productsSlice.reducer;
