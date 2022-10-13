import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
    name: "theme",
    initialState: "theme-dark",
    reducers: {
        changeTheme: (state) => {
            return state === "theme-dark" ? "theme-light" : "theme-dark";
        }
    }
});

export const { changeTheme } = mySlice.actions;

export default mySlice.reducer;
