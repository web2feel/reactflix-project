import React, { useState } from "react";
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Slider from "./Slider";
import { useFetch } from "../Hooks/useFetch";

function Main() {
  const [page, setPage] = useState(1);
  const [data, loading, error] = useFetch("movie/popular",{ page });
  const { results, total_pages } = data;

  return (
    <main>
      <Slider />

      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!error && !loading && (
          <>
            <h2 className="sectionTitle">Popular Movies</h2>
            <div className="gallery">
              {results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={total_pages}
            />
          </>
        )}
      </Wrapper>
    </main>
  );
}
export default Main;
