import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '@/types';
import { fetchPosts, fetchPostById } from './postsThunks';

interface PostsState {
  items: Post[];
  selectedPost: Post | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filteredUserId: number | null;
}

const initialState: PostsState = {
  items: [],
  selectedPost: null,
  status: 'idle',
  error: null,
  filteredUserId: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFilteredUserId: (state, action: PayloadAction<number | null>) => {
      state.filteredUserId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Manejar fetchPosts
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Algo salió mal';
      })
      // Manejar fetchPostById
      .addCase(fetchPostById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostById.fulfilled, (state, action: PayloadAction<Post>) => {
        state.status = 'succeeded';
        state.selectedPost = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'No se pudo cargar el post';
      });
  }
});

export const { setFilteredUserId } = postsSlice.actions;
export default postsSlice.reducer;