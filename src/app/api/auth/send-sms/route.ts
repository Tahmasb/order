import OTP from "@models/Otp";
import User from "@models/User";
import { connectDB, errorResponse, successResponse } from "@utils/backFuncs";
import sendSMS from "@utils/sendSms";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let { phone, code } = await req.json();
    await connectDB();
    const isCorrectCode = await OTP.findOne({ phone, code });
    if (isCorrectCode) {
      const updatedUser = await User.findOneAndUpdate(
        { phone },
        { isActive: true }
      );
      return successResponse(
        201,
        "تایید شد. کارشنانان ما در اسرع وقت برای مشاوره با شما تماس میگیرند"
      );
    } else {
      return errorResponse(400, "کد اشتباه است");
    }
  } catch (err) {
    console.log(err);
    return errorResponse(500, "مشکلی در ارسال پیامک رخ داده است");
  }
}
