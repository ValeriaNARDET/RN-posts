import { asyncThunkCreator, buildCreateSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPosts, createPost } from "@api/posts";
import { PostsState, NewPost, Post } from "../../types/post";

const initialState: PostsState = {
  posts: [],
  loading: false,
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const postsSlice = createSliceWithThunks({
  name: "posts",
  initialState,

  reducers: (create) => ({
    fetchPosts: create.asyncThunk<Post[]>(
      async (_, { rejectWithValue }) => {
        try {
          return await getPosts();
        } catch (error) {
          console.error("Error fetching posts:", error);
          return rejectWithValue("Failed to fetch posts");
        }
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        fulfilled: (state, action) => {
          state.posts = action.payload;
          state.loading = false;
        },
        rejected: (state) => {
          state.loading = false;
        },
      }
    ),

    addPost: create.asyncThunk<Post, NewPost>(
      async (data, { rejectWithValue }) => {
        try {
          return await createPost(data);
        } catch (error) {
          console.error("Error creating post:", error);
          return rejectWithValue("Failed to create post");
        }
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        fulfilled: (state, action) => {
          state.posts.unshift(action.payload);
          state.loading = false;
        },
        rejected: (state) => {
          state.loading = false;
        },
      }
    ),
    updatePost: create.reducer(
      (state, action: PayloadAction<Post>) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );

        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      }
    )
  }),
});

export const { fetchPosts, addPost, updatePost } = postsSlice.actions;
export const selectPosts = ( state: any ) => state.posts.posts;
export default postsSlice.reducer;