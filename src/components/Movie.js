import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import ModalMovie from "./ModalMovie";


export default function Movie(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovies] = useState();

    const handleClose = () => setShow(false);
    const handleShow = (movie) => {
        setChosenMovies(movie);
        setShow(true);
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.movie.poster_path} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>
                        {props.movie.overview}
                    </Card.Text>
                    <Card.Text>
                        {props.movie.release_date} 
                    </Card.Text>
                    <Button varient="info" onClick={handleShow}>Add To The Favorite List</Button>
                    
                </Card.Body>
            </Card>
            {
                chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />
            }
          
        </>
    )
}