import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UsersServices from "services/api/usersService";
import { get } from "lodash";

const initialState = {
  userData: null,
  usersList: {
    data: [],
    currentPage: 1,
    totalPages: 1,
  },
  loading: false,
  error: null,

  filter: {
    page: 1,
    limit: 10,
    search: "",
  },
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (params, thunkAPI) => {
    try {
      const request = await UsersServices.UsersList(params);
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
export const fetchUserDetail = createAsyncThunk(
  "users/fetchUserDetail",
  async (id, thunkAPI) => {
    try {
      const request = await UsersServices.UsersDetail(id);
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
export const createUser = createAsyncThunk(
  "users/createUser",
  async (params, thunkAPI) => {
    try {      
      const request = await UsersServices.UsersCreate(params);
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
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ params, id }, thunkAPI) => {
    try {
      console.log(params, id);

      const request = await UsersServices.UsersUpdate(params, id);
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
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async ({ params, id }, thunkAPI) => {
    try {
      const request = await UsersServices.UsersDelete(params, id);
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
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = {
        data: get(action, "payload.data", []),
        currentPage: get(action, "payload.currentPage", 1),
        totalPages: get(action, "payload.totalPages", 1),
      };
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(fetchUserDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = get(action, "payload.data", "");
    });
    builder.addCase(fetchUserDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.usersList = {
        ...state.usersList,
        data: [...state.usersList.data, action.payload.data],
      };
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.data) {
        state.usersList = {
          ...state.usersList,
          data: state.usersList.data.map((user) =>
            user.id === action.payload.data.id ? action.payload.data : user
          ),
        };
      }
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      console.log(action.payload.data);
      
      state.loading = false;      
      state.usersList = {
        ...state.usersList,
        data: state.usersList.data.filter(
          (user) => user.id != action.payload.data
        ),
      };
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = get(action, "error.message", "");
    });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
