import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const loginAPi = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${apiUrl}auth/login`, {
                username,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const LoginSlice = createSlice({
    name: "LOGIN_SLICE",
    initialState: {
        token: localStorage.getItem('token') || null,
        userData: false,
        loader: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAPi.pending, (state, action) => {
                state.loader = true;
            })
            .addCase(loginAPi.fulfilled, (state, action) => {
                state.loader = false;
                state.userData = action.payload;
                state.error = null;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(loginAPi.rejected, (state, action) => {
                state.error = action.payload.message;
                state.loader = false;
            })
    }
});

export default LoginSlice.reducer;