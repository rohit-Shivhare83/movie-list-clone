import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import "./MovieList.css";

const MovieList = () => {
  const [movielist2, setmovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  });

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=fca3dd00420b0a6c8e13b7c6e93bcc97&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setmovieList(data.results));
  };

  return (
    <div className="movielist_compo">
      <div className="movielist_title">
        <h2>{(type ? type : "Popular").toUpperCase()}</h2>
      </div>
      <div className="movielist_cards">
        {movielist2.map((movielist) => (
          <Card key={movielist.id} movielist={movielist} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
