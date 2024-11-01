import Link from "next/link";

const Admin = () => {
  return (
    <div className="flex flex-col gap-5">
      <Link href="admin/add-category">افزودن دسته بندی</Link>
      <Link href="admin/add-blog">افزودن مقاله</Link>
    </div>
  );
};

export default Admin;
