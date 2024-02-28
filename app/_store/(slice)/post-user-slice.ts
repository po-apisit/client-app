import { IPost } from "@/app/(interface)/IPost";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostUser{

}

const initialState: PostUser = {

}

const postUserSlice = createSlice({
    name:"postuser",
    initialState,
    reducers:{}
})

export default postUserSlice.reducer