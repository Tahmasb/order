import Image from "next/image";

const BlogSummary = () => {
  return (
    <div className="mt-16 flex flex-col gap-8 items-center">
      <h1 className="font-bold text-xl">آخرین مقالات تابلو باما</h1>
      <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((blog) => {
          return (
            <a
              href="/"
              key={blog}
              className="border flex flex-col gap-3 p-2.5 hover:shadow-lg transition-all hover:scale-105 duration-300"
            >
              <Image
                alt="سفارش تابلو چنلیوم"
                src={"/images/homeMain.svg"}
                width={300}
                height={0}
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold">
                  عنوان مقاله که باید اینجا قرار بگیرد
                </p>
                <div className="flex justify-between font-light">
                  <small>دسته بندی فلان</small>
                  <small>1404/03/24</small>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSummary;
