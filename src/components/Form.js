import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import twitter from '../assets/social-network-icon_twitter.png'
import linkedin from '../assets/social-network-icon_linkedin.png'
import github from '../assets/social-network-icon_github.png'


export default function ContactUs() {


    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    // const [notif, setNotif] = useState("")



    function sendEmail(e) {
        e.preventDefault();
        setLoading(true)

        console.log(e.target)

        emailjs.sendForm('service_pz4j1s4', 'template_o5d10ee', e.target, 'user_YeWhLIZG6yUlR181HtQdM')
            .then((result) => {
                if (result) {
                    alert("Your message was sent!");
                    //setNotif("Your message was sent!")
                    //<label style={{ display: "none" }}>{notif}</label>
                }
            }, (error) => {
                alert("Your message failed.");
            }).finally(() => {
                // finally est l'étape finale d'une promesse en JS. Cette fonction est exécutée à la fin quoiqu'il arrive. Erreur ou pas erreur
                // une fois que le mail est envoyé, on remet le loading à false
                // comme ça le bouton redevient actif
                setLoading(false)
                // on vide ensuite tout les states
                setName("")
                setEmail("")
                setMessage("")

            })
    }

    return (
        <div>

            <div className="slider2"></div>

            <div className="three-columns">
                <div className="contact-prez" >
                    <h2 style={{ marginBottom: "28px" }}>DEAN DESIGN</h2>
                    <h3>Benjamin H. Dean</h3>
                    <p>Web/UI/UX Visual Designer</p>
                </div>
                <div className="contact-text">
                    <p style={{ lineHeight: "28px", marginTop: "5px" }}>Vous souhaitez concevoir, créer, refondre, développer et optimiser les parcours utilisateurs, l’ergonomie, l’expérience et les interfaces pour votre client ? Accédez à mes services créatifs et techniques. Contactez-moi par message ou mobile.</p>
                </div>
                <div>
                    <div className="two-icons">
                        <a href="https://www.linkedin.com/in/benjamin-hudson-dean/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" height="" width="" className="contact-social-icon" /></a>
                        <a href="https://github.com/bdean05" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" height="" width="" className="contact-social-icon" /></a>
                        <a href="https://twitter.com/benjamin_h_dean" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter" height="" width="" className="contact-social-icon" /></a>
                    </div>

                    <div >
                        <p className="contact-link"><a href="mailto:benjamin_h_dean@yahoo.com" style={{ padding: "0px 0px 0px 20px" }}>E-mail : cliquez ici (inbox)</a></p>
                        <p className="mycontact">Mob : (+33) 6 14 31 73 56</p>
                        <p className="mycontact">Paris, France</p>
                    </div>

                </div>
            </div>
            <div className="contact-form" >
                <form onSubmit={sendEmail}>
                    <div><input type="hidden" name="contact_number" /></div>
                    <div><label>Nom</label></div>
                    <div><input type="text" name="user_name" value={name} onChange={e => setName(e.target.value)} required /></div>
                    <div><label>E-mail</label></div>
                    <div><input type="email" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required /></div>
                    <div><label>Message</label></div>
                    <div><textarea name="message" value={message} onChange={e => setMessage(e.target.value)} required /></div>
                    <div><input type="submit" value="Envoyer" disabled={loading === true} /></div>
                </form>
                <div className="extra-contact-box">
                    <p>Mob : (+33) 6 14 31 73 56</p>
                    <p>Paris, France</p>
                </div>
            </div>
        </div>
    );
}