"use client";
import { cn } from "@utils/style";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface PaginationProps {
  page: number;
  count: number;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  count,
  className = "",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updatePageNumber(queryString: string, newPageNumber: number) {
    const pageRegex = /page=(\d+)/;
    if (pageRegex.test(queryString)) {
      const updatedQueryString = queryString.replace(
        pageRegex,
        `page=${newPageNumber}`
      );
      return updatedQueryString;
    } else {
      const separator = queryString.length > 0 ? "&" : "";
      const updatedQueryString = `${queryString}${separator}page=${newPageNumber}`;
      return updatedQueryString;
    }
  }

  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: number
  ) => {
    router.push(`?${updatePageNumber(searchParams.toString(), value)}`);
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (count <= 8) {
      // نمایش تمام صفحات به صورت معکوس
      for (let i = count; i >= 1; i--) {
        pages.push(
          <button
            key={i}
            onClick={(e) => handleChange(e, i)}
            className={`w-6 h-6 rounded ${
              page === i ? "bg-secondary text-white" : ""
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // نمایش صفحات با محدودیت و به صورت معکوس
      pages.push(
        <button
          key={count}
          onClick={(e) => handleChange(e, count)}
          className={`w-6 h-6 rounded ${
            page === count ? "bg-secondary text-white" : ""
          }`}
        >
          {count}
        </button>
      );

      if (page < count - 3) {
        pages.push(<span key="end-dots">...</span>);
      }

      const start = Math.min(count - 1, page + 2);
      const end = Math.max(2, page - 2);

      for (let i = start; i >= end; i--) {
        pages.push(
          <button
            key={i}
            onClick={(e) => handleChange(e, i)}
            className={`w-6 h-6 rounded ${
              page === i ? "bg-secondary text-white" : ""
            }`}
          >
            {i}
          </button>
        );
      }

      if (page > 4) {
        pages.push(<span key="start-dots">...</span>);
      }

      pages.push(
        <button
          key={1}
          onClick={(e) => handleChange(e, 1)}
          className={`w-6 h-6 rounded ${
            page === 1 ? "bg-secondary text-white" : ""
          }`}
        >
          1
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={cn("flex items-center", className)}>
      <button
        onClick={(e) => handleChange(e, page + 1)}
        disabled={page === count}
        className="rotate-180 px-3 py-1 mx-1 disabled:opacity-50"
      >
        {/* <IoIosArrowForward /> */}
        <IoIosArrowBack />
      </button>
      {renderPageNumbers()}
      <button
        onClick={(e) => handleChange(e, page - 1)}
        disabled={page === 1}
        className="px-3 py-1 mx-1 disabled:opacity-50"
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
};

export default Pagination;
