"use client";
import { HoverBorder } from "@/components/ui/hoverBorder";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Quill } from 'quill';
const RichTextEditor = () => {
  const [editorValue, setEditorValue] = useState("");
  return (
    <div>
      <HoverBorder>
        <ReactQuill
          value={editorValue}
          className="min-h-20 dark:bg-background/70 border-black"
          onChange={(value) => setEditorValue(value)}
          modules={{
            toolbar: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              ["image", "code-block", "link"],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
            ],
          }}
          theme="snow"
        />
      </HoverBorder>
    </div>
  );
};

export default RichTextEditor;
