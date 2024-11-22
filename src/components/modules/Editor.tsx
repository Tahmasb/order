import { useController, UseControllerProps } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

interface RichTextEditorProps extends UseControllerProps {
  name: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ name, control }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="w-full">
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
        value={value || ""}
        onEditorChange={(newContent) => onChange(newContent)}
        init={{
          placeholder: "محتوای پست را تایپ کنید (ضروری)",
          language: "fa",
          directionality: "rtl",
          height: 500,
          menubar: true,
          block_formats:
            "Header 3=h3; Header 4=h4; Header 5=h5; Header 6=h6; Paragraph=p",
          plugins: "lists link image preview media code advlist",
          toolbar:
            "media code undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist | link image preview | removeformat",
        }}
      />
      {error && <span className="text-sm text-error">{error.message}</span>}
    </div>
  );
};

export default RichTextEditor;
