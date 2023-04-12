import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import axios from "axios";

const Slider = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  console.log(latestMovies);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: {
          api_key: "e3ef60114f3455d412ea55db83f798b2",
        },
      });
      setLatestMovies(data.results);
    };
    fetchData();
  }, []);

  let splideOptions = {
    heightRatio: 0.5,
    pagination: false,
    speed: 500,
    cover: true,
    padding: "15vw",
    breakpoints: {
      640: {
        heightRatio: 0.54,
        arrows: false,
        pagination: true,
        padding: "0",
      },
    },
  };

  return (
    <div className="movieSlider">
      <Splide options={splideOptions}>
        {latestMovies?.map((item) => {
          return (
            <SplideSlide>
              <img
                src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}
                alt={item.title}
              />
              <div class="slideCaption">
                <h2>{item.title}</h2>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Slider;
