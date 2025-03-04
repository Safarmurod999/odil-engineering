const Pagination = ({ page, limit, totalPages, handleLimitChange, handlePageChange }) => {

  return (
    <div className="pagination">
      <div className="per-page">
        <span>Har sahifada</span>
        <select
          value={limit}
          onChange={handleLimitChange}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>50</option>
        </select>
      </div>

      <div className="page-controls">
        <span>
          Sahifa {page} dan {totalPages}
        </span>
        <button
          aria-label="previous-page"
          onClick={() => handlePageChange(1)}
          disabled={page === 1}
        >
          &laquo;
        </button>
        <button

          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          &lsaquo;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            aria-label="page-number"
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${page === index + 1 ? "active" : ""}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          aria-label="next-page"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          &rsaquo;
        </button>
        <button
          aria-label="last-page"
          onClick={() => handlePageChange(totalPages)}
          disabled={page === totalPages}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
