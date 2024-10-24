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

const ordersType = [
  { id: 1, label: "حروف چنلیوم" },
  { id: 2, label: "پلاستیک" },
  { id: 3, label: "لبه سوئدی" },
  { id: 4, label: "لبه سوئدی مکس" },
  { id: 5, label: "تابلو روان" },
  { id: 6, label: "بیلبورد" },
];
const costAmountOptions = [
  { id: 1, label: "زیر ۲ میلیون تومان" },
  { id: 2, label: "2 تا 5 میلیون تومان" },
  { id: 3, label: "۵ تا ۱۰ میلیون تومان" },
  { id: 4, label: "۱۰ تا ۱۵ میلیون تومان" },
  { id: 5, label: "۱۵ تا ۲۰ میلیون تومان" },
  { id: 6, label: "۲۰ تا ۳۰ میلیون تومان" },
  { id: 7, label: "۳۰ تا ۴۰ میلیون تومان" },
  { id: 8, label: "بالای ۴۰ میلیون تومان" },
];

export { headerItems, headerItemsDrawer, ordersType, costAmountOptions };
