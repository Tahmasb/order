import VerifyPage from "@pages/VerifyPage";
import { Suspense } from "react";

export default function VerifyWrapper() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <VerifyPage />
    </Suspense>
  );
}
