import { IPost } from "@/app/(interface)/IPost";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostUser{
    data: IPost[];
    loadding: boolean;
    error: boolean;
    meserror: string | null;
}

const initialState: PostUser = {
    data: [],
    loadding: false,
    error: false,
    meserror: null,
}

const postUserSlice = createSlice({
    name:"postuser",
    initialState,
    reducers:{}
})

export default postUserSlice.reducer