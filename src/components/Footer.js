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
                <h1 className="big-word"><em>"If you think good design is expensive, you should look at the cost of bad design."<br></br>- Dr. Ralf Speth, CEO Jaguar -</em></h1>
                <div className="five-columns">
                    <div className="footer-menu" >
                        <h3>DEAN DESIGN</h3>
                        <p className="footer-link"><a href="/">Accueil</a></p>
                        <p className="footer-link"><a href="/#a-propos">À propos</a></p>
                        <p className="footer-link"><a href="/portfolio">Portfolio</a></p>
                        <p className="footer-link"><a href="/javareact">React dev</a></p>
                        <p className="footer-link"><a href="/form">Contact</a></p>
                    </div>
                    <div className="footer-bio">
                        <h3 style={{ letterSpacing: "1px", marginBottom: "25px" }}>Benjamin H. Dean</h3>
                        <p>Je suis Web/UI/UX Visual Designer. J'ai les connaissances les compétences et la passion pour le Design et le Développement, sur des apps, des sites E-commerce & vitrines, design d'interfaces utilisateur pour apps et sites, projets en mode «mobile-first».</p>
                        <p>J’ai 12 ans d'expérience dans la conception visuelle/dev de sites web créatifs, d'interfaces utilisateur et d'applications. J'ai travaillé dans des équipes internationales de marketing numérique, des équipes R&D et des équipes UX.</p>
                        <p>J’élargis constamment mes connaissances en développement avec le UX en collaborant efficacement avec les intégrateurs et développeurs ainsi que les équipes Marketing.</p>
                    </div>
                    <div>
                        <div className="two-icons">
                            <a href="mailto:benjamin_h_dean@yahoo.com"><img src={mailto2} alt="Mail to contact" height="" width="" className="social-icon" /></a>
                            <a href="https://www.linkedin.com/in/benjamin-hudson-dean/" target="_blank"><img src={linkedin2} alt="LinkedIn" height="" width="" className="social-icon" /></a>
                            <a href="https://github.com/bdean05" target="_blank"><img src={github2} alt="GitHub" height="" width="" className="social-icon" /></a>
                            <a href="https://twitter.com/benjamin_h_dean" target="_blank"><img src={twitter2} alt="Twitter" height="" width="" className="social-icon" /></a>
                        </div>

                        <div >
                            <p className="footer-link"><a href="mailto:benjamin_h_dean@yahoo.com" style={{ padding: "0px 0px 0px 20px" }}>E-mail : benjamin_h_dean@yahoo.com</a></p>
                            <p className="contacting">Mob : (+33) 6 14 31 73 56</p>
                            <p className="contacting">Paris, France</p>
                        </div>

                    </div>
                </div>
                <p className="copyright">2021 &copy; Template by Benjamin H. Dean</p>
            </section>
        </div >
    )
}


export default Footer