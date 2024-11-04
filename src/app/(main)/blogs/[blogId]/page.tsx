import { Context } from "@myTypes/types";
import BlogDetailsPage from "@pages/BlogDetailsPage";
import Link from "next/link";
const BlogDetails = async ({ params }: Context) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.blogId}`
  );
  const blog = await response.json();
  if (!blog?.data)
    return (
      <div className="flex flex-col items-center mt-9 gap-8">
        <span className="text-error">وبلاگی با این آیدی یافت نشد</span>
        <Link
          href="/blogs"
          className="border px-3 py-1.5 rounded text-secondary"
        >
          رفتن به صفحه وبلاگ‌ها
        </Link>
      </div>
    );

  return (
    <div>
      <BlogDetailsPage blog={blog.data} />
    </div>
  );
};

export default BlogDetails;
