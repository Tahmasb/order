import Request from "@models/Request";
import {
  connectDB,
  errorResponse,
  successResponse,
  yupValidateData,
} from "@utils/backFuncs";
import { addOrderSchema } from "@utils/validations";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  const { fullName, phone, type, costAmount, description } = await req.json();
  const validateBody = await yupValidateData(addOrderSchema, {
    fullName,
    phone,
    type,
    costAmount,
    description,
  });
  if (validateBody !== true) {
    return errorResponse(400, "اطلاعات نامعتبر", validateBody);
  }

  const newRequest = await Request.create({
    fullName,
    phone,
    type,
    costAmount: costAmount.id,
    description,
  });

  return successResponse(200, "درخواست شما با موفقیت ثبت شد");
}
