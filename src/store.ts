import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./common/security/user/userSlice";

const store = configureStore({
    reducer: {
        user: UserReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
