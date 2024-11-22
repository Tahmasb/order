import OTP from "@models/Otp";
import User from "@models/User";
import { connectDB, errorResponse, successResponse } from "@utils/backFuncs";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const incomingLink =
      req.nextUrl.searchParams.get("incomingLink") || "register";

    let message = "حساب شما با موفقیت ایجاد و فعال شد";

    if (incomingLink === "add-order") {
      message =
        "تایید شد. کارشناسان ما در اسرع وقت برای مشاوره با شما تماس میگیرند";
    }
    const { phone, code } = await req.json();
    await connectDB();
    const isCorrectCode = await OTP.findOne({ phone, code });
    if (isCorrectCode) {
      const updatedUser = await User.findOneAndUpdate(
        { phone },
        { isActive: true }
      );
      return successResponse(201, message);
    } else {
      return errorResponse(400, "کد اشتباه است");
    }
  } catch (err) {
    console.log(err);
    return errorResponse(500, "مشکلی در ارسال پیامک رخ داده است");
  }
}
