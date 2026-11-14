import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGif } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.thumb,
              src: item.urls.full,
              url: item.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.map((item) => ({
              id: item.id,
              type: "video",
              title: item.name,
              thumbnail: item.videos.medium.thumbnail,
              src: item.videos.medium.url,
              url: item.videos.medium.url,
            }));
          }
          if (activeTab == "gif") {
            let response = await fetchGif(query);
            data = response.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title,
              thumbnail: item.images.preview_webp.url,
              src: item.embed_url,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading....</h1>;

  return (
    <div className="flex flex-wrap gap-4 w-full overflow-auto px-10 py-5">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
