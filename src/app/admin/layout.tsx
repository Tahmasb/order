import AdminHeaderItems from "@modules/AdminHeaderItems";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession();
  const userRole = session?.user?.image;

  if (userRole !== "ADMIN") redirect("/login");
  return (
    <div className="grid grid-cols-12 gap-1.5">
      <AdminHeaderItems />
      <div className="w-full col-span-12 md:col-span-10">{children}</div>
    </div>
  );
};

export default AdminLayout;
