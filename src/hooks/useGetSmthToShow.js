import { useState, useEffect } from "react";

export const useGetSmthToShow = (character) => {
  const [smthToShow, setSmthToShow] = useState([]);

  useEffect(() => {
    const newSmthToShow = [];
    if (character?.films?.length !== 0) {
      newSmthToShow.push("films");
    }
    if (character?.shortFilms?.length !== 0) {
      newSmthToShow.push("shortFilms");
    }
    if (character?.videoGames?.length !== 0) {
      newSmthToShow.push("videoGames");
    }
    if (character?.tvShows?.length !== 0) {
      newSmthToShow.push("tvShows");
    }
    setSmthToShow(newSmthToShow);
    return () => {
      setSmthToShow([]);
    };
  }, [character]);
  return { smthToShow };
};
