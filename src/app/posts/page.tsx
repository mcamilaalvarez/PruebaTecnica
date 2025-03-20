import { Metadata } from 'next';
import PostsList from '@/components/PostsList';
import UserFilter from '@/components/UserFilter';

export const metadata: Metadata = {
  title: ' Lista Posts',
  description: 'Busca todos los post o selecciona los post de un usuario en especifico',
};

export default function PostsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-900"> Posts </h1>
      <UserFilter />
      <PostsList />
    </div>
  );
} 