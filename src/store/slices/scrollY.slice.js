import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
    name: "scrollY",
    initialState: 0,
    reducers: {
        setScrollY: (state, action) => {
            return (state !== action.payload) ? action.payload : state
        }
    }
});

export const { setScrollY } = mySlice.actions;

export default mySlice.reducer;