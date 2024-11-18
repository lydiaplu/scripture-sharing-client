import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        initialPostSlice: (state, action) => {
            return action.payload;
        },
        addPostsSlice: (state, action) => {
            const result = [...new Set([...state, ...action.payload])]
            return result;
        },
        deletePostSlice: (state, action) => {
            const result = state.map(post => post.id === action.payload.id ? { ...post, ...action.payload } : post);
            return result;
        },
        updatePostSlice: (state, action) => {
            const result = state.map(post => post.id === action.payload.id ? { ...post, ...action.payload } : post);
            return result;
        },
        addPostsCommentSlice: (state, action) => {
            const result = state.map(post => {
                if (post.id === action.payload.id) {
                    return {
                        ...post,
                        comments: [...post.comments, action.payload.comment]
                    };
                }
                return post;
            });
            return result;
        }
    }
})

export const { initialPostSlice, addPostsSlice, deletePostSlice, updatePostSlice, addPostsCommentSlice } = postsSlice.actions;
export default postsSlice.reducer;