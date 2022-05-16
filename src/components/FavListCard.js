import { Card ,Button} from "react-bootstrap"


export default function FavCard(preps){

    return(
        <>
        {
            preps.favorite.map(cards=>{
                return(

<Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${cards.poster_path}`} />
                <Card.Body>
                    <Card.Title>{cards.title}</Card.Title>
                    <Card.Text>
                        {cards.overview}
                    </Card.Text>
                    <Card.Text>
                        {cards.release_date} 
                    </Card.Text>
                 
                    <Button varient="info" onClick={()=>cards.deleteFavo(cards.title)}>Delete</Button>
                    
                </Card.Body>
            </Card>

                )

            })

        }
        




        </>
    )
}