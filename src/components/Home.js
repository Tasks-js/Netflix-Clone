import { useEffect, useState } from 'react';
import MovieList from './MovieList';

export default function Home() {
    const [trendings, setTrending] = useState([]);


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
                (trendings.length > 0) && <MovieList trendings={trendings} />
            }


        </>
    )
}