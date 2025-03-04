import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MediaServices from "services/api/mediaService";
import { get } from "lodash";

const initialState = {
  mediaData: null,
  mediaList: {
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

export const fetchMedia = createAsyncThunk(
  "media/fetchMedia",
  async (params, thunkAPI) => {
    try {
      const request = await MediaServices.MediaList(params);
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
export const fetchMediaDetail = createAsyncThunk(
  "media/fetchMediaDetail",
  async (id, thunkAPI) => {
    try {
      const request = await MediaServices.MediaDetail(id);
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
export const createMedia = createAsyncThunk(
  "media/createMedia",
  async (params, thunkAPI) => {
    try {
      const request = await MediaServices.MediaCreate(params);
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
export const updateMedia = createAsyncThunk(
  "media/updateMedia",
  async ({ params, id }, thunkAPI) => {
    try {
      console.log(params, id);

      const request = await MediaServices.MediaUpdate(params, id);
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
export const deleteMedia = createAsyncThunk(
  "media/deleteMedia",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await MediaServices.MediaDelete(params, id);
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
    builder.addCase(fetchMedia.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMedia.fulfilled, (state, action) => {
      state.loading = false;
      state.mediaList = {
        data: get(action, "payload.data", []),
        currentPage: get(action, "payload.currentPage", 1),
        totalPages: get(action, "payload.totalPages", 1),
      };
    });
    builder.addCase(fetchMedia.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(fetchMediaDetail.pending, (state) => {
      state.loading = true;
      state.mediaData = null;
    });
    builder.addCase(fetchMediaDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.mediaData = get(action, "payload.data", "");
    });
    builder.addCase(fetchMediaDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createMedia.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createMedia.fulfilled, (state, action) => {
      state.loading = false;
      state.mediaList = {
        ...state.mediaList,
        data: [...state.mediaList.data, action.payload.data],
      };
    });
    builder.addCase(createMedia.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateMedia.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateMedia.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.data) {
        state.mediaList = {
          ...state.mediaList,
          data: state.mediaList.data.map((media) =>
            media.id === action.payload.data.id ? action.payload.data : media
          ),
        };
      }
    });
    builder.addCase(updateMedia.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteMedia.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteMedia.fulfilled, (state, action) => {
      state.loading = false;
      state.mediaList = {
        ...state.mediaList,
        data: state.mediaList.data.filter(
          (media) => media.id != action.payload.data
        ),
      };
    });
    builder.addCase(deleteMedia.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export const { setFilter } = mediaSlice.actions;
export default mediaSlice.reducer;
