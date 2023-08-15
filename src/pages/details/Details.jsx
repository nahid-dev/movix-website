import React from "react";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import { useParams } from "react-router-dom";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";

const Details = () => {
  const { mediaType, id } = useParams();
  // console.log(mediaType, id);
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  console.log(data);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner
        video={data?.results?.[0]}
        crew={credits?.crew}
      ></DetailsBanner>
      <Cast data={credits?.cast} loading={creditsLoading}></Cast>
      <VideosSection data={data} loading={loading}></VideosSection>
    </div>
  );
};

export default Details;
