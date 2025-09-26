"use client";

import dynamic from "next/dynamic";
interface EditorWrapperProps {
  onChange?: (value: any) => void; // 👈 allow onChange
}

// Lazily load editor client-only
const Editor = dynamic(() => import("./Editor"), {
  ssr: false,
});

export default function EditorWrapper({onChange}: EditorWrapperProps) {
  return <Editor onChange={onChange} />;
}