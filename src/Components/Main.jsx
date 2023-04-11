import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
// import { popularMovies } from "../Utils/data";

function Main() {
  const [popMovies, setPopMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  console.log(page)

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: {
        api_key: "e3ef60114f3455d412ea55db83f798b2",
        page:page
      },
    }).then(({ data }) => {
      setPopMovies(data.results);
      setTotalPages(data.total_pages)
    });
  }, [page]);

  return (
    <main>
      <div className="movieSlider">
        <p style={{ textAlign: "center" }}>Movie slider</p>
      </div>
      <Wrapper>
        <h2 className="sectionTitle">Popular Movies</h2>
        <div className="gallery">
          {popMovies?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
        <Pagination page={page} setPage={setPage}  totalPages={totalPages}/>
      </Wrapper>
    </main>
  );
}

export default Main;
