import React from "react";
import { API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (_id) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${_id}/videos?language=en-US`,
      API_options
    );
    const data = await res.json();
    const filterTrailer = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useTrailerVideo;
