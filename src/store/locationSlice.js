import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../api/base';

//create action
export const fetchPlaces = createAsyncThunk('fetchPlaces', async (zipcode) => {
    const response = await api.get(`${zipcode}`);
    return response.data;
})

const initialState = {
    isLoading: false,
    isError: false,
    data: null
}
export const userSlice = createSlice({
    name: "places",
    initialState,
    reducers: {
        clearAll: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.data = null;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchPlaces.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPlaces.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPlaces.rejected, (state,action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    }
});
export const { clearAll } = userSlice.actions;
export default userSlice.reducer;