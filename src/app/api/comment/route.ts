import Blog from "@models/Blog";
import Comment from "@models/Comment";
import {
  connectDB,
  errorResponse,
  successResponse,
  yupValidateData,
} from "@utils/backFuncs";
import { addCommentValidationSchema } from "@utils/validations";
import { Schema } from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return errorResponse(401, "برای ارسال کامنت اول وارد شوید");
    }

    await connectDB();
    const { body, blogId, replyId } = await req.json();
    const validateBody = await yupValidateData(addCommentValidationSchema, {
      body,
    });
    if (validateBody !== true) {
      return errorResponse(400, "اطلاعات نامعتبر", validateBody);
    }
    const isExistBlog = await Blog.findOne({ href: blogId });
    if (isExistBlog) return errorResponse(400, "وبلاگی با این آیدی یافت نشد");
    if (!replyId) {
      const newComment = await Comment.create({
        userId: session.user?.email,
        body,
        blogId: new Schema.Types.ObjectId(blogId),
      });
      return successResponse(200, "کامنت با موفقیت ایجاد شد");
    } else {
      // reply
      const comment = await Comment.findOne({ _id: replyId });
      comment.replays.push({ userId: session.user?.email, body });
      comment.save();
      return successResponse(200, "کامنت با موفقیت ایجاد شد");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return errorResponse(500, error.message);
    } else {
      return errorResponse(500, "خطای ناشناخته‌ای رخ داده است");
    }
  }
}
