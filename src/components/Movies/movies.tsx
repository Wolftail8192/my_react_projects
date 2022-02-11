import {getMovies} from '../../services/api.service'
import {useEffect} from "react";

export function Movies(){

    useEffect(()=>{
        getMovies().then(value => console.log(value.data))
    },[])
    return(
        <div>
            Movies
        </div>
    )
}