import linkedin from "./images/linkedin.png"
import github from "./images/github.png"
export default function Footer(){

    return <footer className="footerContainer">
<div className="copy"><p>Derechos Reservados y Copyright Ulises Ivo Rodriguez © 2023</p></div>
<div className="rrss"><img src={linkedin} alt="" /><img src={github} alt="" /></div>
    </footer>
}