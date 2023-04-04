
import logo from "./images/logo.png"
import { Link } from "react-router-dom"
export default function Header(){
    return <div className="header">
<Link to="/" className="headerLogo activa"><img src={logo} alt="" /> <h1>Notflix</h1></Link>

<nav><Link className="navLink" to="/Movies">Movies</Link><Link to="/Favourites" className="navLink">Favourites</Link><Link className="navLink">About</Link></nav>
    </div>
}