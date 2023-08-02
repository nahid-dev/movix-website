import React from "react";

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore Now.{" "}
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV shows..."
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
