import DashboardHeaderItems from "@modules/DashboardHeaderItems";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DashboardLayout: React.FC<React.PropsWithChildren> = async ({
  children,
}) => {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return (
    <div className="grid grid-cols-12 gap-1.5">
      <DashboardHeaderItems />
      <div className="w-full col-span-12 md:col-span-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
