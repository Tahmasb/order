import Category from "@models/Category";
import {
  connectDB,
  errorResponse,
  successResponse,
  yupValidateData,
} from "@utils/backFuncs";
import { addCategorySchema } from "@utils/validations";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { label, image, href, description } = await req.json();

    const validateBody = await yupValidateData(addCategorySchema, {
      label,
      href,
      image,
      description,
    });
    if (validateBody !== true) {
      return errorResponse(400, "اطلاعات نامعتبر", validateBody);
    }
    const isExistHref = await Category.findOne({ href });
    if (isExistHref) return errorResponse(400, "این آیدی از قبل ثبت شده است");

    await Category.create({ label, href, image, description });
    return successResponse(201, "دسته بندی با موفقیت اضافه شد");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return errorResponse(500, error.message);
    } else {
      return errorResponse(500, "خطای ناشناخته‌ای رخ داده است");
    }
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  await connectDB();
  let categories;
  if (searchParams.get("justLabel") === "1") {
    categories = await Category.find().select("label").lean();
  } else {
    categories = await Category.find().lean();
  }
  return successResponse(200, "لیست دسته بندی‌ها", categories);
}
