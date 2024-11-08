"use client";
import SignOut from "@elements/Signout";
import { dashboardSidebarItems } from "@utils/staticData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardHeaderItems = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="border border-t-0 md:flex hidden  col-span-2 p-2 h-[80vh] pt-8 flex-col child:whitespace-nowrap child:text-sm">
        {dashboardSidebarItems.map((link) => {
          const isCurrentItem = pathName == link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isCurrentItem && "text-secondary-active"
              } hover:text-primary  h-10 w-min hover:pr-1.5 transition-all duration-200`}
            >
              {link.label}
            </Link>
          );
        })}
        <SignOut className="text-error" />
      </div>
      <div className="col-span-12 flex-wrap my-3 md:hidden  flex gap-1 child:rounded child:h-9 child:p-1.5 child:border child:flex child:items-center  child:whitespace-nowrap child:text-sm">
        {dashboardSidebarItems.map((link) => {
          const isCurrentItem = pathName == link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isCurrentItem && "text-secondary-active"
              } hover:text-primary  h-10 w-min hover:pr-1.5 transition-all duration-200`}
            >
              {link.label}
            </Link>
          );
        })}
        <SignOut className="text-error" />
      </div>
    </>
  );
};

export default DashboardHeaderItems;
