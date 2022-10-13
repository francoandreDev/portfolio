import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/theme.slice";

export default configureStore({
    reducer: {
        theme
    }
});
