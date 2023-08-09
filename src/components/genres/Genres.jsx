import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        <div className="genre" key={g}>
          <span>{genres[g]?.name}</span>
          abc
        </div>;
        console.log(genres[g]?.name);
      })}
    </div>
  );
};

export default Genres;
