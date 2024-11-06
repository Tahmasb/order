import Category from "@models/Category";
import {
  connectDB,
  errorResponse,
  successResponse,
  yupValidateData,
} from "@utils/backFuncs";
import { addCategorySchema } from "@utils/validations";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return errorResponse(401, "روت محافظت شده است. ابتدا وارد شوید");
    }
    if (session.user?.image !== "ADMIN") {
      return errorResponse(401, "شما به این روت دسترسی ندارید");
    }

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
  const selectItems = req.nextUrl.searchParams.get("name");
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);
  const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10", 10);
  const skip = (page - 1) * limit;

  await connectDB();

  const totalCategories = await Category.countDocuments();

  const categories = await Category.find()
    .select(`${selectItems} href label`)
    .sort({ createdAt: "desc" })
    .skip(skip)
    .limit(limit)
    .lean();

  const totalPages = Math.ceil(totalCategories / limit);

  return successResponse(200, "لیست دسته بندی‌ها", {
    categories,
    pagination: {
      page,
      limit,
      totalPages,
      totalCategories,
    },
  });
}
