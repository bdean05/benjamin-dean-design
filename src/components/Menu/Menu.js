// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';
import twitterjpg from '../../assets/social-network-icon_twitter.jpg'
import linkedinjpg from '../../assets/social-network-icon_linkedin.jpg'
import githubjpg from '../../assets/social-network-icon_github.jpg'
import mailtojpg from '../../assets/mail-to-contact.jpg'

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/" >Accueil</a>
            <a href="/panier" style={{ marginTop: "-10px" }}>À propos</a>
            <a href="/gallery" style={{ marginTop: "-10px" }}>Portfolio</a>
            <a href="/messagerie" style={{ marginTop: "-10px" }}>Contact</a>
            <div style={{ textAlign: "center", marginTop: "17px" }}>
                <a href="https://www.linkedin.com/in/benjamin-hudson-dean/" target="_blank"><img src={linkedinjpg} alt="LinkedIn" height="" width="34" style={{ padding: "0px 17px 0px 0px" }} /></a>
                <a href="https://github.com/bdean05" target="_blank"><img src={githubjpg} alt="GitHub" height="" width="34" style={{ padding: "0px 17px 0px 17px" }} /></a>
                <a href="https://twitter.com/benjamin_h_dean" target="_blank"><img src={twitterjpg} alt="Twitter" height="" width="34" style={{ padding: "0px 0px 0px 17px" }} /></a>
            </div>
        </StyledMenu >
    )
}
export default Menu;