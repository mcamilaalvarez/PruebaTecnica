import PostPageClient from "@/components/PostPageClient";
import { use } from "react";
import type { Metadata } from "next";

interface Params {
  id: string;
}
export const metadata: Metadata = {
  title: "Detalle Post",
  description: "Detalle del post segun su id",
};

export default function PostPage({ params }: { params: Promise<Params> }) {
  const { id } = use(params);
  return  <PostPageClient postId={id}/> ;
}