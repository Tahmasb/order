"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { headerItems, headerItemsDrawer } from "@utils/staticData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Drawer from "@elements/Drawer";
import { useSession } from "next-auth/react";
import { RxDashboard } from "react-icons/rx";
import { IoIosLogIn } from "react-icons/io";

const logo = (
  <Link href={"/"}>
    <Image
      src={"/images/logo.svg"}
      alt="سفارش تابلو"
      width={100}
      className="h-12 w-24"
      priority
      height={0}
    />
  </Link>
);
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathName = usePathname();
  const { data } = useSession();

  const handleCloseDrawer = () => setDrawerOpen(false);
  const handleOpenDrawer = () => setDrawerOpen(true);

  return (
    <header className=" z-20 shadow-lg bg-white sticky top-0 w-full border-b py-2.5 flex items-center justify-between px-4">
      {logo}
      <div className="md:flex hidden gap-7 child-hover:text-secondary-hover child:transition-all child:font-medium ">
        {headerItems.map((link) => {
          const isCurrentItem = "/" + pathName.split("/")[1] === link.href;
          return (
            <Link
              href={link.href}
              key={link.href}
              className={`${isCurrentItem && "text-primary"} `}
            >
              {link.label}
            </Link>
          );
        })}

        {data ? (
          <Link href="/dashboard">داشبورد</Link>
        ) : (
          <Link href="/login">ورود</Link>
        )}
      </div>
      <Link href={"/add-order"} className="hidden md:flex custom-link">
        سفارش تابلو
      </Link>
      <RxHamburgerMenu
        onClick={handleOpenDrawer}
        className="text-2xl md:hidden cursor-pointer "
      />
      <Drawer open={drawerOpen} onClose={handleCloseDrawer}>
        <div
          onClick={handleCloseDrawer}
          className="w-72 py-3 px-5 h-full flex flex-col gap-4"
        >
          {logo}
          <div className="flex flex-col child-hover:text-secondary-hover child:border-b child:py-3 child:flex child:items-center child:gap-2.5 child-hover:mr-2 child:transition-all child:duration-200">
            {headerItemsDrawer.map((link) => {
              const isCurrentItem = "/" + pathName.split("/")[1] === link.href;
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`${isCurrentItem && "text-primary"}`}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
            {data ? (
              <Link href="/dashboard">
                <span>
                  <RxDashboard />
                </span>
                <span>داشبورد</span>
              </Link>
            ) : (
              <Link href="/login">
                <span>
                  <IoIosLogIn />
                </span>
                <span>ورود</span>
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
