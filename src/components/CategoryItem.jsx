import { Link } from "react-router-dom";
import { useMoviesContext } from "./MoviesState";

export default function CategoryItem({item}){
    const context = useMoviesContext();
    return <Link className="categoryItem" onClick={() => context.setCategoryTitle(item.name)} to={`/Category/${item.id}`}>{item.name}</Link>
}