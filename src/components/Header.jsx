
import logo from "./images/logo.webp"
import { Link } from "react-router-dom"
export default function Header(){
    return <div className="header">
<Link to="/" className="headerLogo activa"><img src={logo} alt="" /> <h1>N<span className="white">otflix</span></h1></Link>

<nav><Link className="navLink" to="/Movies">Movies</Link><Link className="navLink">Categories</Link><Link className="navLink">About</Link><Link to="/Favourites" className="navLink">Favourites</Link></nav>
    </div>
}