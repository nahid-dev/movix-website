import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((g) => (
        <div className="genre" key={g}>
          <span>{genres[g]?.name}</span>
          abc
        </div>
      ))}
    </div>
  );
};

export default Genres;
