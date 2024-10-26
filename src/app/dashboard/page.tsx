import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <span>dashboard</span>
      <br />
      <Link href="dashboard/add-order">صفحه افزودن سفارش</Link>
    </div>
  );
};

export default Dashboard;
