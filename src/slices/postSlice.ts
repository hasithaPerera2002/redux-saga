import {createSlice} from "@reduxjs/toolkit";
import {Post} from "../interfaces/post.ts";

export interface PostState {
    posts: Array<Post>;
    isLoading: boolean;
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
};
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts: (state, action) => {
            state.posts=action.payload;
            state.isLoading=false;
        },
    },
});

export const {getPosts} = postSlice.actions;
export default postSlice.reducer;
