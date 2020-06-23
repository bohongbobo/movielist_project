import React, { Fragment } from "react";
import "./MovieItem.css";

export default function LikedItem(props) {
  const { movie, clickLikeBtn, clickBlockBtn } = props;
  const url = "https://image.tmdb.org/t/p/w500";

  return (
    <Fragment>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={url + movie.picture} />
        </div>
        <div className="card-content">
          <div onClick={() => clickLikeBtn(movie.id)}>
            <i className="med material-icons">delete_sweep</i>
          </div>
          <div onClick={() => clickBlockBtn(movie.id)}>
            <i className="med material-icons">block</i>
          </div>
          <i className="material-icons"> more_vert </i>
        </div>
      </div>
    </Fragment>
  );
}
