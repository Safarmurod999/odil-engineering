import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthServices from "services/api/authService";
import { get } from "lodash";

const initialState = {
    userData: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (params, thunkAPI) => {
        try {
            const request = await AuthServices.Login(params);
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
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogout: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(logIn.fulfilled, (state, action) => {            
            state.loading = false;
            state.isAuthenticated = !!get(action, "payload.data", false);
            state.token = get(action, "payload.data", "");
            console.log(state);
            
            // state.userData = get(action, "payload.user_data", {});
        });
        builder.addCase(logIn.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.loading = false;
            state.token = "";
            // state.userData = {};
            state.error = get(action, "error.message", "");
        });
    },
});

export const { authLogout } = authSlice.actions;
export default authSlice.reducer;