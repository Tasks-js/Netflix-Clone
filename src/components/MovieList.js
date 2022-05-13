import Movie from "./Movie"

// import {Card , Button} from 'react-bootstrap'



export default function Cards(props) {
    return (
        <>
            {
                props.trendings.map((movie) => {
                    return (
                        <>
                            <Movie movie={movie} />
                        </>
                    )
                }

                )
            }
        </>
    )
}