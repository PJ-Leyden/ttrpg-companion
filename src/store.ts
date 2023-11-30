import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./common/security/user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	user: UserReducer,
});

const persistConfig = {
	key: "root",
	storage: storageSession,
	whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export type IRootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
