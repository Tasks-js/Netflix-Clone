import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import data from './data.json'

export default function Home() {
    const [movies, setTrending] = useState(data);


    async function getTrending() {
        let url = "https://movie-js-02-prep.herokuapp.com/trending";
        let response = await fetch(url);
        console.log("response", response)
        let trendingsData = await response.json();
        setTrending(trendingsData); 
        console.log("the trendings", trendingsData);
    }

   function updateComment (newComment,id){
let updateComment = movies.map(movie=>{
if (movie.id===id) {
    movie.personal_comment = newComment.commentUser
    return movie}
    else{
        return movie
    }
})

setTrending(updateComment)
    }


    useEffect(() => {
        // getTrending();
    }, [])


    return (
        <>
            
            {
                (movies.length > 0) && <MovieList movies={movies} updateComment={updateComment} />
            }


        </>
    )
}