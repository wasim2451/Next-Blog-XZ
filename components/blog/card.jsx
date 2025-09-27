'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
function Card(props) {
    const data = {
        id: props.id,
        created_at: props.created_at,
        title: props.title,
        content: props.content,
        user_id: props.user_id,
        cover_url: props.cover_url,
        author: props.author,
        avatar_url: props.avatar_url,
        author_email: props.author_email,
    };
    const { user } = useKindeBrowserClient();
    console.log(user);

    // Generate excerpt from JSON content
    let excerpt = "";
    try {
        const parsed = JSON.parse(data.content);
        if (parsed.length > 0 && parsed[0].content?.[0]?.text) {
            excerpt = parsed[0].content[0].text;
        }
    } catch {
        excerpt = "";
    }

    // Format date
    const date = new Date(data.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
    <Link href={`/dashboard/showBlogs/${data.id}`} className="block">
      <div className="rounded-lg bg-[rgb(var(--card))] overflow-hidden flex flex-col h-full">
        {/* Cover Image */}
        <div className="relative w-full h-48">
          <Image
            src={data.cover_url}
            alt={data.title}
            fill
            className="object-cover border border-[rgb(var(--border))] rounded-md"
          />
        </div>

        {/* Card Body */}
        <div className="p-4 flex flex-col flex-1">
          {/* Title */}
          <h2 className="text-lg font-bold text-[rgb(var(--foreground))] hover:underline cursor-pointer">
            {data.title}
          </h2>

          {/* Excerpt */}
          <p className="text-sm text-[rgb(var(--foreground))]/70 mt-1 line-clamp-2 flex-1">
            {excerpt}
          </p>

          {/* Date */}
          <p className="text-xs text-[rgb(var(--foreground))]/60 mt-3">
            {date}
          </p>
        </div>
      </div>
    </Link>

    );
}

export default Card;