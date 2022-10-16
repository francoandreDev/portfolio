import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
    name: "topicId",
    initialState: "aboutMe",
    reducers: {
        setTopicId: (state, action) => {
            return (state !== action.payload) ? action.payload : state
        }
    }
});

export const { setTopicId } = mySlice.actions;

export default mySlice.reducer;