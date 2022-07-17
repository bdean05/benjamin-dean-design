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
    // attribut success = true alors la box doit apparaître en vert | success = false alors la box en rouge
    // on stocke le texte du message à afficher dans la box
    const [notif, setNotif] = useState({
        success: true,
        message: null
    })



    function sendEmail(e) {
        e.preventDefault();
        setLoading(true)

        // console.log(e.target)

        emailjs.sendForm('service_pz4j1s4', 'template_o5d10ee', e.target, 'user_YeWhLIZG6yUlR181HtQdM')
            .then((result) => {
                if (result) {
                    //alert("Votre message est envoyé !");
                    setNotif({ success: true, message: "Your meassage is sent!" })
                }
            }, (error) => {
                //alert("Votre message n'est pas parti. Veuillez réessayer...");
                setNotif({ success: false, message: "Your message was not sent. Please try again..." })

            }).finally(() => {
                // finally est l'étape finale d'une promesse en JS. Cette fonction est exécutée à la fin quoiqu'il arrive. Erreur ou pas erreur
                // une fois que le mail est envoyé, on remet le loading à false
                // comme ça le bouton redevient actif
                setLoading(false)
                // on vide ensuite tout les states
                setName("")
                setEmail("")
                setMessage("")
                setTimeout(() => {
                    setNotif({ message: null })
                }, 5000)
            })
    }

    return (
        <div>

            <div className="slider-contact"></div>

            <div className="three-columns">
                <div className="contact-pres">
                    <h2 style={{ marginBottom: "28px" }}>DEAN DESIGN</h2>
                    <h3>Benjamin H. Dean</h3>
                    <p>Web/UI/UX Visual Designer</p>                </div>
                <div className="contact-text">
                    <p style={{ lineHeight: "28px", marginTop: "5px" }}>Do you want to design, create, redesign, develop and optimize user journeys, ergonomics, experience and interfaces for your client? Access my creative and technical services. Contact me by message or by mobile.</p>
                </div>
                <div>
                    <div className="two-icons">
                        <a href="https://www.linkedin.com/in/benjamin-hudson-dean/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" height="" width="" className="contact-social-icon" /></a>
                        <a href="https://github.com/bdean05" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" height="" width="" className="contact-social-icon" /></a>
                        <a href="https://twitter.com/benjamin_h_dean" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter" height="" width="" className="contact-social-icon" /></a>
                    </div>

                    <div style={{ marginTop: "-10px" }}>
                        <p className="contact-link"><a href="mailto:benjamin_h_dean@yahoo.com" style={{ padding: "0px 0px 0px 20px" }}>E-mail: click here (inbox)</a></p>
                        <p className="mycontact">Mobile: (+33) 6 14 31 73 56</p>
                        <p className="mycontact">Paris, France</p>
                    </div>

                </div>
            </div>
            <div className="contact-form" >
                <form onSubmit={sendEmail}>
                    <div><input type="hidden" name="contact_number" /></div>
                    <div><label>Name</label></div>
                    <div><input type="text" name="user_name" value={name} onChange={e => setName(e.target.value)} required /></div>
                    <div><label>E-mail</label></div>
                    <div><input type="email" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required /></div>
                    <div><label>Message</label></div>
                    <div><textarea name="message" value={message} onChange={e => setMessage(e.target.value)} required /></div>
                    <div><input type="submit" value="Send" className="button" disabled={loading === true} /></div>
                    {/* Si le message n'est pas null alors on affiche la div avec la valeur du message */}
                    {/* le className est égal à: 1) notif-success si l'attribut success est true | 2) notif-error sinon . A se souvenir : ?=si, :=sinon (opérateur Terner(Ternary), en javascript)*/}
                    {notif.message !== null && <div className={notif.success === true ? "notif-success" : "notif-error"}>{notif.message}</div>}
                </form>
                <div className="extra-contact-box">
                    <p>Mobile: (+33) 6 14 31 73 56</p>
                    <p>Paris, France</p>
                </div>
            </div>
        </div>
    );
}