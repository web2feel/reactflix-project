import React, { useContext } from "react";
import { AppContext } from "../Context/appContext";
import Wrapper from "../Components/Wrapper";
import MovieCard from "../Components/MovieCard";

const Favorites = () => {
  const { state } = useContext(AppContext);
  return (
    <Wrapper>
      <h2 className="sectionTitle">Favorite Movies</h2>
      <div className="gallery">
        {state?.favorites.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Favorites;
