import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserLoggedInPayload, UserState } from "./models";

const initialUser: UserState = {
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "todos",
    initialState: initialUser,
    reducers: {
        userLoggedIn(state, action: PayloadAction<UserLoggedInPayload>) {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.jwt = action.payload.jwt;
            state.isLoggedIn = true;
        },
        userLoggedOut(state, action: PayloadAction<void>) {
            state = initialUser;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = userSlice.actions;
export default userSlice.reducer;
