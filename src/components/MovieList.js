import React from 'react'
import Movie from "./Movie"



export default function MovieList(props) {
    return (
        
        <>
            {
             props.movies.map((moviee) => {
                    return (
                        <>
                        <div>
                            <Movie moviee={moviee} updateComment={props.updateComment} />
                        </div>
                        </>
                    )
                }

                )
            }
        </>
    )
}