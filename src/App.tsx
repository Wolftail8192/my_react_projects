import React from 'react';
import {FC} from 'react';
import movieInfo from "./components/movieInfo/MovieInfo";

const App: FC = () => {
    return (
        <div>
            {movieInfo}
        </div>
    );
};

export default App;