import { IUser } from "@/app/(interface)/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface User {
    data: IUser;
    loadding: boolean;
    login: boolean;
    error: boolean;
    meserror: string | null;
}

const initialState = {

}

const authenSlice = createSlice({
    name:"authenSlice",
    initialState,
    reducers:{
        fetchingLoginPending: (state) => {

        },
        fetchingLoinSuccess: (state, action: PayloadAction<IUser>) => {

        },
        fetchingLoginFail: (state, action: PayloadAction<string>) => {

        }
    }
})

export const {fetchingLoginPending, fetchingLoinSuccess, fetchingLoginFail} = authenSlice.actions;
export default authenSlice.reducer;