import SignOut from "@elements/Signout";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const dashboardSidebarItems = [
  { href: "/dashboard/add-order", label: "افزودن سفارش" },
  { href: "/admin", label: "پنل ادمین" },
];

const DashboardLayout: React.FC<React.PropsWithChildren> = async ({
  children,
}) => {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return (
    <div className="grid grid-cols-12 gap-1.5">
      <div className="border border-t-0 md:flex hidden  col-span-2 p-2 h-[80vh] pt-8 flex-col child:whitespace-nowrap child:text-sm">
        {dashboardSidebarItems.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary  h-10 w-min hover:pr-1.5 transition-all duration-200"
            >
              {link.label}
            </Link>
          );
        })}
        <SignOut className="text-error" />
      </div>
      <div className="col-span-12 flex-wrap my-3 md:hidden  flex gap-1 child:rounded child:h-9 child:p-1.5 child:border child:flex child:items-center  child:whitespace-nowrap child:text-sm">
        {dashboardSidebarItems.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary  h-10 w-min hover:pr-1.5 transition-all duration-200"
            >
              {link.label}
            </Link>
          );
        })}
        <SignOut className="text-error" />
      </div>
      <div className="w-full col-span-12 md:col-span-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
