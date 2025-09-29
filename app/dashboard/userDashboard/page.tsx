import Heading, { Paragraph } from "@/components/blog/Text";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { outfit } from "@/components/blog/fonts";
import { supabase } from "@/lib/supabase/client";
import Card from '@/components/blog/card';

export default async function Dashboard() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  // ✅ Protect this page
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/");
  }

  // ✅ Kinde user
  const user = await getUser();
  if (!user) redirect("/");

  const user_object = {
    name: `${user?.given_name ?? ""} ${user?.family_name ?? ""}`,
    email: user?.email ?? "",
    avatar_url: user?.picture ?? "",
  };

  // ✅ Fetch user posts from Supabase
  let posts: any[] = [];
  let errorMsg: string | null = null;

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    errorMsg = error.message;
  } else {
    posts = data || [];
  }

//   console.log("Fetched posts:", posts);

  // ✅ User Info small component
  const UserInfo = () => (
    <div className="flex justify-center items-center gap-3 md:pt-[20px] pt-[10px]">
      {user_object.avatar_url && (
        <Image
          className="rounded-full"
          src={user_object.avatar_url?user_object.avatar_url : `/avatar.png`}
          alt="User Image"
          width={40}
          height={40}
          priority
        />
      )}
      <p
        className="text-[15px] font-bold tracking-wider"
        style={outfit.style}
      >
        {user_object.name}
      </p>
    </div>
  );

  // ✅ Return Layout
  return (
    <div className="px-[10px] md:px-[11%] py-[20px] md:py-[30px] min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:gap-3 items-center justify-center gap-2 text-center">
        <Heading text={`Dashboard of ${user?.given_name}`} />
        <Paragraph text="Write your knowledge and feelings and let the world know about it." />
        <Button className="mt-[20px] bg-white border-[2px] border-slate-800 text-black font-extrabold text-[14px] p-[20px] px-[30px] hover:bg-white hover:border-slate-400">
          <Link href={`/editor/${user?.id}`}>Write a Blog</Link>
        </Button>
        <UserInfo />
      </div>

      <hr className="border-slate-200 border-[1px] rounded-4xl md:mt-[20px] mt-[10px] mx-[20%]" />

      {/* ✅ Posts Section */}
      <div className="mt-10 mb-5">
        {errorMsg ? (
          <p className="text-red-500 text-center">Failed to load posts: {errorMsg}</p>
        ) : posts.length === 0 ? (
          <p className="text-slate-500 text-center">No blogs yet. Write your first blog!</p>
        ) : (
          <div className={posts.length<=1?`grid grid-cols-1 md:px-[25%]`:`grid grid-cols-1 md:grid-cols-2 gap-6 md:mx-[10%]`}>
            {/* Render your <Card /> here */}
            {posts.map((post) => (
                    <Card key={post.id} {...post} />
              
            ))}
          </div>
        )}
      </div>
    </div>
  );
}