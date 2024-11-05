import { Context } from "@myTypes/types";
import AddBlogPage from "@pages/AddBlogPage";
import { getData } from "@utils/axios";

const EditBlog: React.FC<Context> = async ({ params }) => {
  const { blogId } = params;
  const blog = await getData(`/blogs/${blogId}`);

  return <AddBlogPage blog={blog.data} />;
};

export default EditBlog;
