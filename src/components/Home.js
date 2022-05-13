import { useEffect, useState } from 'react';
import MovieList from './MovieList';

export default function Home() {
    const [movies, setTrending] = useState([]);


    async function getTrending() {
        let url = "https://movie-js-02-prep.herokuapp.com/trending";
        let response = await fetch(url);
        console.log("response", response)
        let trendingsData = await response.json();
        setTrending(trendingsData); 
        console.log("the trendings", trendingsData);
    }


    useEffect(() => {
        getTrending();
    }, [])


    return (
        <>
            
            {
                (movies.length > 0) && <MovieList movies={movies} />
            }


        </>
    )
}