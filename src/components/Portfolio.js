import React from 'react'
import './style.css'
import bhd_01 from '../assets/bhd_01.jpg'
import bhd_02 from '../assets/bhd_02.jpg'
import bhd_03 from '../assets/bhd_03.jpg'
import bhd_04 from '../assets/bhd_04.jpg'
import bhd_05 from '../assets/bhd_05.jpg'
import bhd_06 from '../assets/bhd_06.jpg'
import bhd_07 from '../assets/bhd_07.jpg'
import bhd_08 from '../assets/bhd_08.jpg'
import bhd_09 from '../assets/bhd_09.jpg'
import bhd_10 from '../assets/bhd_10.jpg'
import bhd_11 from '../assets/bhd_11.jpg'
import bhd_12 from '../assets/bhd_12.jpg'
import bhd_13 from '../assets/bhd_13.jpg'
import bhd_14 from '../assets/bhd_14.jpg'
import bhd_15 from '../assets/bhd_15.jpg'
import bhd_16 from '../assets/bhd_16.jpg'
import bhd_17 from '../assets/bhd_17.jpg'
import bhd_18 from '../assets/bhd_18.jpg'
import textcv from '../assets/text-cv.png'
import textportfolio from '../assets/text-portfolio.png'
import pdffile from '../assets/PDF-file.png'
import pdfsuitcase from '../assets/PDF-suitcase.png'
import arrow1 from '../assets/arrow1.png'
import arrow2 from '../assets/arrow2.png'
import portfolioBhd from '../assets/Benj.h.Dean_portfolio-2021.pdf'
import cvBhd from '../assets/Benj.h.Dean_resume_2021_designer.pdf'

const Portfolio = (props) => {
    return (
        <div>
            <section className="portfolio-prez">
                <div className="portfolio-title">DESIGN & DEVELOPMENT</div>
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
                            <a href="/portfolio#illustration" style={{ textDecoration: "none" }} >
                                <div className="primary-titles">ILLUSTRATION</div>
                            </a>
                        </div>
                    </div>
                </div>
                <a name="webdesign"></a>
            </section>
            <section>
                <img src={bhd_01} alt="Dean Design Portfolio page 1" height="" width="100%" />
                <img src={bhd_02} alt="Dean Design Portfolio page 2" height="" width="100%" />
                <img src={bhd_17} alt="Dean Design Portfolio page 17" height="" width="100%" />
                <img src={bhd_05} alt="Dean Design Portfolio page 5" height="" width="100%" />
                <a name="uidesign"></a>
                <img src={bhd_03} alt="Dean Design Portfolio page 3" height="" width="100%" />
                <img src={bhd_12} alt="Dean Design Portfolio page 12" height="" width="100%" />
                <img src={bhd_08} alt="Dean Design Portfolio page 8" height="" width="100%" />
                <img src={bhd_06} alt="Dean Design Portfolio page 6" height="" width="100%" />
                <img src={bhd_15} alt="Dean Design Portfolio page 15" height="" width="100%" />
                <img src={bhd_18} alt="Dean Design Portfolio page 18" height="" width="100%" />
                <a name="graphicdesign"></a>
                <img src={bhd_07} alt="Dean Design Portfolio page 7" height="" width="100%" />
                <img src={bhd_04} alt="Dean Design Portfolio page 4" height="" width="100%" />
                <img src={bhd_09} alt="Dean Design Portfolio page 9" height="" width="100%" />
                <img src={bhd_14} alt="Dean Design Portfolio page 14" height="" width="100%" />
                <img src={bhd_11} alt="Dean Design Portfolio page 11" height="" width="100%" />
                <a name="illustration"></a>
                <img src={bhd_10} alt="Dean Design Portfolio page 10" height="" width="100%" />
                <img src={bhd_13} alt="Dean Design Portfolio page 13" height="" width="100%" />
                <img src={bhd_16} alt="Dean Design Portfolio page 16" height="" width="100%" />


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


export default Portfolio