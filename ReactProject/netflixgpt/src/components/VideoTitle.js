const VideoTitle = ({ title, overview }) => {
  return (
    <div className="movie-description-container">
      <div>
        <h2 className="movie-title">{title}</h2>
        <p className="movie-overview">{overview}</p>
      </div>
      <div>
        <button className="movie-title-play-btn" type="submit">
          Play ▶️
        </button>
        <button className="movie-title-info-btn" type="submit">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
