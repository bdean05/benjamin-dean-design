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
                        <p className="footer-link"><a href="/">Homepage</a></p>
                        <p className="footer-link"><a href="/#a-propos">About</a></p>
                        <p className="footer-link"><a href="/portfolio">Portfolio</a></p>
                        <p className="footer-link"><a href="/javareact">React dev</a></p>
                        <p className="footer-link"><a href="/form">Contact</a></p>
                    </div>
                    <div className="footer-bio">
                        <h3 style={{ letterSpacing: "1px", marginBottom: "25px" }}>Benjamin H. Dean</h3>
                        <p>I am Web/UI/UX Visual Designer. I have the knowledge, skills and passion for Design and Development, on apps, E-commerce sites & showcases, design of user interfaces for apps and sites, mobile-first projects.</ p>
                        <p>I have 15 years of experience in visual design/dev of creative websites, user interfaces and applications. I have worked in international digital marketing teams, R&D teams and UX teams.</p>
                        <p>I am constantly expanding my development knowledge with UX by collaborating effectively with integrators and developers as well as Marketing teams.</p>
                    </div>
                    <div>
                        <div className="two-icons">
                            <a href="mailto:benjamin_h_dean@yahoo.com"><img src={mailto2} alt="Mail to contact" height="" width="" className="social-icon" /></a>
                            <a href="https://www.linkedin.com/in/benjamin-hudson-dean/" target="_blank"><img src={linkedin2} alt="LinkedIn" height="" width="" className="social-icon" /></a>
                            <a href="https://github.com/bdean05" target="_blank"><img src={github2} alt="GitHub" height="" width="" className="social-icon" /></a>
                            <a href="https://twitter.com/benjamin_h_dean" target="_blank"><img src={twitter2} alt="Twitter" height="" width="" className="social-icon" /></a>
                        </div>

                        <div >
                            <p className="footer-link"><a href="mailto:benjamin_h_dean@yahoo.com" style={{ padding: "0px 0px 0px 20px" }}>E-mail: benjamin_h_dean@yahoo.com</a></p>
                            <p className="contacting">Mobile: (+33) 6 14 31 73 56</p>
                            <p className="contacting">Paris, France</p>
                        </div>

                    </div>
                </div>
                <p className="copyright">2022 &copy; Template by Benjamin H. Dean</p>
            </section>
        </div >
    )
}


export default Footer