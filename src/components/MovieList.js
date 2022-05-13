import Movie from "./Movie"



export default function MovieList(props) {
    return (
        
        <>
            {
             props.movies.map((moviee) => {
                    return (
                        <>
                            <Movie moviee={moviee} />
                        </>
                    )
                }

                )
            }
        </>
    )
}