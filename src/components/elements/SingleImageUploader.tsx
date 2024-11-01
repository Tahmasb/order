"use client";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useFormContext } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";
import { setMessage } from "@redux/slices/message";
import { cn } from "@utils/style";

interface SingleImageUploaderProps {
  label?: string;
  name: string;
  className?: string;
}

const SingleImageUploader: React.FC<SingleImageUploaderProps> = ({
  label,
  name,
  className = "",
}) => {
  const dispatch = useDispatch();
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const imageUrl = watch(name);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const { data } = await axios.post("/api/upload-image", formData);
        setValue(name, data.data.image_url); // ذخیره لینک عکس جدید
        dispatch(setMessage({ message: data.message }));
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.log(error.response);
          dispatch(
            setMessage({
              message: error.response?.data?.data || "An error occurred",
              severity: "error",
            })
          );
        } else {
          console.error("Unexpected error:", error);
          dispatch(
            setMessage({
              message: "An unexpected error occurred",
              severity: "error",
            })
          );
        }
      } finally {
        // پاک کردن مقدار input بعد از آپلود
        if (e.target) {
          e.target.value = "";
        }
      }
    }
  };

  const handleDelete = () => {
    setValue(name, null); // حذف تصویر
  };

  return (
    <div className={cn("flex gap-2", className)}>
      {imageUrl ? (
        <div className="relative">
          <AiOutlineDelete
            onClick={handleDelete}
            title="حذف تصویر"
            className="absolute cursor-pointer inset-0 m-auto text-xl"
          />
          <Image
            className="w-16 h-16 rounded-lg"
            title="عکس انتخاب شده"
            width={60}
            height={60}
            src={imageUrl}
            alt="Uploaded image"
          />
        </div>
      ) : (
        <div
          title={label}
          className="flex border border-dashed border-gray-500 bg-white cursor-pointer relative rounded-lg w-16 h-16 items-center justify-center"
        >
          <p className="absolute text-gray-400">
            <FaPlus />
          </p>
          <input
            type="file"
            title={label}
            className="opacity-0 cursor-pointer w-full h-full"
            onChange={handleImageChange}
          />
        </div>
      )}
    </div>
  );
};

export default SingleImageUploader;
