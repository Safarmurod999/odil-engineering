import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SuppliersServices from "services/api/suppliersService";
import { get } from "lodash";

const initialState = {
  suppliersData: null,
  suppliersList: {
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

export const fetchSuppliers = createAsyncThunk(
  "leads/fetchSuppliers",
  async (params, thunkAPI) => {
    try {
      const request = await SuppliersServices.SuppliersList(params);
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
export const fetchSupplierDetail = createAsyncThunk(
  "leads/fetchSupplierDetail",
  async (id, thunkAPI) => {
    try {
      const request = await SuppliersServices.SuppliersDetail(id);
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
export const createSupplier = createAsyncThunk(
  "leads/createSupplier",
  async (params, thunkAPI) => {
    try {
      const request = await SuppliersServices.SuppliersCreate(params);
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
export const updateSupplier = createAsyncThunk(
  "leads/updateSupplier",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await SuppliersServices.SuppliersUpdate(params, id);
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
export const deleteSupplier = createAsyncThunk(
  "leads/deleteSupplier",
  async ({ params, id }, thunkAPI) => {
    try {
      console.log(params, id);

      const request = await SuppliersServices.SuppliersDelete(params, id);
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
const suppliersSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSuppliers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSuppliers.fulfilled, (state, action) => {
      state.loading = false;
      state.suppliersList = {
        data: get(action, "payload.data", []),
        currentPage: get(action, "payload.currentPage", 1),
        totalPages: get(action, "payload.totalPages", 1),
      };
    });
    builder.addCase(fetchSuppliers.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(fetchSupplierDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSupplierDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.suppliersData = get(action, "payload.data", "");
    });
    builder.addCase(fetchSupplierDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createSupplier.fulfilled, (state, action) => {
      state.loading = false;
      state.suppliersList = {
        ...state.suppliersList,
        data: [...state.suppliersList.data, action.payload.data],
      };
    });
    builder.addCase(createSupplier.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateSupplier.fulfilled, (state, action) => {
      state.loading = false;      
      if (action.payload && action.payload.data) {
        state.suppliersList = {
          ...state.suppliersList,
          data: state.suppliersList.data.map((lead) =>
            lead.id === action.payload.data.id ? action.payload.data : lead
          ),
        };
      }
    });
    builder.addCase(updateSupplier.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteSupplier.fulfilled, (state, action) => {
      state.loading = false;
      state.suppliersList = {
        ...state.suppliersList,
        data: state.suppliersList.data.filter(
          (lead) => lead.id != action.payload.data
        ),
      };
    });
    builder.addCase(deleteSupplier.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export const { setFilter } = suppliersSlice.actions;
export default suppliersSlice.reducer;
