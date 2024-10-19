import { useEffect, useState } from "react";

const BASE_URL = `https://api.disneyapi.dev/character`;
//page=2&pageSize=100
export const useFetch = (page = "1", pageSize = "50", id) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const resp = await fetch(
          `${BASE_URL}/${id ? id : ":id"}?page=${page}&pageSize=${pageSize}`
        );
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
  }, [page, pageSize, id]);
  //   console.log(`URL: ${BASE_URL}/${id ? id : ":id"}?page=${page}&pageSize=${pageSize}`);
  return { info, characters, loading, errors };
};
