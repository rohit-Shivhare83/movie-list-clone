import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movielist/MovieList";
// API KEY = fca3dd00420b0a6c8e13b7c6e93bcc97
// https://api.themoviedb.org/3/movie/550?api_key=fca3dd00420b0a6c8e13b7c6e93bcc97

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const movieUrl =
      "https://api.themoviedb.org/3/movie/popular?api_key=fca3dd00420b0a6c8e13b7c6e93bcc97&language=en-US";
    fetch(movieUrl)
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movielist) => (
            <Link
              key={movielist.id}
              to={`/movie/${movielist.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="moviecard">
                <div className="text_overlay">
                  <div className="movie_title">{movielist.title}</div>
                  <div className="movie_rate">
                    <span>Ratings : {movielist.vote_average}</span>
                    <span className="entity">
                      &nbsp;&#9733;&#9733;&#9733;&#9733;&#9733;
                    </span>
                  </div>
                  <div className="movie_releasedtae">
                    Relasing on : {movielist.release_date}
                  </div>
                  <div className="movie_desc">{movielist.overview}</div>
                </div>
                <div className="img_container">
                  <img
                    className="movie_list_img "
                    src={`https://image.tmdb.org/t/p/original${movielist.backdrop_path}`}
                    alt="l"
                  />
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
      {/* <h1>Home is render</h1> */}
    </div>
  );
};

export default Home;
