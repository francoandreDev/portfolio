import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme.slice";
import scrollY from "./slices/scrollY.slice";
import topicId from "./slices/topicId.slice";
import userName from "./slices/userName.slice";

export default configureStore({
    reducer: {
        theme,
        scrollY,
        topicId,
        userName
    }
});
