import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideos = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    const filteredData = json?.results.filter(
      (video) => video.name === "Final Trailer"
    );
    const trailer = filteredData.length ? filteredData : json?.results[0];
    //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideos && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
