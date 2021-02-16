import React from 'react'
import './style.css'
import textcv from '../assets/text-cv.png'
import textportfolio from '../assets/text-portfolio.png'
import pdffile from '../assets/PDF-file.png'
import pdfsuitcase from '../assets/PDF-suitcase.png'
import arrow1 from '../assets/arrow1.png'
import arrow2 from '../assets/arrow2.png'
import portfolioBhd from '../assets/Benj.h.Dean_portfolio-2021.pdf'
import cvBhd from '../assets/Benj.h.Dean_resume_2021_designer.pdf'

const Javareact = (props) => {
    return (
        <div>
            <section>
                <div style={{ display: "block", lineHeight: "40px" }} className="portfolio-title">REACT DEVELOPMENT</div>
                <div className="coming-soon">Links coming soon!</div>
                {/*<div style={{ display: "block", margin: "100px 0px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>Coming soon!</div>*/}
                {/*<div className="widthy">
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
                            <a href="/portfolio#illustration" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">ILLUSTRATION</div>
                            </a>
                        </div>
                    </div>
                </div>
                */}
            </section>

            <section className="banner-three" style={{ borderTop: "1px solid #f5f5f7", marginTop: "50px" }}>
                <div className="blocks">
                    <div className="block">
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Mon profil</em></h1>
                        <p style={{ lineHeight: "2.2", color: "#000000" }}>Vous souhaitez concevoir, créer, refondre, développer et optimiser les parcours utilisateurs, l’ergonomie, l’expérience et les interfaces pour votre client ? Accédez à mes services créatifs et techniques. N'hésitez pas à télécharger mon CV et mon portfolio.</p>
                    </div>
                    <div className="block">
                        <div className="icons">
                            <div style={{ textAlign: "center", padding: "0px 35px 35px 0px" }}>
                                <a href={cvBhd} download="Benj.h.Dean_resume_2021_designer.pdf">
                                    <img src={arrow1} alt="Logo" height="28px" width="" style={{ margin: "-16px 0px 20px -75px" }} />
                                    <div><img src={pdffile} alt="Logo" height="" width="" className="handicon" /></div>
                                    <img src={textcv} alt="Logo" height="24px" width="" style={{ marginTop: "25px" }} />
                                </a>
                            </div>
                            <div style={{ textAlign: "center", padding: "0px 0px 35px 35px" }}>
                                <a href={portfolioBhd} download="Benj.h.Dean_portfolio-2021.pdf">
                                    <img src={arrow2} alt="Logo" height="32px" width="" style={{ margin: "-16px 0px 20px -75px" }} />
                                    <div><img src={pdfsuitcase} alt="Logo" height="" width="" className="handicon" /></div>
                                    <img src={textportfolio} alt="Logo" height="24px" width="" style={{ marginTop: "25px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "0px" }}><form action="/form"><button class="button">Me contacter</button></form></div>
                <br></br>
                <br></br>
                <br></br>
            </section>
        </div >
    )
}


export default Javareact