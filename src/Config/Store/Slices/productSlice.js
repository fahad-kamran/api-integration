import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllProduct = createAsyncThunk(
    'GET_ALL_PRODUCT',
    async () => {
        try {
            const response = await axios.get(`${apiUrl}products`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            return response.data.products;
        }
        catch (err) {
            throw err; // Handle error case
        }
    }
);

const productSlice = createSlice({
    name: 'PRODUCT',
    initialState: {
        product: null,
        error: null,
        loader: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.pending, (state, action) => {
            state.loader = true;
        })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.loader = false;
                state.product = action.payload;
                state.error = null;
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.loader = false;
                state.error = action.error.message;
            })
    }
});

export default productSlice.reducer;