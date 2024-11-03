import { useState, useEffect } from "react";

export const useGetCharDetails = (character) => {
  const [charDetails, setCharDetails] = useState([]);

  useEffect(() => {
    const newCharDetails = [];
    if (character?.films?.length !== 0) {
      newCharDetails.push("films");
    }
    if (character?.shortFilms?.length !== 0) {
      newCharDetails.push("shortFilms");
    }
    if (character?.videoGames?.length !== 0) {
      newCharDetails.push("videoGames");
    }
    if (character?.tvShows?.length !== 0) {
      newCharDetails.push("tvShows");
    }
    setCharDetails(newCharDetails);
    return () => {
      setCharDetails([]);
    };
  }, [character]);
  return { charDetails };
};
