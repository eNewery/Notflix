import linkedin from "./images/linkedin.png"
import github from "./images/github.png"
export default function Footer(){

    return <footer className="footerContainer">
    <img src={linkedin} alt="" />
<div className="copy"><p>Derechos Reservados y Copyright Ulises Ivo Rodriguez © 2023</p></div>
    <img src={github} alt="" />
    </footer>
}