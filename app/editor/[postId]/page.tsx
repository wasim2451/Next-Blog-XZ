"use client";
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
  const [loading, setLoading] = useState(false); // ✅ loading state
  const { postId } = use(params);
  const router = useRouter();
  const { user } = useKindeBrowserClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // start loader
    try {
      let coverUrl: string | null = null;

      // File upload
      if (file) {
        const fileName = `cover-${Date.now()}-${file.name}`;
        const { data, error } = await supabase.storage
          .from("covers")
          .upload(fileName, file);
        if (error) throw new Error(error.message);

        const { data: urlData } = supabase.storage
          .from("covers")
          .getPublicUrl(fileName);
        coverUrl = urlData.publicUrl;
      }

      if (!coverUrl) throw new Error("Cover image is required");

      if (user && user.given_name) {
        const { error } = await supabase.from("posts").insert([
          {
            title: title,
            content: JSON.stringify(content),
            cover_url: coverUrl,
            user_id: postId,
            author: user?.given_name,
            author_email: user?.email,
            avatar_url: user?.picture,
          },
        ]);
        if (error) throw new Error(error.message);

        alert("Blog saved successfully!");
        setTitle("");
        setContent("");
        setFile(null);
        router.push("/dashboard/userDashboard");
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save the blog. Please try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <>
      {loading && (
        // ✅ Overlay Loader
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="flex flex-col items-center gap-2 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
            <p className="font-medium text-sm text-gray-700 dark:text-gray-200">
              Saving your blog...
            </p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="px-[10px] md:px-[11%] py-[20px] md:py-[30px] min-h-screen"
      >
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

        {/* Blog Editor */}
        <div className="mb-6 border-[1px] border-slate-300 rounded-md md:p-2">
          <EditorWrapper onChange={(value) => setContent(value)} />
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-2">
          <label
            htmlFor="coverImage"
            className="px-4 py-2 bg-slate-200 rounded-md hover:bg-slate-300 cursor-pointer dark:text-black text-sm dark:bg-slate-300 font-semibold"
          >
            Upload Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            className="hidden"
            required
            name="fileupload"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          {file && <span className="text-sm">{file.name}</span>}
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer text-[14px] p-[8px] px-[30px] font-semibold 
              bg-[rgb(var(--submit))] text-white rounded-sm disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </>
  );
}