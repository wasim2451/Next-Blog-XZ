'use client'
import { use } from "react";
import EditorWrapper from "@/components/blog/EditorWrapper";
import { supabase } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";  
interface Props {
   params: Promise<{ postId: string }>;
}

export default function CreateBlogPage({ params }: Props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const { postId } = use(params);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            let coverUrl: string | null = null;
            if (file) {
                const fileName = `cover-${Date.now()}-${file.name}`
                const { data, error } = await supabase.storage.from('covers').upload(fileName, file);
                if (error) throw new Error(error.message);
                const { data: urlData } = await supabase.storage.from('covers').getPublicUrl(fileName);
                coverUrl = urlData.publicUrl;
            }

            if (!coverUrl) throw new Error("Cover image is required");
            const { error } = await supabase.from('posts').insert([
                {
                    title: title,
                    content: JSON.stringify(content),
                    cover_url: coverUrl,
                    user_id: postId
                }
            ]);
            if (error) throw new Error(error.message);
            alert("Blog saved successfully!");
            setTitle("");
            setContent("");
            setFile(null);
            router.push('/dashboard/userDashboard');
        } catch (error) {
            console.error("Error saving blog:", error);
            alert("Failed to save the blog. Please try again.");
        };
    }

        return (
            <form onSubmit={handleSubmit} className="px-[10px] md:px-[11%] py-[20px] md:py-[30px]">
                <div className="flex justify-center items-center mb-5">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Write Title Here..."
                        className="text-2xl md:text-5xl font-bold text-center outline-none focus:ring-2 focus:ring-slate-400"
                    />
                </div>
                <div className="mb-6 border-[2px] border-slate-400 rounded-md md:p-2">
                    <EditorWrapper onChange={(value) => setContent(value)} />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <label
                        htmlFor="coverImage"
                        className="px-4 py-2 bg-slate-200 rounded-md hover:bg-slate-300 cursor-pointer"
                    >
                        Upload Cover Image
                    </label>
                    <input type="file" id="coverImage" className="hidden"
                        accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                    {file && <span className="text-sm">{file.name}</span>}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700"
                    >
                        Save
                    </button>
                </div>
            </form>
        );
}