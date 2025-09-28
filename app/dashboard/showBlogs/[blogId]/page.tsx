"use client";

import { use, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    content: string;
    cover_url: string;
    created_at: string;
    author?: string;         // optional
    author_email?: string;   // optional
    avatar_url?: string;
}

function renderBlock(block: any, index: number) {
    switch (block.type) {
        case "heading":
            return (
                <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                    {block.content?.map((c: any, i: number) => renderText(c, i))}
                </h2>
            );

        case "paragraph":
            return (
                <p key={index} className="mb-4 leading-relaxed">
                    {block.content?.map((c: any, i: number) => renderText(c, i))}
                </p>
            );

        case "bulletListItem":
            return (
                <ul key={index} className="list-disc ml-6 mb-2">
                    <li>{block.content?.map((c: any, i: number) => renderText(c, i))}</li>
                </ul>
            );

        case "numberedListItem":
            return (
                <ol key={index} className="list-decimal ml-6 mb-2">
                    <li>{block.content?.map((c: any, i: number) => renderText(c, i))}</li>
                </ol>
            );

        case "checkListItem":
            return (
                <div key={index} className="flex items-center gap-2 mb-2">
                    <input type="checkbox" checked={block.props?.checked} readOnly />
                    <span>{block.content?.map((c: any, i: number) => renderText(c, i))}</span>
                </div>
            );

        case "quote":
            return (
                <blockquote
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 italic my-4 text-[rgb(var(--foreground))]/80"
                >
                    {block.content?.map((c: any, i: number) => renderText(c, i))}
                </blockquote>
            );

        case "codeBlock":
            return (
                <pre
                    key={index}
                    className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto my-4"
                >
                    <code>
                        {block.content?.map((c: any, i: number) => renderText(c, i))}
                    </code>
                </pre>
            );

        case "hr":
            return <hr key={index} className="my-6 border-t border-[rgb(var(--border))]" />;

        default:
            return null;
    }
}

// Helper: Render text with styles
function renderText(content: any, key: number) {
    let classes = "";
    if (content.styles?.bold) classes += " font-bold";
    if (content.styles?.italic) classes += " italic";
    if (content.styles?.underline) classes += " underline";
    if (content.styles?.strike) classes += " line-through";
    if (content.styles?.textColor === "purple") classes += " text-purple-600";

    return (
        <span key={key} className={classes}>
            {content.text}
        </span>
    );
}

function BlogPage({ params }: { params: Promise<{ blogId: string }> }) {
    const { blogId } = use(params);
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from("posts")
                .select("*")
                .eq("id", Number(blogId))
                .single();

            if (error) {
                console.error("Error fetching post:", error);
            } else {
                setPost(data as Post);
            }
        };

        fetchPost();
    }, [blogId]);

    if (!post) {
        return <p className="text-center mt-10">Loading blog...</p>;
    }

    let blocks: any[] = [];
    try {
        blocks = JSON.parse(post.content);
    } catch {
        blocks = [];
    }

    const date = new Date(post.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
            {/* Back link */}
            <Link
                href="/blogs"
                className="text-sm text-blue-600 hover:underline mb-6 inline-block"
            >
                ← See all posts
            </Link>

            {/* Date */}
            <p className="text-sm text-[rgb(var(--foreground))]/60">
                Published on {date}
            </p>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-6">
                {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 mb-8">
                {post.avatar_url && (
                    <Image
                        src={post.avatar_url ? post.avatar_url : `/avatar.png`}
                        alt={post.author ?post?.author:'Cover'}
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                )}
                <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-[rgb(var(--foreground))]/60">
                        {post.author_email}
                    </p>
                </div>
            </div>

            {/* Cover image */}
            {post.cover_url && (
                <div className="relative w-full h-64 sm:h-96 mb-8 rounded-lg overflow-hidden border border-[rgb(var(--border))]">
                    <Image
                        src={post.cover_url}
                        alt={post.title}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            )}

            {/* Blog content */}
            <article className="prose dark:prose-invert max-w-none">
                {blocks.map((block, i) => renderBlock(block, i))}
            </article>
        </div>
    );
}

export default BlogPage;