import React from 'react'
import './style.css'
import webWords from '../assets/web-words.png'
import portfolioBhd from '../assets/Benj.h.Dean_portfolio-2021.pdf'
import photoBio from '../assets/mac-notes-code.jpg'



const Home = (props) => {
    return (
        <div>

            <a href={portfolioBhd} download="Benj.h.Dean_portfolio-2021.pdf">
                <section className="slider fade">
                    <div className="bigLetters" id="pot">
                        <img src={webWords} alt="Logo" height="" width="1420px" />
                    </div>
                </section>
            </a>
            <section className="banner-one">
                <div className="widthy">
                    <div className="four-chapters">
                        <div className="chapter-group">
                            <a href="#" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">WEB DESIGN</div>
                            </a>
                        </div>
                        <div>
                            <a href="#" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">UI DESIGN</div>
                            </a>
                        </div>
                        <div>
                            <a href="#" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">GRAPHIC DESIGN</div>
                            </a>
                        </div>
                        <div>
                            <a href="#" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">ILLUSTRATION</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner-two">
                <div className="blocks">
                    <div className="block">
                        <h1 style={{ fontSize: "24px", color: "#666b9f" }}><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Hello World!</em></h1>
                        <p>Web/UI Visual Designer, 12 ans d'expérience dans la conception visuelle/développement de sites web créatifs, d'interfaces utilisateur et d'applications. Connaissances et compétences en Design et Développement.</p>
                        <h1 style={{ fontSize: "24px", color: "#666b9f" }}><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Expérience...</em></h1>
                        <p>Équipes internationales de Marketing numérique, équipes de R&D et équipes UX. Design Digital, sur des apps, des sites vitrines puis l’E-commerce, design d'interfaces utilisateur pour applications et sites, projets en mode «mobile-first».</p>
                        <h1 style={{ fontSize: "24px", color: "#666b9f" }}><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Vers le futur !</em></h1>
                        <p>Connaissances en Développement Web, collaborations efficaces avec Développeurs Back-End. Concentration sur l’Expérience Utilisateur, le Marketing Web, et le Visual Design. J'allie ma sensibilité artistique avec l’innovation technologique.</p>
                    </div>
                    <div><img src={photoBio} alt="Logo" height="" width="" className="image" /></div>
                </div>
            </section>
            <section className="banner-three">
                <h1 style={{ fontSize: "24px", color: "#666b9f" }}><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Hello World!</em></h1>
                <p>Web/UI Visual Designer, 12 ans d'expérience dans la conception visuelle/développement de sites web créatifs, d'interfaces utilisateur et d'applications. Connaissances et compétences en Design et Développement.</p>
                <h1 style={{ fontSize: "24px", color: "#666b9f" }}><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Expérience...</em></h1>
                <p>Équipes internationales de Marketing numérique, équipes de R&D et équipes UX. Design Digital, sur des apps, des sites vitrines puis l’E-commerce, design d'interfaces utilisateur pour applications et sites, projets en mode «mobile-first».</p>
                <h1 style={{ fontSize: "24px", color: "#666b9f" }}><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Vers le futur !</em></h1>
                <p>Connaissances en Développement Web, collaborations efficaces avec Développeurs Back-End. Concentration sur l’Expérience Utilisateur, le Marketing Web, et le Visual Design. J'allie ma sensibilité artistique avec l’innovation technologique.</p>
            </section>
            <section className="banner-footer">
                <h1 style={{ fontSize: "24px", color: "#ffffff" }}><em>➝&nbsp;&nbsp;&nbsp;&nbsp;HelloHello World!</em></h1>
                <p>Web/UI Visual Designer, 12 ans d'expérience dans la conception visuelle/développement de sites web créatifs, d'interfaces utilisateur et d'applications. Connaissances et compétences en Design et Développement.</p>
                <h1 style={{ fontSize: "24px", color: "#ffffff" }}><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Expérience...</em></h1>
                <p>Équipes internationales de Marketing numérique, équipes de R&D et équipes UX. Design Digital, sur des apps, des sites vitrines puis l’E-commerce, design d'interfaces utilisateur pour applications et sites, projets en mode «mobile-first».</p>
                <h1 style={{ fontSize: "24px", color: "#ffffff" }}><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Vers le futur !</em></h1>
                <p>Connaissances en Développement Web, collaborations efficaces avec Développeurs Back-End. Concentration sur l’Expérience Utilisateur, le Marketing Web, et le Visual Design. J'allie ma sensibilité artistique avec l’innovation technologique.</p>
            </section>

        </div>
    )
}


export default Home