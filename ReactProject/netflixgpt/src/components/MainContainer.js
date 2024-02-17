import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies == null) return; //early return

  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;
  return (
    <div>
      Main Container
      <VideoTitle title={title} overview={overview} />
      <VideoBg _id={id} />
    </div>
  );
};

export default MainContainer;
