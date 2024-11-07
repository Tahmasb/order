import { BlogDataProps } from "@myTypes/types";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPage: React.FC<{ blog: BlogDataProps }> = ({ blog }) => {
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
    <div className="flex flex-col font-dana items-center my-7 max-w-[1100px] mx-auto gap-6 px-4">
      <h1 className="font-semibold text-xl">{title}</h1>
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="rounded max-w-full w-[800px]"
      />
      <Link href={`${href}`} className="ml-auto ">
        <span className="text-gray-600">دسته بندی: </span>
        <span className="">{blog.category.label}</span>
      </Link>
      <article className="my-5 w-full">
        <div dangerouslySetInnerHTML={{ __html: main }} />
      </article>
    </div>
  );
};

export default BlogDetailsPage;
