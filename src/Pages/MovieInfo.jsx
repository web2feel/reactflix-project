import React from "react";
import { useParams } from "react-router";
const MovieInfo = () => {
   let params =  useParams()
   console.log(params)
  return (
    <div>
      <h1> This is the MovieInfo page</h1>
    </div>
  );
};

export default MovieInfo;
