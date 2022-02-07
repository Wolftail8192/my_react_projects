import {axiosService} from "./axios.service";

import {urls} from "../constants";

import {IGenre} from "../interfaces";



export const moviesService={
    getAll:()=> axiosService.get<IGenre>(urls.movie)
}