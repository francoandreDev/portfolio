import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
    name: "userName",
    initialState: "",
    reducers: {
        setUserName: (state, actions) => {
            return actions.payload;
        }
    }
});

export const { setUserName } = mySlice.actions;
export default mySlice.reducer;
