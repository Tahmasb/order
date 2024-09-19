"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "@elements/Button";
import { headerItems } from "@utils/staticData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Drawer from "@elements/Drawer";

const logo = (
  <Image
    src={"/images/logo.svg"}
    alt="سفارش تابلو"
    width={100}
    className="h-12 w-24"
    priority
    height={0}
  />
);
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathName = usePathname();

  const handleCloseDrawer = () => setDrawerOpen(false);
  const handleOpenDrawer = () => setDrawerOpen(true);
  return (
    <header className=" py-4 flex items-center justify-between px-4">
      {logo}
      <div className="md:flex hidden gap-7 ">
        {headerItems.map((link, index) => {
          const isCurrentItem = "/" + pathName.split("/")[1] === link.href;
          return (
            <Link
              href={link.href}
              key={link.href}
              className={`${
                isCurrentItem && "text-primary"
              }  font-medium text-lg`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <Button className="hidden md:flex">سفارش تابلو</Button>
      <RxHamburgerMenu
        onClick={handleOpenDrawer}
        className="text-2xl md:hidden cursor-pointer "
      />
      <Drawer open={drawerOpen} onClose={handleCloseDrawer}>
        <div className="w-48 p-3 h-full  flex flex-col gap-4">
          {logo}
          <div className="flex flex-col gap-4 ">
            {headerItems.map((link, index) => {
              return (
                <Link
                  onClick={handleCloseDrawer}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
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
