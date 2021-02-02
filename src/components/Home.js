import React from 'react'
import './style.css'
import webWords from '../assets/web-words.png'
import portfolioBhd from '../assets/Benj.h.Dean_portfolio-2021.pdf'
import photoBio from '../assets/mac-notes-code.jpg'
import textcv from '../assets/text-cv.png'
import textportfolio from '../assets/text-portfolio.png'
import pdffile from '../assets/PDF-file.png'
import pdfsuitcase from '../assets/PDF-suitcase.png'



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

                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Hello World!</em></h1>
                        <p>Web/UI Visual Designer, 12 ans d'expérience dans la conception visuelle/développement de sites web créatifs, d'interfaces utilisateur et d'applications. Connaissances et compétences en Design et Développement.</p>
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Expérience</em></h1>
                        <p>Équipes internationales de Marketing numérique, équipes de R&D et équipes UX. Design Digital, sur des apps, des sites vitrines puis l’E-commerce, design d'interfaces utilisateur pour applications et sites, projets en mode «mobile-first».</p>
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Vers le futur !</em></h1>
                        <p>Connaissances compétences en Développement Web, collaborations efficaces avec Développeurs Back-End. Concentration sur l’Expérience Utilisateur, le Marketing Web, et le Visual Design. J'allie ma sensibilité artistique avec l’innovation technologique.</p>
                    </div>
                    <div><img src={photoBio} alt="Logo" height="" width="" className="image" /></div>
                </div>
            </section>
            <section className="banner-three">
                <div className="blocks">
                    <div className="block">
                        <a name="chapter4">This is chapter 4</a>
                        <h1 className="subtitle"><em>➝&nbsp;&nbsp;&nbsp;&nbsp;Mon profil</em></h1>
                        <p>Vous souhaitez créer, concevoir, refondre, développer et optimiser les parcours utilisateurs, l’ergonomie, l’expérience et les interfaces pour votre client ? Accédez à mes services créatifs et techniques. N'hésitez pas à téléchargez mon CV et mon portfolio.</p>
                        <br></br>
                    </div>
                    <div className="block" style={{ textAlign: "center", marginTop: "25px" }}><img src={pdffile} alt="Logo" height="" width="" className="handicon" /><img src={textcv} alt="Logo" height="24px" width="" style={{ margin: "-50px 0px 50px 0px" }} className="block" /></div>
                    <div className="block" style={{ textAlign: "center", marginTop: "25px" }}><img src={pdfsuitcase} alt="Logo" height="" width="" className="handicon" /><img src={textportfolio} alt="Logo" height="24px" width="" style={{ margin: "-50px 0px 50px 0px" }} className="block" /></div>
                </div>
            </section>
            <section className="banner-footer">
                <h1 style={{ fontSize: "24px", color: "#666b9f", textAlign: "center", padding: "50px" }}><em>And more!</em></h1>
                <p style={{ fontSize: "14px", color: "#ffffff", padding: "50px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla sit amet nulla volutpat scelerisque ornare vitae risus. Nunc nibh est, maximus non rutrum eget, aliquet id tortor. Donec semper eget sem eget aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin tincidunt imperdiet ornare. Etiam scelerisque dapibus dolor vitae suscipit. Mauris consectetur vitae lectus ut blandit. In vel urna semper, tempus enim at, mattis dolor. Suspendisse vel augue tincidunt, pharetra est id, ultricies erat. Aliquam sed mi vitae nunc auctor tempus.
In tempor ligula eu consequat convallis. Etiam malesuada elit augue, vitae tempor metus iaculis eu. Ut facilisis tortor eget diam dapibus, id rhoncus augue iaculis. Sed in neque ut augue maximus ultricies ut eget turpis. Cras aliquet leo quis laoreet condimentum. Phasellus et erat eget urna pharetra malesuada. In nec neque feugiat, pulvinar lectus lobortis, tristique turpis. Phasellus tortor quam, congue ut justo sit amet, consequat ultrices neque. Suspendisse vel enim aliquam, cursus libero sed, dignissim justo.</p>
            </section>

        </div >
    )
}


export default Home