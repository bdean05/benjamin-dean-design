import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: top;
  background: ${({ theme }) => theme.primaryLight};
  background-color: #ffffff;
  height: 100vh;
  text-align: left;
  font-family: Helvetica, Arial, sans-serif;
  position: absolute;
  opacity: 0.8;
  top: 0;
  left: 0;
  padding-top: 14px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.1s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.2rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;