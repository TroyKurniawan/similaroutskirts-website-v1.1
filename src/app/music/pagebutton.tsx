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
    let index0: number = (pageNumber - 1) * itemsPerPage;
    let index1: number = index0 + itemsPerPage;
    setPageRange([index0, index1]);
    setPageCurrent(pageNumber);
  }

  //   Dynamically set button's ID and highlight it if it is the current page
  let pageButtonID: string = "page-button-" + pageNumber;
  if (pageCurrent == pageNumber)
    document.getElementById(pageButtonID)?.classList.add("bg-slate-800");
  else document.getElementById(pageButtonID)?.classList.remove("bg-slate-800");

  // ==========================================

  return (
    <div
      id={pageButtonID}
      className="size-8 border-2 border-slate-800 text-center place-content-center text-gray-500 cursor-pointer
                hover:bg-slate-800"
      onClick={pagesFilter}
    >
      {pageNumber}
    </div>
  );
}

export default PageButton;
