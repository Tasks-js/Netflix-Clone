import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./ModelMovie.css";
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';


export default function ModalMovie(props) {
    let commentRef = useRef();

    function handleComment(e) {
        e.preventDefault();
        let userComment = commentRef.current.value;
        console.log({ userComment });
        let newMovie = { ...props.chosenMovie, userComment };
        props.updateMovie(newMovie, props.chosenMovie.id);
    }
    return (
        <>
            <Modal class="Modal" show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <img class="card"  src={`https://image.tmdb.org/t/p/w500/${props.chosenMovie.poster_path} `} alt="poster"  />
                {props.chosenMovie.overview.substring(0, 400)}
                    <br />
                    {props.chosenMovie.personal_comment ? props.chosenMovie.personal_comment : "No comment is added"}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Entre you comment" />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e) => handleComment(e)}>
                            Submit Comment
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit" >
                            Add To Favorites
                    </Button>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}