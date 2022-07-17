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
                <div className="react-title">REACT DEVELOPMENT</div>
                {/*<div className="coming-soon">Links coming soon!</div> */}


                <div class="flex-react-container">
                    <a href='Calculator' style={{ textDecoration: 'none', flex: '25%' }}><div class="flex-react-item">CALCULATOR</div></a>
                    <a href='https://bdean05.github.io/Iron-Curtain-Project/index.html' target='_blank' style={{ textDecoration: 'none', flex: '25%' }}><div class="flex-react-item">GUESS GAME</div></a>
                    <a href='Timer' style={{ textDecoration: 'none', flex: '25%' }}><div class="flex-react-item">TIMER</div></a>
                    <a href='MaxMin' style={{ textDecoration: 'none', flex: '25%' }}><div class="flex-react-item">MAXIMUM/MINIMUM</div></a>
                </div>

                <div class="flex-react-container">
                    <a href='Exercice' style={{ textDecoration: 'none', flex: '25%' }}><div class="flex-react-item">EXERCICE</div></a>
                    <a href='Photos' style={{ textDecoration: 'none', flex: '25%' }}><div class="flex-react-item">PHOTOS</div></a>
                    <a href='Gallery' style={{ textDecoration: 'none', flex: '25%' }}><div class="flex-react-item">GALLERY</div></a>
                    <a href='Songworld' style={{ textDecoration: 'none', flex: '25%' }}><div class="flex-react-item">SONGWORLD</div></a>
                </div>
                <div class="flex-react-container">
                    <a href='Home' style={{ textDecoration: 'none', flex: '25%' }}><div class="flex-react-item">THIS WEBSITE</div></a>
                </div>


                {/*<button onClick={() => window.location = "/calculator"}>Calculatrice</button>
                <button onClick={() => window.location = "/MaxMin"}>Maximum Minimum</button>*/}
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
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;My profile</em></h1>
                        <p style={{ lineHeight: "2.2", color: "#000000" }}>Do you want to design, create, redesign, develop and optimize user journeys, ergonomics, experience and interfaces for your client? Access my creative and technical services. Contact me by message or by mobile.</p>
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
                <div style={{ textAlign: "center", marginTop: "0px" }}><form action="/form"><button class="button">Contact me</button></form></div>
                <br></br>
                <br></br>
                <br></br>
            </section>
        </div >
    )
}


export default Javareact