import { TiHomeOutline } from "react-icons/ti";
import { IoNewspaper } from "react-icons/io5";
import { GrInfo } from "react-icons/gr";
import { IoIosLogIn } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const headerItems = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/blogs", label: "وبلاگ" },
  { href: "/about-us", label: "درباره ما" },
  { href: "/contact-us", label: "تماس با ما" },
  { href: "/login", label: "ورود" },
];
const headerItemsDrawer = [
  { href: "/", label: "صفحه اصلی", icon: <TiHomeOutline /> },
  { href: "/blogs", label: "وبلاگ", icon: <IoNewspaper /> },
  { href: "/about-us", label: "درباره ما", icon: <GrInfo /> },
  { href: "/login", label: "ورود", icon: <IoIosLogIn /> },
  { href: "/add-order", label: "سفارش تابلو", icon: <FaCartShopping /> },
  { href: "/contact-us", label: "تماس با ما", icon: <MdSupportAgent /> },
];

export { headerItems, headerItemsDrawer };
