import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces";
import {moviesService} from "../../services/movies.service";
import MovieInfo from "../movieInfo/MovieInfo";

const MoviesList:FC = () => {
    const [movie, setMovie]= useState<IMovie[]>([]);
    useEffect(()=>{
        const getAllMovie = async () => {
          const {data} = await moviesService.getAll();
          setMovie([data])
        }
        getAllMovie()
    },[])
    return (
        <div>
            {movie.map(movie=><MoviesList key={movie.name} />)}
        </div>
    );
};

export default {MoviesList};