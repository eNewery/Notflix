import SearchBar from "./SearchBar";
import logo from "./images/logo.webp"
import { Link } from "react-router-dom"
export default function Header(){
    return <div className="header">
<Link to="/" className="headerLogo activa"><img src={logo} alt="" /> <h1>Notflix</h1></Link>
<nav><Link to="/Movies">Movies</Link><button>Categories</button><button>About</button></nav>
<SearchBar/>
    </div>
}