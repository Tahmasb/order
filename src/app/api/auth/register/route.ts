import { NextRequest } from "next/server";
import User from "src/models/User";
import {
  connectDB,
  errorResponse,
  hashPassword,
  successResponse,
  validateData,
} from "@utils/backFuncs";
import { registerSchema } from "@utils/validations";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { firstName, lastName, phone, password, state, city } =
      await req.json();
    const validateBodyData = await validateData(registerSchema, {
      firstName,
      lastName,
      phone,
      password,
      state,
      city,
    });
    if (validateBodyData !== true)
      return errorResponse(400, "اطلاعات نامعتر است", validateBodyData);
    const existingUserPhone = await User.findOne({ phone }).lean();

    if (existingUserPhone) {
      return errorResponse(
        422,
        "این شماره همراه از قبل ثبت شده است لطفا شماره دیگری وارد کنید"
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      firstName,
      lastName,
      state,
      city,
      password: hashedPassword,
      phone: phone,
    });

    return successResponse(201, "حساب کاربری ایجاد شد");
  } catch (err) {
    console.log(err);
    return errorResponse(500, "مشکلی در سرور رخ داده است");
  }
}
