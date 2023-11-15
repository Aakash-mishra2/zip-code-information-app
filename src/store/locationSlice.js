import { createSlice } from "@reduxjs/toolkit";
import api from '../api/base';

const initialState = {
    zipCode : '',
    location: ''
}
export const userSlice = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        fetchDetails: (state, action) => {

        }
    }
});