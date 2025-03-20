import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '@/types';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json() as Promise<Post[]>;
  }
);

export const fetchPostById = createAsyncThunk(
  'posts/fetchPostById',
  async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post ${id}`);
    }
    return response.json() as Promise<Post>;
  }
);