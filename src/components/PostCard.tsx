import React from 'react';
import Link from 'next/link';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
  pathname: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, pathname }) => {
  return (
    <div className="bg-stone-200 rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2 text-slate-900">
        {post.title}
      </h2>
      <p className="text-slate-600 mb-4 truncate">
        {post.body}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-500">
          User ID: {post.userId}
        </span>
        { pathname !== "/client-side" && (
          <Link href={`/posts/${post.id}`} className="text-blue-500 hover:text-blue-300 font-medium">
          Read More
        </Link>
        ) }
        
      </div>
    </div>
  );
};

export default PostCard;