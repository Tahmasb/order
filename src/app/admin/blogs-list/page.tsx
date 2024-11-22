"use client";
import Pagination from "@elements/Pagination";
import { myAxios } from "@utils/axios";
import Link from "next/link";
import { Context } from "@myTypes/types";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "@redux/slices/message";

const BlogsList: React.FC<{
  params: Context;
  searchParams: { page?: string; limit?: string };
}> = ({ params, searchParams }) => {
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPage] = useState(1);
  const dispatch = useDispatch();
  const { page, limit } = searchParams;
  const handleDeleteBlog = (href: string) => {
    myAxios
      .delete(`/blogs/${href}`)
      .then((res) => {
        dispatch(setMessage({ message: res.data.message }));
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog: { href: string }) => blog.href !== href)
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    myAxios(`/blogs?page=${page}`)
      .then((res) => {
        setBlogs(res.data.data.blogs);
        setTotalPage(res.data.data.pagination.totalPages);
      })
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="my-8 flex items-center gap-6 flex-col max-w-[600px] mx-auto px-1">
      <h1 className="text-center font-bold ">لیست وبلاگ‌ها</h1>
      <div className=" border w-full px-2 flex flex-col divide-y-2 child:h-10 rounded child:flex child:items-center">
        {blogs.map((item: { _id: string; href: string; title: string }) => {
          return (
            <div key={item._id} className="flex justify-between items-center">
              <Link
                href={`/admin/blogs-list/${item.href}`}
                className="overflow-ellipsis max-w-64 whitespace-nowrap overflow-hidden "
              >
                {item.title}
              </Link>
              <AiOutlineDelete
                className="text-xl cursor-pointer"
                onClick={() => handleDeleteBlog(item.href)}
              />
            </div>
          );
        })}
      </div>
      <Pagination count={totalPages} page={page ? +page : 1} />
    </div>
  );
};

export default BlogsList;
