import Pagination from "@elements/Pagination";
import BlogSummary from "@modules/BlogSummary";
import { getData } from "@utils/axios";

const Blogs = async () => {
  const data = await getData("/blogs ");
  const { totalPages, page } = data.data.pagination;

  return (
    <div className="flex flex-col gap-10 mb-8 items-center">
      <BlogSummary blogs={data.data.blogs} />
      <Pagination page={page} count={totalPages} />
    </div>
  );
};

export default Blogs;
