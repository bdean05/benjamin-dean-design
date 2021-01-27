import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  z-index:999;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media screen and (min-width: 10px) and (max-width: (660)px) {
    display: block;
 }

 @media screen and (min-width: 660px) {
    display: none; 
}

 @media only screen and (device-width : 375px)
  and (device-height : 812px) 
  and (-webkit-device-pixel-ratio : 3) {
  }








 
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }



`;