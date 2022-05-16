import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



export default function FavRecipe() {
    const [favRecipes, setFavRecipes] = useState();

    async function getFavRecipes() {
        let url = "https://movie-js-02-prep.herokuapp.com/getMovie";
        let response = await fetch(url, {
            method: 'GET'
        });

        let recivedData = await response.json();
        setFavRecipes(recivedData)
    }

    async function handleDelete(id) {
        let url =`https://movies-bahaa.herokuapp.com/DELETE?id=${id}`;
        let response = await fetch(url, {
            method: 'DELETE',
        })
        // let deletedRecipe = await response.json();

        if (response.status === 204) {
            getFavRecipes();
            alert("Recipe deleted successfully");
        }

    }


    useEffect(() => {
        getFavRecipes();
    }, []);
    return (
        <>
            <h1>Favourite Page</h1>
            {
                favRecipes && favRecipes.map((favRecipe) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${favRecipe.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{favRecipe.title}</Card.Title>
                                <Card.Text>
                                    {favRecipe.summary}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>handleDelete(favRecipe.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                }
                )
            }

        </>
    )
}