import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import Slider from "./Slider";

function Main() {
  const [popMovies, setPopMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axios({
          method: "get",
          url: "https://api.themoviedb.org/3/movie/popular",
          params: {
            api_key: "e3ef60114f3455d412ea55db83f798b2",
            page: page,
          },
        });

        setPopMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

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
              {popMovies?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
      </Wrapper>
    </main>
  );
}

export default Main;
