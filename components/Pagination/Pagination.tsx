import React, { useCallback, useEffect, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalItems: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

interface PaginationComponentProps {
  PaginationData: PaginationProps;
}

export default function PaginationComponent({
  PaginationData,
  
}: PaginationComponentProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setPage(PaginationData.currentPage);
  }, [PaginationData]);

  const [Page, setPage] = useState<number>(PaginationData.currentPage);

  const handlePreviousPage = () => {
    if(Page===1){
      return;
    }
    setPage(Page - 1);

    router.push(`${pathname}?${createQueryString("page", (Page - 1).toString())}`);
  };

  const handleNextPage = () => {
    if(Page===PaginationData.totalPages){
      return;
    }
    setPage(Page + 1);

    router.push(`${pathname}?${createQueryString("page", (Page + 1).toString())}`);
  };
  const handlePageClick = (clickedPage: number) => {
    if (clickedPage === Page) {
      // Clicking on the current page, no action needed
      return;
    }

    setPage(clickedPage);
    updatePageInURL(clickedPage);
  };

  const updatePageInURL = (newPage: number) => {
    router.push(`${pathname}?${createQueryString("page", newPage.toString())}`);
  };
  return (
    <Pagination>
    <PaginationContent>
      <PaginationItem>
        <button
          className={`hover:bg-inherit hover:text-TextColor3 text-TextColor3 disabled:opacity-50 text-sm`}
          onClick={handlePreviousPage}
          disabled={!PaginationData.hasPrevPage}
        >
          Previous
        </button>
      </PaginationItem>
      {PaginationData.currentPage > 1 && (
        <PaginationItem>
          <button
            className={`bg-DarkLight hover:bg-DarkLight text-white hover:text-white px-4 py-[8px] rounded-lg`}
            onClick={() => handlePageClick(PaginationData.currentPage - 1)}
          >
            {PaginationData.currentPage - 1}
          </button>
        </PaginationItem>
      )}
      <PaginationItem>
        <button
          className={`bg-textColor2 hover:bg-textColor2 text-white hover:text-white px-4 py-[8px] rounded-lg`}
          onClick={() => handlePageClick(PaginationData.currentPage)}
        >
          {PaginationData.currentPage}
        </button>
      </PaginationItem>
      {PaginationData.currentPage < PaginationData.totalPages && (
        <PaginationItem>
          <button
            className="bg-DarkLight hover:bg-DarkLight text-white hover:text-white px-4 py-[8px] rounded-lg"
            onClick={() => handlePageClick(PaginationData.currentPage + 1)}
          >
            {PaginationData.currentPage + 1}
          </button>
        </PaginationItem>
      )}
      {PaginationData.currentPage === 1 && PaginationData.totalPages > 2 && (
        <PaginationItem>
          <button
            className="bg-DarkLight hover:bg-DarkLight text-white hover:text-white px-4 py-[8px] rounded-lg"
            onClick={() => handlePageClick(PaginationData.currentPage + 2)}
          >
            {PaginationData.currentPage + 2}
          </button>
        </PaginationItem>
      )}
      {PaginationData.currentPage === 1 && PaginationData.totalPages === 2 && (
        <PaginationItem>
          <button
            className="bg-DarkLight hover:bg-DarkLight text-white hover:text-white px-4 py-[8px] rounded-lg"
            onClick={() => handlePageClick(PaginationData.currentPage + 1)}
          >
            {PaginationData.currentPage + 1}
          </button>
        </PaginationItem>
      )}
      <PaginationItem>
        <button
          className={`hover:bg-inherit hover:text-TextColor3 text-TextColor3 disabled:opacity-50 text-sm `}
          onClick={handleNextPage}
          disabled={!PaginationData.hasNextPage}
        >
          Next
        </button>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  
  
  
  );
}
