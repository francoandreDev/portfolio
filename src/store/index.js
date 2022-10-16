import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme.slice";
import scrollY from "./slices/scrollY.slice";

export default configureStore({
    reducer: {
        theme,
        scrollY
    }
});
