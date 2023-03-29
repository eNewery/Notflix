import { useMoviesContext } from "./MoviesState"

export default function Favourites(){
    const context = useMoviesContext();

    return <div>
        {context.favouriteData.map(item => console.log(item.data))}
    </div>
}