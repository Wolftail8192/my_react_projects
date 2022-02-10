import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import Movie from "../Movie/Movie";


const Movies:FC = () => {
    const [movies,setMovies] = useState<IMovie[]>([]);

    useEffect(()=>{
        const getAllMovies = async () => {
            const {data} = await movieService.getAll();
            setMovies(data);


        }
        getAllMovies();
    },[])
    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
    );
};

export default Movies;