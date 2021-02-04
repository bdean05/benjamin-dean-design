import React from 'react'
import './style.css'
import webWords from '../assets/web-words.png'
import portfolioBhd from '../assets/Benj.h.Dean_portfolio-2021.pdf'
import cvBhd from '../assets/Benj.h.Dean_resume_2021_designer.pdf'
import photoBio from '../assets/mac-notes-code.jpg'
import textcv from '../assets/text-cv.png'
import textportfolio from '../assets/text-portfolio.png'
import pdffile from '../assets/PDF-file.png'
import pdfsuitcase from '../assets/PDF-suitcase.png'
import arrow1 from '../assets/arrow1.png'
import arrow2 from '../assets/arrow2.png'



const Home = (props) => {
    return (
        <div>

            <a href={portfolioBhd} download="Benj.h.Dean_portfolio-2021.pdf">
                <section className="slider fade">
                    <div className="bigLetters" id="pot">
                        <img src={webWords} alt="Logo" height="" width="1420px" />
                        <a name="a-propos"></a>
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
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Hello World!</em></h1>
                        <p>Benjamin H.Dean, Web/UI/UX Visual Designer. Connaissances et compétences en Design et Développement, sur des apps, des sites E-commerce & vitrines, design d'interfaces utilisateur pour apps et sites, projets en mode «mobile-first».</p>
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Expérience</em></h1>
                        <p>12 ans d'expérience dans la conception visuelle et développement de sites créatifs, d'interfaces utilisateur et d'applications. Expérience en équipes internationales de Web Marketing numérique, équipes de R&D et équipes UX Design.</p>
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Vers le futur !</em></h1>
                        <p>Veille technologique, évolution constante en connaissances et en compétences de Développement Web + UX, savoir-faire en communication avec Développeurs Back-End et Marketing. Alliance entre la sensibilité artistique et l’innovation technologique.</p>
                    </div>
                    <div><img src={photoBio} alt="Logo" height="" width="" className="image" /></div>
                </div>
            </section>
            <section className="banner-three">
                <div className="blocks">
                    <div className="block">
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Mon profil</em></h1>
                        <p style={{ lineHeight: "2.2", color: "#000000" }}>Vous souhaitez créer, concevoir, refondre, développer et optimiser les parcours utilisateurs, l’ergonomie, l’expérience et les interfaces pour votre client ? Accédez à mes services créatifs et techniques. N'hésitez pas à télécharger mon CV et mon portfolio.</p>
                    </div>
                    <div className="block">
                        <div className="icons">
                            <div style={{ textAlign: "center", padding: "0px 35px 35px 0px" }}>
                                <a href={cvBhd} download="Benj.h.Dean_resume_2021_designer.pdf">
                                    <img src={arrow1} alt="Logo" height="29px" width="" style={{ margin: "-20px 0px 20px -75px", opacity: "0.5" }} />
                                    <div><img src={pdffile} alt="Logo" height="" width="" className="handicon" /></div>
                                    <img src={textcv} alt="Logo" height="24px" width="" style={{ marginTop: "25px" }} />
                                </a>
                            </div>
                            <div style={{ textAlign: "center", padding: "0px 0px 35px 35px" }}>
                                <a href={portfolioBhd} download="Benj.h.Dean_portfolio-2021.pdf">
                                    <img src={arrow2} alt="Logo" height="33px" width="" style={{ margin: "-20px 0px 20px -75px", opacity: "0.5" }} />
                                    <div><img src={pdfsuitcase} alt="Logo" height="" width="" className="handicon" /></div>
                                    <img src={textportfolio} alt="Logo" height="24px" width="" style={{ marginTop: "25px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}><form action="/messagerie"><button class="button">Me contacter</button></form></div>
                <br></br>
                <br></br>
                <br></br>
            </section>
        </div >
    )
}


export default Home