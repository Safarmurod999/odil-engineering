import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import LeadsServices from "services/api/leadsService";
import { get } from "lodash";

const initialState = {
  leadData: null,
  leadsList: {
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

export const fetchLeads = createAsyncThunk(
  "leads/fetchLeads",
  async (params, thunkAPI) => {
    try {
      const request = await LeadsServices.LeadsList(params);
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
export const fetchLeadDetail = createAsyncThunk(
  "leads/fetchLeadDetail",
  async (id, thunkAPI) => {
    try {
      const request = await LeadsServices.LeadsDetail(id);
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
export const createLead = createAsyncThunk(
  "leads/createLead",
  async (params, thunkAPI) => {
    try {
      const request = await LeadsServices.LeadsCreate(params);
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
export const updateLead = createAsyncThunk(
  "leads/updateLead",
  async ({ params, id }, thunkAPI) => {
    try {
      console.log(params, id);

      const request = await LeadsServices.LeadsUpdate(params, id);
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
export const deleteLead = createAsyncThunk(
  "leads/deleteLead",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await LeadsServices.LeadsDelete(params, id);
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
const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLeads.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLeads.fulfilled, (state, action) => {
      state.loading = false;
      state.leadsList = {
        data: get(action, "payload.data", []),
        currentPage: get(action, "payload.currentPage", 1),
        totalPages: get(action, "payload.totalPages", 1),
      };
    });
    builder.addCase(fetchLeads.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(fetchLeadDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLeadDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.leadData = get(action, "payload.data", "");
    });
    builder.addCase(fetchLeadDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createLead.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createLead.fulfilled, (state, action) => {
      state.loading = false;
      state.leadsList = {
        ...state.leadsList,
        data: [...state.leadsList.data, action.payload.data],
      };
    });
    builder.addCase(createLead.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateLead.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateLead.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.data) {
        state.leadsList = {
          ...state.leadsList,
          data: state.leadsList.data.map((lead) =>
            lead.id === action.payload.data.id ? action.payload.data : lead
          ),
        };
      }
    });
    builder.addCase(updateLead.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteLead.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteLead.fulfilled, (state, action) => {
      state.loading = false;
      state.leadsList = {
        ...state.leadsList,
        data: state.leadsList.data.filter(
          (lead) => lead.id != action.payload.data
        ),
      };
    });
    builder.addCase(deleteLead.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export const { setFilter } = leadsSlice.actions;
export default leadsSlice.reducer;
