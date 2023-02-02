import React, { useEffect, useState } from "react";
import "./Card.css";
import Skeleton, { SkeletonTheme }from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Card = ({ movielist }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });

  return (
    <div className="card-compo">
      {isLoading ? (
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={200} duration={2}></Skeleton>
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`movie/${movielist.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <div className="cards_compo_img">
              <img
                className="cards_img"
                src={`https://image.tmdb.org/t/p/original${
                  movielist ? movielist.poster_path : ""
                }`}
                alt="poster"
              />
            </div>

            <div className="card_text_overlay">
              <div className="cards_title">
                {movielist ? movielist.title : ""}
              </div>
              <div className="cards_runtime">
                <span>{movielist ? movielist.vote_average : ""}</span>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="card_desc">
                {movielist ? movielist.overview.slice(0, 90) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};
export default Card;

