import linkedin from "./images/linkedin.png"
import { Link } from "react-router-dom"
import github from "./images/github.png"
export default function Footer(){

    return <footer className="footerContainer">
        <Link target="_blank" to={"https://github.com/eNewery?tab=overview&from=2022-12-01&to=2022-12-31"}><img src={github} alt="" /></Link>
<div className="copy"><p>Derechos Reservados y Copyright Ulises Ivo Rodriguez © 2023</p></div>
    <Link target="_blank" to={"https://www.linkedin.com/in/ulises-rodriguez-5b512a230/"}><img src={linkedin} alt="" /></Link>
    
    </footer>
}