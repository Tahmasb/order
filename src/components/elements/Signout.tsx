"use client";

import { cn } from "@utils/style";
import { signOut } from "next-auth/react";
type SignOutProps = {
  className?: string;
};
const SignOut: React.FC<SignOutProps> = ({ className = "" }) => {
  return (
    <span
      className={cn("cursor-pointer", className)}
      onClick={() => {
        signOut();
      }}
    >
      خروج
    </span>
  );
};

export default SignOut;
