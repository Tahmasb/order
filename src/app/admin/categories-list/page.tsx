import Pagination from "@elements/Pagination";
import { getData } from "@utils/axios";
import Link from "next/link";
import { Context } from "@myTypes/types";

const CategoriesList: React.FC<{
  params: Context;
  searchParams: { page?: string; limit?: string };
}> = async ({ params, searchParams }) => {
  const { page, limit } = searchParams;
  const response = await getData(`/category?page=${page}`);

  const { categories } = response.data;

  const { totalPages } = response.data.pagination;

  return (
    <div className="my-8 flex items-center gap-6 flex-col max-w-[600px] mx-auto px-1">
      <h1 className="text-center font-bold">لیست دسته بندی‌ها</h1>
      <div className=" border w-full px-2 flex flex-col divide-y-2 child:h-10 rounded child:flex child:items-center">
        {categories.map(
          (item: { _id: string; href: string; label: string }) => {
            return (
              <Link href={`/admin/blogs-list/${item.href}`} key={item._id}>
                {item.label}
              </Link>
            );
          }
        )}
      </div>
      <Pagination count={+totalPages} page={page ? +page : 1} />
    </div>
  );
};

export default CategoriesList;
