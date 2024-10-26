import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardLayout: React.FC<React.PropsWithChildren> = async ({
  children,
}) => {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return <>{children}</>;
};

export default DashboardLayout;
