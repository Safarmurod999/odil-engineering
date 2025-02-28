import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ClientsServices from "services/api/clientsService";
import { get } from "lodash";

const initialState = {
  clientsData: null,
  clientsList: {
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

export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async (params, thunkAPI) => {
    try {
      const request = await ClientsServices.ClientsList(params);
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
export const fetchClientsDetail = createAsyncThunk(
  "clients/fetchClientsDetail",
  async (id, thunkAPI) => {
    try {
      const request = await ClientsServices.ClientsDetail(id);
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
export const createClients = createAsyncThunk(
  "clients/createClient",
  async (params, thunkAPI) => {
    try {
      const request = await ClientsServices.ClientsCreate(params);
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
export const updateClients = createAsyncThunk(
  "clients/updateClient",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await ClientsServices.ClientsUpdate(params, id);
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
export const deleteClients = createAsyncThunk(
  "clients/deleteClient",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await ClientsServices.ClientsDelete(params, id);
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
const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClients.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchClients.fulfilled, (state, action) => {
      state.loading = false;
      state.clientsList = {
        data: get(action, "payload.data", []),
        currentPage: get(action, "payload.currentPage", 1),
        totalPages: get(action, "payload.totalPages", 1),
      };
    });
    builder.addCase(fetchClients.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(fetchClientsDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchClientsDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.clientsData = get(action, "payload.data", "");
    });
    builder.addCase(fetchClientsDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createClients.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createClients.fulfilled, (state, action) => {
      state.loading = false;
      state.clientsList = {
        ...state.clientsList,
        data: [...state.clientsList.data, action.payload.data],
      };
    });
    builder.addCase(createClients.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateClients.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateClients.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.data) {
        state.clientsList = {
          ...state.clientsList,
          data: state.clientsList.data.map((user) =>
            user.id === action.payload.data.id ? action.payload.data : user
          ),
        };
      }
    });
    builder.addCase(updateClients.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteClients.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteClients.fulfilled, (state, action) => {
      state.loading = false;
      state.clientsList = {
        ...state.clientsList,
        data: state.clientsList.data.filter(
          (user) => user.id != action.payload.data
        ),
      };
    });
    builder.addCase(deleteClients.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export const { setFilter } = clientsSlice.actions;
export default clientsSlice.reducer;
