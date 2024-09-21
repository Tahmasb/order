import { successResponse } from "@utils/backFuncs";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return successResponse(200, "لیست آیتم‌ها", {
    name: "danyal",
    family: "akbari",
  });
}
