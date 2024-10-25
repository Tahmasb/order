"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { headerItems, headerItemsDrawer } from "@utils/staticData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Drawer from "@elements/Drawer";

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

  const handleCloseDrawer = () => setDrawerOpen(false);
  const handleOpenDrawer = () => setDrawerOpen(true);
  return (
    <header className=" z-20 shadow-lg bg-white sticky top-0 w-full border-b py-2.5 flex items-center justify-between px-4">
      {logo}
      <div className="md:flex hidden gap-7 ">
        {headerItems.map((link) => {
          const isCurrentItem = "/" + pathName.split("/")[1] === link.href;
          return (
            <Link
              href={link.href}
              key={link.href}
              className={`${
                isCurrentItem && "text-primary"
              }  font-medium hover:text-secondary-hover transition-all`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <Link href={"/add-order"} className="hidden md:flex custom-link">
        سفارش تابلو
      </Link>
      <RxHamburgerMenu
        onClick={handleOpenDrawer}
        className="text-2xl md:hidden cursor-pointer "
      />
      <Drawer open={drawerOpen} onClose={handleCloseDrawer}>
        <div className="w-72 py-3 px-5 h-full flex flex-col gap-4">
          {logo}
          <div className="flex flex-col child:border-b child:py-3 ">
            {headerItemsDrawer.map((link) => {
              const isCurrentItem = "/" + pathName.split("/")[1] === link.href;
              return (
                <Link
                  onClick={handleCloseDrawer}
                  href={link.href}
                  key={link.href}
                  className={`${
                    isCurrentItem && "text-primary"
                  } flex items-center gap-2.5 hover:text-secondary hover:mr-2 transition-all duration-200`}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
