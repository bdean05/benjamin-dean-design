import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import webWords from '../assets/web-words.png'


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


            <div className="blocks">
                <div className="block">
                    <p>Vous souhaitez concevoir, créer, refondre, développer et optimiser les parcours utilisateurs, l’ergonomie, l’expérience et les interfaces pour votre client ? Accédez à mes services créatifs et techniques. N'hésitez pas à télécharger mon CV et mon portfolio.</p>
                </div>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                <div><input type="hidden" name="contact_number" /></div>
                <div><label>Name</label></div>
                <div><input type="text" name="user_name" value={name} onChange={e => setName(e.target.value)} required /></div>
                <div><label>Email</label></div>
                <div><input type="email" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required /></div>
                <div><label>Message</label></div>
                <div><textarea name="message" value={message} onChange={e => setMessage(e.target.value)} required /></div>
                <div><input type="submit" value="Send" disabled={loading === true} /></div>
            </form>

        </div>
    );
}