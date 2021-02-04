import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import bhd from '../assets/dean-design.png'
import twitter from '../assets/social-network-icon_twitter.png'
import linkedin from '../assets/social-network-icon_linkedin.png'
import github from '../assets/social-network-icon_github.png'
import mailto from '../assets/mail-to-contact.png'

const Header = () => {


    return (
        <div>
            <div className="sticky-inner" style={{ width: "100%", height: "35px", backgroundColor: "#ffffff", paddingTop: "25px" }}>
                <Link style={{ textDecoration: "none" }} to="/"><img src={bhd} alt="Logo" height="" width="220" style={{ margin: "-12px 25px 0px 15px " }} /></Link>
                <Link className="menu-links" to="/">Accueil</Link>
                <a className="menu-links" href="/#a-propos">À propos</a>
                <Link className="menu-links" to="/gallery">Portfolio</Link>
                <Link className="menu-links" to="/messagerie">Contact</Link>
                <div className="social-box">
                    <a href="mailto:benjamin_h_dean@yahoo.com"><img src={mailto} alt="Mail to contact" height="" width="18" className="social-link" /></a>
                    <a href="https://www.linkedin.com/in/benjamin-hudson-dean/" target="_blank"><img src={linkedin} alt="LinkedIn" height="" width="18" className="social-link" /></a>
                    <a href="https://github.com/bdean05" target="_blank"><img src={github} alt="GitHub" height="" width="18" className="social-link" /></a>
                    <a href="https://twitter.com/benjamin_h_dean" target="_blank"><img src={twitter} alt="Twitter" height="" width="18" className="social-link" /></a>
                </div>
            </div >
        </div>
    )
}

/* 

            <Link className="menu-links" to="/songs">Songs</Link>
            <Link className="menu-links" to="/gallery">Gallery</Link>
            <Link className="menu-links" to="/panier">Panier</Link>


            <section class="main-header">
                <div class="widthy">
                    <div class="topnav" id="myTopnav">
                        <a href="#">
                            <img src="images/logo-aviva.png" class="active logo" />
                        </a>
                        <a href="#news">Rubrique 1</a>
                        <a href="#contact">Rubrique 2</a>
                        <a href="#contact">Rubrique 3</a>
                        <button class="button-espace">Mon espace</button>
                        <a class="search">Rechercher<img src="images/search.png" class="search-icon" /></a>
                        <a href="javascript:void(0);" class="icon" onclick="mobMenu()">Menu</a>
                    </div>
                </div>
            </section>


            
            <script>
                function mobMenu() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                    } else {
                    x.className = "topnav";
                    }
                }
            </script>

*/





/* 

La première fonction utilise une syntaxe sans le return car on a pas mis d'accollade. Sans les accolades il y a un "return" sous-entendu
const maFonction = () => "hello"
const maFonctionEquivalente = () => {
    let a = 10
    let b = 10 - a
    return "hello"
}
*/

export default Header