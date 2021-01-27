// Menu.js
import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/" >Accueil</a>
            <a href="/panier" >À propos</a>
            <a href="/gallery" >Portfolio</a>
            <a href="/messagerie" >Contact</a>
        </StyledMenu>
    )
}
export default Menu;