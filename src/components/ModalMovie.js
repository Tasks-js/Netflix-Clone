
import {Modal,Form,Button} from 'react-bootstrap';
import "./ModelMovie.css"
import { useRef } from 'react';


export default function ModalMovie(props) {

let refComment = useRef()

function handleComment(e){
e.preventDefault()
let commentUser =  refComment.current.value;
console.log({commentUser});

let NewComment = {...props.chosenMovie,commentUser}

props.updateComment(NewComment,props.chosenMovie.id)

}


//.......


async function addFav(e,recipe){
    e.preventDefault()
let url = "https://movie-js-02-prep.herokuapp.com/addMovie";
let data={

    title :recipe.title , 
    release_date :recipe.release_date ,
     overview :recipe.overview, 
     personal_coment :recipe.personal_coment

}
let response = await fetch(url,{
method : "post",

headers: {
    'Content-Type': 'application/json'},

body: JSON.stringify(data)


})
let addFavo = await response.json();
console.log({addFavo});

}




    return (
        <>
            <Modal className='Modal' show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <img className='card' src={`https://image.tmdb.org/t/p/w500/${props.chosenMovie.poster_path} `} alt="poster"  />
             

                </Modal.Body>

                {props.chosenMovie.personal_comment ? props.chosenMovie.personal_comment : "No comment is added"}

                <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
    <Form.Label></Form.Label>
    <Form.Control ref={refComment} as="textarea" rows={3} placeholder="Add comment"/>
  </Form.Group>
</Form>


                <Modal.Footer>

                    <Button variant="secondary" onClick={(e)=>handleComment(e)}>
                        Submit Comment
                    </Button>
                    <Button variant="primary" onClick={(e)=>addFav(e,props.chosenMovie)}>
                        Add to favorite
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}