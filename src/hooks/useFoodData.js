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
    case 'category':
      //www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
      response = await axios.get(`${API_URL}cocktail/f/a/${item}`);
      break;
    case 'alcoholic':
      //www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic 
      response = await axios.get(`${API_URL}cocktail/f/a/${item}`);
      break;
  }
  console.log(item)
  console.log(type)
  console.log(response?.data)
  
  return response?.data;
}