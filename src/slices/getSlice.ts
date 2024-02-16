import {createSlice} from "@reduxjs/toolkit";
import {PostInterface} from "../interfaces/postInterface.ts";

export interface GetState {
    posts: Array<PostInterface>;
    isLoading: boolean;
}

const initialState: GetState = {
    posts: [],
    isLoading: false,
};
export const getSlice = createSlice({
    name: 'get',
    initialState,
    reducers: {
        getPostsFetch:(state)=>{
            state.isLoading=true;
        },
        getPosts: (state, action) => {
            state.posts=action.payload;
            state.isLoading=false;
        },
        errorOccured:(state)=>{
            state.isLoading=false
        }
    },
});

export const {getPosts,getPostsFetch,errorOccured} = getSlice.actions;
export default getSlice.reducer;
