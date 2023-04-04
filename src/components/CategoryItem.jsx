import { Link } from "react-router-dom";

export default function CategoryItem({item}){
    return <Link className="categoryItem" to={`/Category/${item.id}`}>{item.name}</Link>
}