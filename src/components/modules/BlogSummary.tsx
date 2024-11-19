import { convertTimestampToShamsi } from "@utils/date";
import Image from "next/image";
import Link from "next/link";

interface Blogs {
  _id: string;
  title: string;
  href: string;
  category: { _id: string; label: string };
  image: string;
  createdAt: string;
}

const BlogSummary: React.FC<{ blogs: Blogs[] }> = ({ blogs }) => {
  return (
    <div className="mt-10 flex flex-col gap-8 items-center">
      <h1 className="font-bold text-xl">آخرین مقالات تابلو باما</h1>
      <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          return (
            <Link
              href={`/blogs/${blog.href}`}
              key={blog.href}
              className="border flex flex-col gap-3 hover:shadow-lg w-80 transition-all hover:scale-105 duration-300"
            >
              <Image
                alt="سفارش تابلو چنلیوم"
                src={blog.image}
                width={300}
                height={0}
                className="w-80 h-48 object-cover"
              />
              <div className="flex flex-col p-2.5  gap-2">
                <p className="font-semibold">{blog.title}</p>
                <div className="flex justify-between font-light">
                  <small>دسته بندی {blog.category.label}</small>
                  <small>{convertTimestampToShamsi(blog.createdAt)}</small>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSummary;
