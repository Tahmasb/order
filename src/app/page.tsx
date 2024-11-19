import BlogSummary from "@modules/BlogSummary";
import HomeAbout from "@modules/HomeAbout";
import HomeMain from "@modules/HomeMain";
import { getData } from "@utils/axios";

export default async function Home() {
  const data = await getData("/blogs ");
  return (
    <div className="flex flex-col">
      <HomeMain />
      <HomeAbout />
      <BlogSummary blogs={data.data.blogs.slice(0, 3)} />
    </div>
  );
}
