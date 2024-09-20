export default async function sitemap() {
  const staticRoutes = ["", "/about-us", "/contact-us", "/request"];
  //   const postRoutes = await fetch(`https://reservetablo.ir/api/blogs`);
  //   const data = await postRoutes.json();

  const routes = staticRoutes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: "2023-12-26",
  }));

  return [...routes];
}
