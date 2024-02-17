import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBg = ({ _id }) => {
  useTrailerVideo(_id);
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="trailer-video-bg"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
