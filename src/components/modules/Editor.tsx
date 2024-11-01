import { useMemo } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import JoditEditor from "jodit-react";

interface RichTextEditorProps extends UseControllerProps {
  name: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ name, control }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });

  const config = useMemo(
    () => ({
      placeholder: "محتوای پست را تایپ کنید (ضروری)",
      height: "500px",
      language: "fa",
      disablePlugins: ["video", "file", "about", "aiAssistant"],
      hidePoweredByJodit: true,
    }),
    []
  );

  return (
    <div className="w-full">
      <JoditEditor
        value={value || ""}
        onBlur={(newContent) => onChange(newContent)}
        config={config}
      />
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default RichTextEditor;
