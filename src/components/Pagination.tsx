import { Dispatch, SetStateAction } from "react";
import { usePagination } from "../hooks/usePagination";
import { Idriver } from "../interfaces/interfaces";

interface IPagination {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  drivers: Idriver[];
}

const Pagination = ({ setCurrentPage, currentPage, drivers }: IPagination) => {
  const { lastPage, nextPage } = usePagination({
    currentPage,
    drivers,
    setCurrentPage,
  });

  return (
    <div className="cs__pagination">
      <div onClick={lastPage} className="cs__pagination-btn cs__btnPrevious">
        Previous
      </div>
      <div onClick={nextPage} className="cs__pagination-btn cs__btnNext">
        Next
      </div>
    </div>
  );
};

export default Pagination;
