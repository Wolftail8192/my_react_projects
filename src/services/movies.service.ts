import {axiosService} from "./axios.service";

import {urls} from "../constants";

import {IMovie} from "../interfaces";



export const moviesService={
    getAll:()=> axiosService.get<IMovie>(urls.movie)
}