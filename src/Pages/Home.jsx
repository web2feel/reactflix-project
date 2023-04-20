import React,{useState} from "react";
import { useFetch } from "../Hooks/useFetch";
import Slider from "../Components/Slider";
import Wrapper from "../Components/Wrapper";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import MovieCard from "../Components/MovieCard";
import Pagination from "../Components/Pagination";

const Home = () => {

    const [page, setPage] = useState(1);
    const [data, loading, error] = useFetch("movie/popular",{ page });
    const { results, total_pages } = data;
  
  return (
    <>
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
    </>
  );
};

export default Home;
