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
                <img src={webWords} alt="WEB UX UI WEB DESIGN APP, Benjamin Dean Design" height="99" width="1670" className="bigLetters" />

                {/* Slider et lettres pour Mobile */}
                <a href="/#a-propos"><div className="slider-mobile">
                    <div style={{ paddingTop: "52px", textAlign: "center", margin: "0px 58px" }}>
                        {/* <div style={{ backgroundColor: "white", textAlign: "center", padding: "18px 12px 12px 12px", lineHeight: "26px", fontFamily: "roboto", color: "#303030", fontSize: "16px", opacity: "0.9" }}><span style={{ lineHeight: "42px", fontSize: "18px", letterSpacing: "0.5px", color: "#303030" }}>WELCOME TO MY SITE.</span><br></br>Visual Design, UX/UI, Design Thinking, Web solving, User-Centric app & web Interfaces.<br></br><a href="/portfolio" style={{ lineHeight: "46px", fontSize: "17px", textDecoration: "none", color: "#303030" }} >Check my portfolio!</a><br></br></div> */}
                    </div>
                </div></a>
                <a href="/#a-propos"><div className="bigLetters-mobile">
                    <img src={webWords} alt="WEB UX UI WEB DESIGN APP, Benjamin Dean Design" height="99" width="1420" style={{ marginTop: "-400px" }} />
                </div></a>

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
                        <p>Benjamin H. Dean, UI/UX & Web/Cloud Visual Designer. Skills and knowledge and in design and development on apps, design sytems, e-commerce sites & showcases. Design of user interfaces for apps and sites, mobile-first projects.</p>
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Experience</em></h1>
                        <p>Experienced software design professional. 15-years’ practice and expertise in UI/UX visual design and web development of creative sites, user interfaces and applications. Experience in international Digital Web Marketing teams, R&D teams and UX Design teams.</p>
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Aiming at the future!</em></h1>
                        <p>Technological watch, constant evolution in knowledge and skills of Web + UX Development, know-how in communication with Back-End Developers and Marketing. Alliance between artistic sensibility and technological innovation.</p>
                    </div>
                    <div><img src={photoBio} alt="Logo" height="" width="" className="image" /></div>
                </div>
            </section>
            <section className="banner-three">
                <div className="blocks">
                    <div className="block">
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;My profile</em></h1>
                        <p style={{ lineHeight: "2.1", color: "#000000" }}>Do you want to create, design, redesign, develop and optimize user journeys, ergonomics, experience and interfaces for your client? Access my creative and technical services. Feel free to download my resume and my portfolio.</p>
                    </div>
                    <div className="block">
                        <div className="icons">
                            <div style={{ textAlign: "center", padding: "0px 35px 35px 0px" }}>
                                <a href={cvBhd} download="Benj.h.Dean_resume_2021_designer.pdf">
                                    <img src={arrow1} alt="CV Benjamin Dean UX UI Designer" height="28px" width="" style={{ margin: "-16px 0px 20px -75px" }} />
                                    <div><img src={pdffile} alt="pdf CV Benjamin Dean UX UI Designer" height="" width="" className="handicon" /></div>
                                    <img src={textcv} alt="CV Benjamin Dean UX UI Designer" height="24px" width="" style={{ marginTop: "25px" }} />
                                </a>
                            </div>
                            <div style={{ textAlign: "center", padding: "0px 0px 35px 35px" }}>
                                <a href={portfolioBhd} download="Benj.h.Dean_portfolio-2021.pdf">
                                    <img src={arrow2} alt="portfolio Benjamin Dean UX UI Designer" height="32px" width="" style={{ margin: "-16px 0px 20px -75px" }} />
                                    <div><img src={pdfsuitcase} alt="pdf portfolio Benjamin Dean UX UI Designer" height="" width="" className="handicon" /></div>
                                    <img src={textportfolio} alt="portfolio Benjamin Dean UX UI Designer" height="24px" width="" style={{ marginTop: "25px" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blocks" style={{ marginBottom: "25px" }}>
                    <div className="block">
                        <div style={{ textAlign: "center", margin: "0px 42px" }}><form action="/portfolio"><button className="button">Check my work</button></form></div>
                    </div>
                    <div className="block">
                        <div style={{ textAlign: "center", margin: "0px 55px" }}><form action="/form"><button className="button">Contact me</button></form></div>
                    </div>
                </div>
            </section>
        </div >
    )
}


export default Home