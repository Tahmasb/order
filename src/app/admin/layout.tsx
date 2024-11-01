import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return <div>{children}</div>;
};

export default AdminLayout;
