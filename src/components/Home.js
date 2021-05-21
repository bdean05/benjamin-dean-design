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

            {/* <a href="/#a-propos"> */}
            <section>
                {/* Slider et lettres pour Desktop */}
                <div className="slider"></div>
                <img src={webWords} alt="WEB UX UI WEB DESIGN, Benjamin Dean Design" height="99" width="1670" className="bigLetters" />

                {/* Slider et lettres pour Mobile */}
                <div className="slider-mobile">
                    <div style={{ paddingTop: "52px", textAlign: "center", margin: "0px 58px" }}>
                        <div style={{ backgroundColor: "white", textAlign: "center", padding: "18px 12px 12px 12px", lineHeight: "26px", fontFamily: "roboto", color: "#303030", fontSize: "16px", opacity: "0.9" }}><span style={{ lineHeight: "42px", fontSize: "18px", letterSpacing: "0.5px", color: "#303030" }}>WELCOME TO MY SITE.</span><br></br>Visual Design, UX/UI, Design Thinking, Web solving, User-Centric app & web Interfaces.<br></br><a href="/portfolio" style={{ lineHeight: "46px", fontSize: "17px", textDecoration: "none", color: "#303030" }} >Check my portfolio!</a><br></br></div>
                    </div>
                </div>
                <div className="bigLetters-mobile">
                    <img src={webWords} alt="WEB UX UI WEB DESIGN, Benjamin Dean Design" height="99" width="1420" style={{ marginTop: "-400px" }} />
                </div>

                {/* Link "A propos" */}
                <a name="a-propos"></a>
            </section>
            {/* </a> */}

            <section className="banner-one">
                <div className="widthy">
                    <div className="four-chapters">
                        <div className="chapter-group">
                            <a href="/portfolio#webdesign" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">WEB DESIGN</div>
                            </a>
                        </div>
                        <div>
                            <a href="/portfolio#uidesign" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">UI DESIGN</div>
                            </a>
                        </div>
                        <div>
                            <a href="/portfolio#graphicdesign" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">GRAPHIC DESIGN</div>
                            </a>
                        </div>
                        <div>
                            <a href="/javareact" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">REACT DEVELOPMENT</div>
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
                        <p style={{ lineHeight: "2.1", color: "#000000" }}>Vous souhaitez créer, concevoir, refondre, développer et optimiser les parcours utilisateurs, l’ergonomie, l’expérience et les interfaces pour votre client ? Accédez à mes services créatifs et techniques. N'hésitez pas à télécharger mon CV et mon portfolio.</p>
                    </div>
                    <div className="block">
                        <div className="icons">
                            <div style={{ textAlign: "center", padding: "0px 35px 35px 0px" }}>
                                <a href={cvBhd} download="Benj.h.Dean_resume_2021_designer.pdf">
                                    <img src={arrow1} alt="Arrow to CV of Benjamin H. Dean" height="28px" width="" style={{ margin: "-16px 0px 20px -75px" }} />
                                    <div><img src={pdffile} alt="pdf CV of Benjamin Dean" height="" width="" className="handicon" /></div>
                                    <img src={textcv} alt="CV" height="24px" width="" style={{ marginTop: "25px" }} />
                                </a>
                            </div>
                            <div style={{ textAlign: "center", padding: "0px 0px 35px 35px" }}>
                                <a href={portfolioBhd} download="Benj.h.Dean_portfolio-2021.pdf">
                                    <img src={arrow2} alt="Arrow to portfolio of Benjamin H. Dean" height="32px" width="" style={{ margin: "-16px 0px 20px -75px" }} />
                                    <div><img src={pdfsuitcase} alt="pdf portfolio of Benjamin Dean" height="" width="" className="handicon" /></div>
                                    <img src={textportfolio} alt="Portfolio" height="24px" width="" style={{ marginTop: "25px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blocks" style={{ marginBottom: "25px" }}>
                    <div className="block">
                        <div style={{ textAlign: "center", margin: "0px 42px" }}><form action="/portfolio"><button className="button">Voir mon travail</button></form></div>
                    </div>
                    <div className="block">
                        <div style={{ textAlign: "center", margin: "0px 55px" }}><form action="/form"><button className="button">Me contacter</button></form></div>
                    </div>
                </div>
            </section>
        </div >
    )
}


export default Home