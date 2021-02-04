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
import twitter2 from '../assets/social-network-icon_twitter2.png'
import linkedin2 from '../assets/social-network-icon_linkedin2.png'
import github2 from '../assets/social-network-icon_github2.png'
import mailto2 from '../assets/mail-to-contact2.png'



const Footer = (props) => {
    return (
        <div>
            <section className="banner-footer">
                <h1 style={{ fontSize: "24px", color: "#666b9f", textAlign: "center" }}><em>And more!</em></h1>
                <div className="five-columns">
                    <div className="footer-list">
                        <h3>DEAN DESIGN</h3>
                        <p className="footer-link"><a href="#">Accueil</a></p>
                        <p className="footer-link"><a href="#">À propos</a></p>
                        <p className="footer-link"><a href="#">Portfolio</a></p>
                        <p className="footer-link"><a href="#">Contact</a></p>
                    </div>
                    <div className="footer-list">
                        <h3>Benjamin H. Dean</h3>
                        <p className="footer-link" style={{ textAlign: 'justify' }}>Web/UI/UX Visual Designer. Connaissances et compétences en Design et Développement, sur des apps, des sites E-commerce & vitrines, design d'interfaces utilisateur pour apps et sites, projets en mode «mobile-first».</p>
                    </div>
                    <div>
                        <div className="two-icons">
                            <a href="mailto:benjamin_h_dean@yahoo.com"><img src={mailto2} alt="Mail to contact" height="" width="" className="social-icon" /></a>
                            <a href="https://www.linkedin.com/in/benjamin-hudson-dean/" target="_blank"><img src={linkedin2} alt="LinkedIn" height="" width="" className="social-icon" /></a>
                            <a href="https://github.com/bdean05" target="_blank"><img src={github2} alt="GitHub" height="" width="" className="social-icon" /></a>
                            <a href="https://twitter.com/benjamin_h_dean" target="_blank"><img src={twitter2} alt="Twitter" height="" width="" className="social-icon" /></a>
                        </div>

                        <div className="two-icons">
                            <p style={{ textAlign: "center", padding: "20px 2px 0px 2px", fontSize: "15px", opacity: "0.6" }}>(+33) 6 14 31 73 56  /  Paris, France</p>
                        </div>

                    </div>
                </div>
                <p style={{ marginTop: "45px", padding: "0px", fontSize: "12px", textAlign: "center" }}>2021 &copy; Template by Benjamin H. Dean</p>
            </section>
        </div >
    )
}


export default Footer