import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IMovie} from "../interfaces";

export const movieService = {
    getAll:()=>axiosService.get<IMovie[]>(urls.movie)
}