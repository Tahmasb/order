import Blog from "@models/Blog";
import {
  connectDB,
  errorResponse,
  successResponse,
  yupValidateData,
} from "@utils/backFuncs";
import { addBlogSchemaFront } from "@utils/validations";
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
    const { href, title, category, main, image, metaDescription } =
      await req.json();

    const validateBody = await yupValidateData(addBlogSchemaFront, {
      image,
      title,
      category,
      href,
      metaDescription,
      main,
    });

    if (validateBody !== true) {
      return errorResponse(400, "اطلاعات نامعتبر", validateBody);
    }
    const isExistHref = await Blog.findOne({ href });
    if (isExistHref) return errorResponse(400, "این آیدی از قبل ثبت شده است");
    await Blog.create({
      image,
      title,
      category: category.id,
      href,
      metaDescription,
      main,
      userId: session.user.email,
    });
    return successResponse(201, "وبلاگ با موفقیت اضافه شد");
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
  try {
    await connectDB();
    const blogs = await Blog.find({ published: true })
      .select("-updatedAt published")
      .sort({ createdAt: "desc" });
    return successResponse(200, "لیست وبلاگ", blogs);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return errorResponse(500, error.message);
    } else {
      return errorResponse(500, "خطای ناشناخته‌ای رخ داده است");
    }
  }
}