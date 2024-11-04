import SignOut from "@elements/Signout";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <span>dashboard</span>
      <br />
      <Link href="dashboard/add-order">صفحه افزودن سفارش</Link>
      <SignOut />
    </div>
  );
};

export default Dashboard;
