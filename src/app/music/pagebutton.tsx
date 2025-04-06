import React from "react";

type PageButtonProps = {
  setPageRange: React.Dispatch<React.SetStateAction<number[]>>;
  pageNumber: number;
  pageCurrent: number;
  setPageCurrent: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
};

function PageButton({
  setPageRange,
  pageNumber,
  pageCurrent,
  setPageCurrent,
  itemsPerPage,
}: PageButtonProps) {
  // Calculate the page to change to
  function pagesFilter() {
    const index0: number = (pageNumber - 1) * itemsPerPage;
    const index1: number = index0 + itemsPerPage;
    setPageRange([index0, index1]);
    setPageCurrent(pageNumber);
  }

  //   Dynamically set button's ID and highlight it if it is the current page
  const pageButtonID: string = "page-button-" + pageNumber;
  let buttonColor: string = "";
  if (pageCurrent == pageNumber) buttonColor = "bg-slate-800";

  // ==========================================

  return (
    <div
      id={pageButtonID}
      className={`size-8 border-2 border-slate-800 text-center place-content-center text-gray-500 cursor-pointer hover:bg-slate-800 ${buttonColor}`}
      onClick={pagesFilter}
    >
      {pageNumber}
    </div>
  );
}

export default PageButton;
