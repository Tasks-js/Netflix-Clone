import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
//import Cards from './Cards';

export default function Home() {
    const [trendings, setTrending] = useState([]);


    async function getTrending() {
        // let serverUrl = process.env.REACT_KEY_SERVER;

        let url = "https://movie-js-02-prep.herokuapp.com/trending";
        // console.log("Server url", serverUrl);
        let response = await fetch(url);
        console.log("response", response)
        let trendingsData = await response.json();

        console.log("parseddata", trendingsData)

        setTrending(trendingsData); // updating the state, now the data coming from the server is stored inside the "recipes" state
        // axios.get(url).then().catch()

        console.log("1, After updating", trendings);
    }


    useEffect(() => {
        getTrending();
    }, [])


    return (
        <>
            <h1>Home Page</h1>
            {/* <button>Old way</button> */}
            <br />
            <Button variant="info">Get Trendings</Button>

            {
                //(trendings.length > 0) && <Cards trendings={trendings} />
            }


        </>
    )
}