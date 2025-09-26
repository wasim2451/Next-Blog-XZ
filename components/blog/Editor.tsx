'use client'
import React,{useEffect} from "react";
import { useCreateBlockNote } from "@blocknote/react";
// Or, you can use ariakit, shadcn, etc.
import { BlockNoteView } from "@blocknote/mantine";
// Default styles for the mantine editor
import "@blocknote/mantine/style.css";
// Include the included Inter font
import "@blocknote/core/fonts/inter.css";

interface EditorProps {
  onChange?: (value: any) => void;
}
export default function Editor({onChange}:EditorProps) {
  // Create a new editor instance
  const editor = useCreateBlockNote();
  useEffect(() => {
    if(!editor||!onChange) return;
    return editor.onChange(()=>{
        const json=editor.document;
        onChange(json);
    })
  }, [editor,onChange]);
  // Render the editor
  return <BlockNoteView editor={editor} />;
}