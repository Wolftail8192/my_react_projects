import axios from "axios";

let axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3/discover/movie?api_key=4a7c600cc60d263ab60c8d32ea65cb23'
})

export const getMovies=()=>{return axiosInstance.get('/movie/{movie_id}')}

export default axiosInstance

