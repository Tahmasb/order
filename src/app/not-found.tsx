import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col mt-20 items-center font- justify-center gap-2">
      <p>صفحه‌ای که دنبال آن بودید پیدا نشد</p>
      <Link className="text-primary" href={"/"}>
        برو صفحه اصلی
      </Link>
      <Image
        src={"/images/not-found.svg"}
        width={400}
        height={400}
        priority
        alt="radin"
      />
    </div>
  );
};

export default NotFound;
