'use client';

import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { fetchPosts } from '@/redux/features/posts/postsThunks';
import PostCard from './PostCard';
import { usePathname } from 'next/navigation';

export default function PostsList() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { items: posts, status, error, filteredUserId } = useAppSelector(state => state.posts);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const filteredPosts = filteredUserId
    ? posts.filter(post => post.userId === filteredUserId)
    : posts;

  if (status === 'loading') {
    return (
      <div className="text-center py-10">
        <div className="spinner"></div>
        <p className="mt-4">Cargando posts...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center py-10 text-red-500">
        <p>Error cargando posts: {error}</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => <PostCard key={post.id} post={post} pathname={pathname}/>)
      ) : (
        <p className="text-center py-4">No se encontraron post.</p>
      )}
    </div>
  );
}