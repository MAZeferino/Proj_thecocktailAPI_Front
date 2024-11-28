
import axios from "axios"

const API_URL = 'http://localhost:8080/cocktail/'

export async function useDrinksData(filters) {
  let response
  const queryParams = Object.entries(filters)
    .filter(([_, value]) => value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  response = await axios.get(queryParams == "" ? `${API_URL}filter/r` : `${API_URL}filterby?${queryParams}`);
  return response?.data;
}