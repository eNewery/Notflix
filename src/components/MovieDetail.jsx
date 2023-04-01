import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function MovieDetail() {
    const [data, setData] = useState({
})
    const id = useParams();

    useEffect(() => {
        const apiKey = "d7214adc4b19c9daf7f6294b411d236d"
        const movieId = id.id;

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(res => setData(res))
    }, [])
    return 

}