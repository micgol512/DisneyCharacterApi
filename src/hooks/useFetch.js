import { useEffect, useState } from "react";

const BASE_URL = `https://api.disneyapi.dev/character`;

export const useFetch = (page = "1", id) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const resp = await fetch(`${BASE_URL}/${id ? id : ":id"}?page=${page}`);
        if (!resp.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await resp.json();
        setCharacters(json.data);
        setInfo(json.info);
      } catch (err) {
        setErrors(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
    return () => {
      setLoading(false);
    };
  }, [page, id]);

  return { info, characters, loading, errors };
};
