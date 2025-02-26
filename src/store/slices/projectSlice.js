import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProjectServices from "services/api/projectService";
import { get } from "lodash";

const initialState = {
  projectData: null,
  projectList: {
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

export const fetchProject = createAsyncThunk(
  "media/fetchProject",
  async (params, thunkAPI) => {
    try {
      const request = await ProjectServices.ProjectList(params);
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
export const fetchProjectDetail = createAsyncThunk(
  "media/fetchProjectDetail",
  async (id, thunkAPI) => {
    try {
      const request = await ProjectServices.ProjectDetail(id);
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
export const createProject = createAsyncThunk(
  "media/createProject",
  async (params, thunkAPI) => {
    try {
      const request = await ProjectServices.ProjectCreate(params);
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
export const updateProject = createAsyncThunk(
  "media/updateProject",
  async ({ params, id }, thunkAPI) => {
    try {
      console.log(params, id);

      const request = await ProjectServices.ProjectUpdate(params, id);
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
export const deleteProject = createAsyncThunk(
  "media/deleteProject",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await ProjectServices.ProjectDelete(params, id);
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
const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.loading = false;
      state.projectList = {
        data: get(action, "payload.data", []),
        currentPage: get(action, "payload.currentPage", 1),
        totalPages: get(action, "payload.totalPages", 1),
      };
    });
    builder.addCase(fetchProject.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(fetchProjectDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProjectDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.projectData = get(action, "payload.data", "");
    });
    builder.addCase(fetchProjectDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      state.loading = false;
      state.projectList = {
        ...state.projectList,
        data: [...state.projectList.data, action.payload.data],
      };
    });
    builder.addCase(createProject.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProject.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.data) {
        state.projectList = {
          ...state.projectList,
          data: state.projectList.data.map((media) =>
            media.id === action.payload.data.id ? action.payload.data : media
          ),
        };
      }
    });
    builder.addCase(updateProject.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      state.loading = false;
      state.projectList = {
        ...state.projectList,
        data: state.projectList.data.filter(
          (media) => media.id != action.payload.data
        ),
      };
    });
    builder.addCase(deleteProject.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export const { setFilter } = mediaSlice.actions;
export default mediaSlice.reducer;
