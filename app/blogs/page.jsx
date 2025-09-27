import React from "react";
import { Paragraph } from "@/components/blog/Text";
import { supabase } from "@/lib/supabase/client";
import Card from "@/components/blog/card";

async function Page() {
  // Fetch posts from Supabase
  const { data: posts, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error("Error fetching posts:", error);
    return <p className="text-center mt-10">Failed to load posts</p>;
  }

  return (
    <main className="px-[10px] md:px-[20%] py-[20px] md:py-[20px] text-left min-h-screen">
      {/* Header */}
      <div className="border-b-[1px] border-slate-300 pb-[25px] md:pb-[28px]">
        <h1 className="inline-block text-3xl tracking-tight font-[700] lg:text-5xl mb-2 md:mb-4">
          Blog
        </h1>
        <Paragraph text={`Enjoy our users posts and experience. Share and contribute.`} />
      </div>

      {/* Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              created_at={post.created_at}
              author={post.author}
              avatar_url={post.avatar_url}
              cover_url={post.cover_url}
            />
          ))
        ) : (
          <p className="mt-6 text-gray-500">No posts yet. Be the first to write one!</p>
        )}
      </div>
    </main>
  );
}

export default Page;