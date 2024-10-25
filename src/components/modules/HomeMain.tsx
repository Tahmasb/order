import Image from "next/image";
import Link from "next/link";

const HomeMain = () => {
  return (
    <div className="flex my-8 w-full md:child:w-1/2 items-center px-5 gap-1 md:flex-row flex-col">
      <Image
        src={"/images/homeMain.svg"}
        width={300}
        height={0}
        className="w-full h-[420px]"
        alt="سفارش تابلو"
        priority
      />
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">سفارش تابلو با تابلو باما</h1>

        <p className="max-w-[550px] text-justify">
          ما در شرکت <span className="">&quot;تابلو باما&quot;</span> شما را به
          بهترین شرکت‌های طراحی و نصب تابلو در تمام کشور معرفی میکنیم تا بدون
          هیچ سختی بهترین تابلو‌ها رو برای افزایش مشتریان خود طراحی و نصب کنید.
          فقط کافیست مشخصات تابلویی که میخاهید رو توی قسمت سفارش تابلو وارد کنید
          تا کارشناسان ما در اسرع وقت با شما تماس بگیرند. میتوانید برای مشاهده
          انواع تابلو (چنلیوم , پلاستیک ، لبه سوئدی ، لاسوگاسی، نئون, ...){" "}
          <Link href={"/"}>به این صفحه مراجعه کنید.</Link>{" "}
          <span className="text-primary">
            یادت باشه تبلیغات هزینه نیست سرمایه گذاری هست.
          </span>
        </p>
        <div className="flex gap-4 mt-4 justify-center md:justify-start">
          <Link href={"/add-order"} className="custom-link flex">
            سفارش تابلو
          </Link>
          <Link
            href={"/blogs"}
            className="bg-white border hover:bg-primary hover:text-white border-primary py-1 px-[10px] rounded-lg w-36 flex h-10 items-center justify-center transition-all "
          >
            وبلاگ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
