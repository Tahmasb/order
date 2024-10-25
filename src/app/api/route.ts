import { successResponse } from "@utils/backFuncs";

export async function GET() {
  return successResponse(200, "لیست آیتم‌ها", {
    name: "danyal",
    family: "akbari",
  });
}
