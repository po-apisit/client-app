import { configureStore } from "@reduxjs/toolkit";
import postUserSlice from "./(slice)/post-user-slice";
import authenSlice from "./(slice)/authen-slice"

export const store = configureStore({
    reducer:{
        postuser: postUserSlice,
        authen: authenSlice
    }
});