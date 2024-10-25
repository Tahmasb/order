"use client";
import { Excalidraw } from "@excalidraw/excalidraw";

export default function DesignPage() {
  return (
    <div className="h-[85vh]">
      <Excalidraw
        langCode="fa-IR"
        UIOptions={{
          tools: { image: false },
        }}
        initialData={{
          appState: {
            currentItemFontFamily: 2,
            currentItemStrokeWidth: 1,
            currentItemRoughness: 0,
          },
        }}
      />
    </div>
  );
}
