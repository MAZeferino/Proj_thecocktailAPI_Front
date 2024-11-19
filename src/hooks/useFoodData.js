import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const API_URL = 'http://localhost:8080/'

const fetchData = async () => {
    const response = await axios.get(`http://localhost:8080/cocktail/f/l/a`);
    return response;
}

export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return { data: query.data?.data }
}