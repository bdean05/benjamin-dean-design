// Burger.js
import React from 'react';
import { StyledBurger } from './Burger.styled';


// Burger est un composant qui reçoit le state open et setOpen, en fonction de cette variable le burger change de forme
const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

export default Burger;