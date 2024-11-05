import * as yup from "yup";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { hash, compare } from "bcryptjs";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI || "");
  console.log("Connected to DB");
}

async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

const successResponse = (
  statusCode = 200,
  message = "عملیات موفق",
  data?: object | undefined | string
) => {
  return NextResponse.json({ data, message, status: statusCode });
};

const errorResponse = (
  statusCode = 500,
  message = "مشکلی در سرور رخ داده است",
  data?: object | undefined | string
) => {
  return NextResponse.json({ message, data, status: statusCode });
};

type ValidationError = {
  id: string;
  label: string;
};

async function yupValidateData<T extends yup.AnyObject>(
  schema: yup.ObjectSchema<T>,
  data: T
): Promise<true | ValidationError[]> {
  try {
    await schema.validate(data, { abortEarly: false });
    return true;
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      const errors: ValidationError[] = err.inner.map((error) => ({
        id: error.path || "",
        label: error.message,
      }));
      return errors;
    }
    throw err;
  }
}

export {
  hashPassword,
  yupValidateData,
  verifyPassword,
  connectDB,
  errorResponse,
  successResponse,
};
