'use client'
import { use } from "react";
import EditorWrapper from "@/components/blog/EditorWrapper";
import { supabase } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
interface Props {
    params: Promise<{ postId: string }>;
}

export default function CreateBlogPage({ params }: Props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const { postId } = use(params);
    const router = useRouter();
    const { user } = useKindeBrowserClient();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let coverUrl: string | null = null;
            // console.log(user);
            if (file) {
                const fileName = `cover-${Date.now()}-${file.name}`
                const { data, error } = await supabase.storage.from('covers').upload(fileName, file);
                if (error) throw new Error(error.message);
                const { data: urlData } = await supabase.storage.from('covers').getPublicUrl(fileName);
                coverUrl = urlData.publicUrl;
                // console.log("Public URL Generated !")
            }
            if (!coverUrl) throw new Error("Cover image is required");
            if (user && user.given_name) {
                const { error } = await supabase.from('posts').insert([
                    {
                        title: title,
                        content: JSON.stringify(content),
                        cover_url: coverUrl,
                        user_id: postId,
                        author: user?.given_name,
                        author_email:user?.email,
                        avatar_url:user?.picture
                    }
                ]);
                if (error) throw new Error(error.message);
                alert("Blog saved successfully!");
                setTitle("");
                setContent("");
                setFile(null);
                router.push('/dashboard/userDashboard');
            }

        } catch (error) {
            console.error("Error saving blog:", error);
            alert("Failed to save the blog. Please try again.");
        };
    }

    return (
        <form onSubmit={handleSubmit} className="px-[10px] md:px-[11%] py-[20px] md:py-[30px]">
            <div className="flex justify-center items-center mb-5">
                <input
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    required
                    placeholder="Write Title Here..."
                    className="text-2xl md:text-5xl font-bold text-center outline-none focus:ring-2 focus:ring-slate-400"
                />
            </div>
            <div className="mb-6 border-[1px] border-slate-300 rounded-md md:p-2">
                <EditorWrapper onChange={(value) => setContent(value)} />
            </div>
            <div className="flex justify-center items-center gap-2">
                <label
                    htmlFor="coverImage"
                    className="px-4 py-2 bg-slate-200 rounded-md hover:bg-slate-300 cursor-pointer dark:text-black text-sm dark:bg-slate-300 font-semibold"
                >
                    Upload Cover Image
                </label>
                <input type="file" id="coverImage" className="hidden" required name="fileupload"
                    accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                {file && <span className="text-sm">{file.name}</span>}
                <button
                    type="submit"
                    className="cursor-pointer text-[14px] p-[8px] px-[30px] font-semibold 
            bg-[rgb(var(--submit))] 
            text-white
            rounded-sm"
                >
                    Save
                </button>
            </div>
        </form>
    );
}