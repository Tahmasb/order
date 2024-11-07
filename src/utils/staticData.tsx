import { MdDesignServices } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { IoNewspaper } from "react-icons/io5";
import { GrInfo } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

const adminSidebarItems = [
  { href: "/admin/categories-list", label: "دسته بندی‌ها" },
  { href: "/admin/blogs-list", label: "وبلاگ‌ها" },
  { href: "/admin/add-blog", label: "افرودن وبلاگ" },
  { href: "/admin/add-category", label: "افزودن دسته‌بندی" },
  { href: "/dashboard", label: "داشبورد" },
];

const headerItems = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/blogs", label: "وبلاگ" },
  { href: "/about-us", label: "درباره ما" },
  { href: "/contact-us", label: "تماس با ما" },
  { href: "/design", label: "طراحی آنلاین" },
];
const headerItemsDrawer = [
  { href: "/", label: "صفحه اصلی", icon: <TiHomeOutline /> },
  { href: "/blogs", label: "وبلاگ", icon: <IoNewspaper /> },
  { href: "/about-us", label: "درباره ما", icon: <GrInfo /> },
  { href: "/design", label: "طراحی آنلاین", icon: <MdDesignServices /> },
  { href: "/add-order", label: "سفارش تابلو", icon: <FaCartShopping /> },
  { href: "/contact-us", label: "تماس با ما", icon: <MdSupportAgent /> },
];

const ordersType = [
  { id: 1, label: "حروف چنلیوم" },
  { id: 2, label: "پلاستیک" },
  { id: 3, label: "لبه سوئدی" },
  { id: 4, label: "لبه سوئدی مکس" },
  { id: 5, label: "تابلو روان" },
  { id: 6, label: "بیلبورد" },
];
const costAmountOptions = [
  { id: 2_000_000, label: "زیر ۲ میلیون تومان" },
  { id: 5_000_000, label: "2 تا 5 میلیون تومان" },
  { id: 10_000_000, label: "۵ تا ۱۰ میلیون تومان" },
  { id: 15_000_000, label: "۱۰ تا ۱۵ میلیون تومان" },
  { id: 20_000_000, label: "۱۵ تا ۲۰ میلیون تومان" },
  { id: 30_000_000, label: "۲۰ تا ۳۰ میلیون تومان" },
  { id: 40_000_000, label: "۳۰ تا ۴۰ میلیون تومان" },
  { id: 50_000_000, label: "بالای ۴۰ میلیون تومان" },
];

export {
  headerItems,
  headerItemsDrawer,
  ordersType,
  costAmountOptions,
  adminSidebarItems,
};
