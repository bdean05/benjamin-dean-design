import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import bhd from '../assets/dean-design.png'

const Header = () => {


    return (
        <div className="sticky-inner" style={{ width: "100%", height: "35px", backgroundColor: "#ffffff", paddingTop: "25px" }}>
            <Link style={{ textDecoration: "none" }} to="/"><img src={bhd} alt="Logo" height="" width="210" style={{ margin: "-12px 25px 0px 15px " }} /></Link>
            <Link className="menu-links" to="/">Accueil</Link>
            <Link className="menu-links" to="/panier">À propos</Link>
            <Link className="menu-links" to="/gallery">Portfolio</Link>
            <Link className="menu-links" to="/messagerie">Contact</Link>
        </div >
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