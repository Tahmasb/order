import Comments from "@modules/Comments";
import { BlogDataProps } from "@myTypes/types";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPage: React.FC<{ blog: BlogDataProps; comments: [] }> = ({
  blog,
  comments,
}) => {
  const {
    _id,
    category,
    createdAt,
    href,
    image,
    main,
    metaDescription,
    redirect,
    title,
  } = blog;
  return (
    <div className="flex flex-col font-dana items-center my-7 max-w-[1100px] mx-auto gap-6 px-3">
      <h1 className="font-semibold text-xl">{title}</h1>
      <Image
        src={image}
        alt={title}
        width={900}
        priority
        height={600}
        className="rounded max-w-full w-[700px] h-[470px]"
      />
      <div className="flex justify-between w-full">
        <div className="ml-auto ">
          <span className="text-black-2">دسته بندی: </span>
          <span className="">{blog.category.label}</span>
        </div>
        <div className="text-sm flex items-center gap-1">
          <span className="hidden md:flex text-black-2">تاریخ انتشار:</span>
          <span>1403/11/30</span>
        </div>
      </div>
      <article className="my-5 w-full text-justify">
        <div dangerouslySetInnerHTML={{ __html: main }} />
      </article>
      <Comments comments={comments} blogId={href} />
    </div>
  );
};

export default BlogDetailsPage;
