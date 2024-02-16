import { IUser } from "@/app/(interface)/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface User {
    data: IUser;
    loadding: boolean;
    login: boolean;
    error: boolean;
    meserror: string | null;
}

const initialState : User = {
    data: {
        ID_USER: "",
        FIRST_NAME: "",
        LAST_NAME: "",
        EMAIL: ""},
    loadding: false,
    login: false,
    error: false,
    meserror: null
}

const authenSlice = createSlice({
    name:"authenSlice",
    initialState,
    reducers:{
        fetchingLoginPending: (state) => {
            state.loadding = true;
            state.login = false;
            state.error = false;
            state.data = {
                        ID_USER: "",
                        FIRST_NAME: "",
                        LAST_NAME: "",
                        EMAIL: ""};
            state.meserror = null;
        },
        fetchingLoinSuccess: (state, action: PayloadAction<IUser>) => {
            state.data = action.payload;
            state.error = false;
            state.loadding = false;
            state.login = true;
            state.meserror = null;
        },
        fetchingLoginFail: (state, action: PayloadAction<string>) => {
            state.data = {
                ID_USER: "",
                FIRST_NAME: "",
                LAST_NAME: "",
                EMAIL: ""};
            state.login = false;
            state.error = true;
            state.meserror = action.payload,
            state.loadding = false;
        }
    }
})

export const {fetchingLoginPending, fetchingLoinSuccess, fetchingLoginFail} = authenSlice.actions;
export default authenSlice.reducer;