import { Link } from "react-router-dom";

export default function CategoryItem({item}){
    return <Link to={`/Category/${item.name}`}>{item.name}</Link>
}