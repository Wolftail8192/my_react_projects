import React, {FC} from 'react';
import {IMovie} from "../../interfaces";

interface IProps {
    movie:IMovie
}

const MovieInfo:FC <IProps> = ({movie:IMovie}) => {
    return (
        <div>
            <div>{IMovie}</div>
        </div>
    );
};

export default {MovieInfo};