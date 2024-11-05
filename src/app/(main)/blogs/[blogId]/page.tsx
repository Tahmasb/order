import { Context } from "@myTypes/types";
import BlogDetailsPage from "@pages/BlogDetailsPage";
import { getData } from "@utils/axios";
import Link from "next/link";

const BlogDetails = async ({ params }: Context) => {
  const blog = await getData(`/blogs/${params.blogId}`);
  if (!blog?.data)
    return (
      <div className="flex flex-col items-center mt-9 gap-8">
        <span className="text-error">وبلاگی با این آیدی یافت نشد</span>
        <Link href="/blogs" className="border px-3 py-1.5 rounded ">
          رفتن به صفحه وبلاگ‌ها
        </Link>
      </div>
    );

  return <BlogDetailsPage blog={blog.data} />;
};

export default BlogDetails;
