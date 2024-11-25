import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const API_URL = 'http://localhost:8080/'

export async function useFoodData(item, type) {
  let response
  switch (type) {
    case 'letter':
      response = await axios.get(`${API_URL}cocktail/f/l/${item}`);
      break;
    case 'ingredient':
      response = await axios.get(`${API_URL}cocktail/f/i/${item}`);
      break;
    case 'alcoholic':
      response = await axios.get(`${API_URL}cocktail/f/a/${item}`);
      break;
    case 'category':
      response = await axios.get(`${API_URL}cocktail/f/c/${item}`);
      break;
  }
  console.log(item)
  console.log(type)
  console.log(response?.data)
  
  return response?.data;
}