import { connectDB, successResponse } from "@utils/backFuncs";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  const { url, title, category, main, image, imageAlt, metaDescription } =
    await req.json();
  return successResponse();
}
