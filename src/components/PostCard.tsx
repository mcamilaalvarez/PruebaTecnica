import React from 'react';
import Link from 'next/link';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
  pathname: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, pathname }) => {
  return (
    <div className="bg-stone-100 rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2 text-slate-900">
        {post.title}
      </h2>
      <p className="text-slate-600 mb-4 truncate">
        {post.body}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-700">
          User ID: {post.userId}
        </span>
        { pathname !== "/client-side" && (
          <Link href={`/posts/${post.id}`} className="text-blue-700 hover:text-blue-500 font-medium">
          Ver Post Completo
        </Link>
        ) }
        
      </div>
    </div>
  );
};

export default PostCard;