import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import React from 'react'
import ModalMovie from "./ModalMovie";


export default function Movie(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovies] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setChosenMovies(props.moviee);
        setShow(true);
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.moviee.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.moviee.title}</Card.Title>
                    <Card.Text>
                        {props.moviee.overview}
                    </Card.Text>
                    <Card.Text>
                        {props.moviee.release_date} 
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