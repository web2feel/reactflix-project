import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";
function Pagination({ page, totalPages }) {
  const { dispatch } = useContext(AppContext);
  const handleNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  const handlePrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
  return (
    <div className="pagination">
      <button disabled={page <= 1} onClick={handlePrevPage}>
        Prev
      </button>
      <p>
        Page {page} of {totalPages}
      </p>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
}
export default Pagination;