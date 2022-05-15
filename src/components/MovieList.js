import "./MovieList";
import {  Container } from 'react-bootstrap';
import Movie from "./Movie";



export default function MovieList(props) {
    return (
        
        <>
        <Container fluid className="main-container" >
        <div className="d-flex flex-wrap justify-content-between w-75 ms-auto me-auto">

            {
             props.movies.map((moviee) => {
                    return (
                        <>
                        <div>
                            <Movie key={moviee.id} moviee={moviee} updateMovie={props.updateMovie} />
                        </div>
                        </>
                    )
                }

                )
            }
        </div>
        </Container>
        </>
    )
}