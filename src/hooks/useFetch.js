import { useState } from "react";

const BASE_URL = `https://api.disneyapi.dev/character`;
//page=2&pageSize=100
export const useFetch = (page = "1", pageSize = "50", id) => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  console.log(`URL: ${BASE_URL}/${id ? id : ":id"}?page=${page}&pageSize=${pageSize}`);
  return { data, loading, errors };
};
