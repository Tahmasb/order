import Blog from "@models/Blog";
import { Context } from "@myTypes/types";
import {
  connectDB,
  errorResponse,
  successResponse,
  yupValidateData,
} from "@utils/backFuncs";
import { addBlogSchemaFront } from "@utils/validations";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, context: Context) {
  try {
    await connectDB();
    const id = context.params.blogId;
    const blog = await Blog.findOne({ published: true, href: id })
      .populate("category", "-updatedAt -createdAt -description -_id")
      .populate(
        "userId",
        "-role -phone -password -state -city -isActive -createdAt -updatedAt"
      )
      .select("-updatedAt");
    if (!blog) return errorResponse(404, "وبلاگی با این آیدی یافت نشد");
    return successResponse(200, undefined, blog);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return errorResponse(500, error.message);
    } else {
      return errorResponse(500, "خطای ناشناخته‌ای رخ داده است");
    }
  }
}

export async function PATCH(req: NextRequest, context: Context) {
  try {
    const id = context.params.blogId;
    console.log("test => ", id);
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
    const isExistHref = await Blog.find({ href }).countDocuments();

    if (isExistHref > 1)
      return errorResponse(400, "این آیدی از قبل ثبت شده است");
    if (!isExistHref) return errorResponse(404, "وبلاگی با این آیدی یافت نشد");

    await Blog.findByIdAndUpdate(id, {
      image,
      title,
      category: category.id,
      href,
      metaDescription,
      main,
    });

    return successResponse(201, "وبلاگ با موفقیت ویرایش شد");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return errorResponse(500, error.message);
    } else {
      return errorResponse(500, "خطای ناشناخته‌ای رخ داده است");
    }
  }
}
