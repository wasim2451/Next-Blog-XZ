'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
function Card() {
    const data = {
        id: 7,
        created_at: "2025-09-26T22:18:19.799647+00:00",
        title: "Love & Code: Two Languages Worth Learning",
        content:
            '[{"id":"81a34ad8-8c58-4e33-842a-14f7b22af5fb","type":"paragraph","props":{"backgroundColor":"default","textColor":"default","textAlignment":"left"},"content":[{"type":"text","text":"Love and code have more in common than most people think. Both demand patience, both thrive on curiosity, and both can break your heart when things don’t go the way you expected.","styles":{"textColor":"purple"}}],"children":[]}]',
        user_id: "kp_09bb8c3276424da989428e39be3cbeed",
        cover_url:
            "https://qohextfemozbghcnnylp.supabase.co/storage/v1/object/public/covers/cover-1758925080387-test-2.png",
        author: "WASIM",
        avatar_url:
            "https://lh3.googleusercontent.com/a/ACg8ocLw0xjRdgAtXuqLA8Njb9rcACAAh2YRqeeFuHgLRh9G89-2M8Dg=s96-c",
        author_email: "wasimakhtar786khan@gmail.com",
    };
    const {user}=useKindeBrowserClient();
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
        <Link href={`/dashboard/showBlogs/${data.id}`}>
            <div className="max-w-sm rounded-lg border bg-[rgb(var(--card))] border-[rgb(var(--border))] shadow-sm overflow-hidden">
                {/* Cover Image */}
                <div className="relative w-full h-48">
                    <Image
                        src={data.cover_url}
                        alt={data.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Card Body */}
                <div className="p-4">
                    {/* Title */}
                    <h2 className="text-lg font-bold text-[rgb(var(--foreground))] hover:underline cursor-pointer">
                        {data.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-[rgb(var(--foreground))]/70 mt-1 line-clamp-2">
                        {excerpt}
                    </p>

                    {/* Date */}
                    <p className="text-xs text-[rgb(var(--foreground))]/60 mt-3">{date}</p>
                </div>
            </div>
        </Link>

    );
}

export default Card;