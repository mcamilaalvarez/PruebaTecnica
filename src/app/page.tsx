import PostGrid from "@/components/PostGrid";
import type { Metadata } from "next";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Error al cargar los posts");
  }
  const allPosts = await res.json();
  return allPosts.slice(0, 12);
}
export const metadata: Metadata = {
  title: 'Posts ',
  description: 'Acá podrás un vistazo a algunos de los post',
};


export default async function Home() {
  const posts = await getPosts();



  return (
    <div className=" mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-200">Bienvenido</h1>
    
      <div className="grid grid-flow-col  gap-4">
        <PostGrid posts={posts}></PostGrid>

      </div>
    </div>
  );
}