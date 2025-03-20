'use client';

import { useEffect } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPostById } from "@/redux/features/posts/postsThunks";
import { fetchUsers } from "@/redux/features/users/usersThunks";

interface PostPageClientProps {
  postId: string;
}

export default function PostPageClient({ postId }: PostPageClientProps) {
  const dispatch = useAppDispatch();
  const { selectedPost, status, error } = useAppSelector((state) => state.posts);
  const { items: users, status: userStatus } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (!postId) return; 
    dispatch(fetchPostById(postId));
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, postId, userStatus]);

  if (!postId) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">Error: Id invalido</p>
        <Link href="/posts" className="text-blue-500 hover:text-blue-700">
          Back to Posts
        </Link>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="text-center py-10">
        <div className="spinner"></div>
        <p className="mt-4">Cargando post...</p>
      </div>
    );
  }

  if (status === "failed" || !selectedPost) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-4">Error: {error || "Post not found"}</p>
        <Link href="/posts" className="text-blue-500 hover:text-blue-700">
          Volver a posts
        </Link>
      </div>
    );
  }

  const author = users.find((user) => user.id === selectedPost.userId);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      <Link href="/posts" className="mb-4 text-blue-500 hover:text-blue-700 flex items-center">
        <span>← Volver </span>
      </Link>

      <h1 className="text-3xl font-bold mb-4">{selectedPost.title}</h1>

      {author && (
        <div className="mb-6 text-gray-300">
          Escrito por: {author.name} ({author.email})
        </div>
      )}

      <div className="prose max-w-none">
        <p className="whitespace-pre-line">{selectedPost.body}</p>
      </div>
    </div>
  );
}