import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AuthLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession();
  if (session) redirect("/dashboard");
  return <>{children}</>;
};

export default AuthLayout;
