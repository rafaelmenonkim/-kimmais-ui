import React, { useEffect, useState } from "react";
import {
  Arrow,
  PagesContainer,
  PagesList,
  PageIndex,
  Selector,
} from "./styles";

const Pages = ({ maxVisiblePageSelectors, paginator, setPage, ...props }) => {
  const [internalPaginator, setInternalPaginator] = useState(paginator);

  useEffect(
    () => paginator.page && setInternalPaginator(paginator),
    [paginator]
  );

  maxVisiblePageSelectors = maxVisiblePageSelectors || 7;

  const isArrowVisible = maxVisiblePageSelectors < internalPaginator.totalPages;
  const pageIndexSequence =
    Math.ceil(internalPaginator.page / maxVisiblePageSelectors) - 1;

  const firstPageIndex = pageIndexSequence * maxVisiblePageSelectors + 1;

  const selectorPosition =
    internalPaginator.page - pageIndexSequence * maxVisiblePageSelectors;

  function generatePagesIndex() {
    return Array.from({ length: maxVisiblePageSelectors })
      .map((_, index) => index + firstPageIndex)
      .map((pageIndex) =>
        internalPaginator.totalPages >= pageIndex ? (
          <PageIndex
            key={pageIndex}
            onClick={() => {
              setPage(pageIndex);
            }}
          >
            {pageIndex}
          </PageIndex>
        ) : null
      );
  }

  function previousGroup() {
    let wantedPage = internalPaginator.page - 1;
    wantedPage = Math.max(wantedPage, 1);
    setPage(wantedPage);
  }

  function nextGroup() {
    let wantedPage = internalPaginator.page + 1;
    wantedPage =
      wantedPage > internalPaginator.totalPages
        ? internalPaginator.totalPages
        : wantedPage;
    setPage(wantedPage);
  }

  return (
    <PagesList {...props}>
      {isArrowVisible && (
        <Arrow
          name="arrow-down"
          onClick={previousGroup}
          disabled={internalPaginator.page === 1}
        />
      )}
      <PagesContainer>
        {generatePagesIndex()}
        <Selector
          currentPage={internalPaginator.page}
          position={selectorPosition}
        />
      </PagesContainer>
      {isArrowVisible && (
        <Arrow
          name="arrow-down"
          direction="left"
          onClick={nextGroup}
          disabled={internalPaginator.page === internalPaginator.totalPages}
        />
      )}
    </PagesList>
  );
};

export default Pages;
