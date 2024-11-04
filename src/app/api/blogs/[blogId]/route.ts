import Blog from "@models/Blog";
import { Context } from "@myTypes/types";
import { errorResponse, successResponse } from "@utils/backFuncs";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, context: Context) {
  try {
    const id = context.params.blogId;
    const blog = await Blog.findOne({ published: true, href: id })
      .populate("category", "-updatedAt -createdAt -description -_id")
      .populate(
        "userId",
        "-role -phone -password -state -city -isActive -createdAt -updatedAt"
      );
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
