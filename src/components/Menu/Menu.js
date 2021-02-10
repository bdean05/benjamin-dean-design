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
            <a href="/#a-propos" style={{ marginTop: "-20px" }}>À propos</a>
            <a href="/portfolio" style={{ marginTop: "-20px" }}>Portfolio</a>
            <a href="/form" style={{ marginTop: "-20px" }}>Contact</a>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
                <a href="https://www.linkedin.com/in/benjamin-hudson-dean/" target="_blank"><img src={linkedinjpg} alt="LinkedIn" height="" width="30" style={{ padding: "0px 18px 0px 0px" }} /></a>
                <a href="https://github.com/bdean05" target="_blank"><img src={githubjpg} alt="GitHub" height="" width="30" style={{ padding: "0px 18px 0px 18px" }} /></a>
                <a href="https://twitter.com/benjamin_h_dean" target="_blank"><img src={twitterjpg} alt="Twitter" height="" width="30" style={{ padding: "0px 0px 0px 18px" }} /></a>
            </div>
        </StyledMenu >
    )
}
export default Menu;