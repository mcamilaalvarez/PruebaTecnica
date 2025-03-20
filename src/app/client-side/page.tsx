'use client';

import UserFilter from '@/components/UserFilter';
import PostsList from '@/components/PostsList';
import Head from 'next/head';
import { useEffect } from "react";


export default function ClientSidePage() {
  useEffect(() => {
    document.title = "Client-Side";
  }, []);
  return (
    
    <>
     <Head> 
      <title>Client-Side</title>
      <meta name="description" content="Explora el consumo de un API con client-side rendering" />
      </Head>
      <div className="max-w-4xl mx-auto">
     
      <h1 className="text-3xl font-bold mb-6 text-slate-200">Posts (Client-Side)</h1>
      <UserFilter />
      <PostsList />
    </div>
    </>
    
  );
}