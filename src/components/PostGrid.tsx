import { Post } from "@/types";
import PostCard from './PostCard';

interface PostGridProps {
    posts: Post[];
  }
  

const PostGrid:  React.FC<PostGridProps> = ({posts}) => {
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {posts.map(post => (
        <PostCard key={post.id} post={post} pathname="/" />
      ))}
    </div>
    )
}
export default PostGrid;