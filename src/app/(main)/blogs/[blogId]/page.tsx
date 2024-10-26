interface BlogDetailsProps {
  params: {
    blogId: string;
  };
}

const BlogDetails = ({ params }: BlogDetailsProps) => {
  return <div>{params.blogId}</div>;
};

export default BlogDetails;
