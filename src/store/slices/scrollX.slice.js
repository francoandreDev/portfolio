import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
    name: "scrollX",
    initialState: 0,
    reducers: {
        setScrollX: (state, action) => {
            return (state !== action.payload) ? action.payload : state
        }
    }
});

export const { setScrollX } = mySlice.actions;

export default mySlice.reducer;