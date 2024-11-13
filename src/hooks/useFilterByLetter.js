import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useState } from "react";

const API_URL = 'http://localhost:8080/'

const fetchData = async (letter) => {
  const response = await axios.get(`${API_URL}drink`);
  return response;
}

export function useFilterByLetter() {
  const [getData, setData] = useState([])

  const getDrink = (letter) => {
    const query = useQuery({
      queryFn: () => fetchData(letter),
      queryKey: ['define-filter'],
      retry: 2
    })

    setData((prev) => prev = query)
  }

  return { getDrink, getData }
}