import { NextRequest } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { errorResponse, successResponse } from "@utils/backFuncs";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const file = formData.get("file") as File | null;

  if (!file) {
    return errorResponse(400, "لطفا عکس را انتخاب کنید");
  }

  if (file.size < 1) {
    return errorResponse(400, "لطفا عکس را انتخاب کنید");
  }

  const imageExtensions = /\.(png|jpg|webp)$/;
  if (!imageExtensions.test(file.name)) {
    return errorResponse(
      400,
      "عکس فقط باید از این موارد باشد (png, jpg, webp)"
    );
  }

  if (file.size > 300000) {
    return errorResponse(400, "سایز عکس حداکثر باید 300 کیلوبایت باشد");
  }

  const fileArrayBuffer = await file.arrayBuffer();
  const fileUint8Array = new Uint8Array(fileArrayBuffer); // تبدیل ArrayBuffer به Uint8Array
  const fileName = `${Date.now()}-${file.name}`;

  const client = new S3Client({
    region: "default",
    endpoint: process.env.LIARA_ENDPOINT as string,
    credentials: {
      accessKeyId: process.env.LIARA_ACCESS_KEY as string,
      secretAccessKey: process.env.LIARA_SECRET_KEY as string,
    },
  });

  const params = {
    Body: fileUint8Array,
    Bucket: process.env.LIARA_BUCKET_NAME as string,
    Key: fileName,
  };

  try {
    await client.send(new PutObjectCommand(params));
    const goalImageUrl = `${process.env.GOAL_HOST_URL}/${fileName}`;
    return successResponse(200, "تصویر آپلود شد", { image_url: goalImageUrl });
  } catch (error) {
    console.error(error);
    return errorResponse(500, "خطا در فرایند آپلود تصویر");
  }
}
