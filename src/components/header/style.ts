import styled from "styled-components";
import theme from "@/styles/theme";

export const Header = styled.header`
  height: 15vh;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  padding: 0 10rem;
  justify-content: space-between;

  border-bottom: 0.1rem solid #101013;
  background-color: ${theme.primaryColor};
  color: white;

  label{
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding: 0 2rem;

    label {
      display: block;
    }
  }

  input {
    display: none;

    &:checked ~ label .burger-menu {
      transition: 0.5s;
      

      span {
        background-color: transparent;
        width: 1px;
        transition: 0.5s;
        

        &::before {
          transition: 1s;
          transform: rotate(45deg);
          top: 22px;
        }

        &::after {
          transition: 1s;
          transform: rotate(-45deg);
          top: 22px;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  font-size: 2.2rem;

  p {
    color: ${theme.textColor};
    margin-right: 0.6rem;
  }

  span {
    background: ${theme.blueVariant};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 3rem;

  list-style: none;

  li {
    font-size: 1.8rem;

    a {
      text-decoration: none;
      color: ${theme.textColor};
      position: relative;

      &:hover {
        color: #fff;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -0.2rem;
        left: 0;
        right: 0;
        height: 0.1rem;
        background: linear-gradient(to right, #101013, ${theme.blueVariant});
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.4s ease-out;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuHamburguer = styled.div`
  transition: 0.5s;
  display: none;

  width: 5rem;
  height: 5rem;

  cursor: pointer;

  position: relative;

  align-items: center;

  span {
    transition: 1s;
    height: 0.1rem;
    width: 5rem;
    background-color: white;
    

    &::before,
    &::after {
      transition: 1s;
      background-color: white;
      content: "";
      display: block;
      width: 100%;
      height: 0.1rem;
      
      position: absolute;
    }

    &::before {
      top: 1rem;
    }

    &::after {
      bottom: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const ModalMenu = styled.div`

  height: calc(100vh - 15vh);
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  background-color: ${theme.secondaryColor};

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    list-style: none;

    text-align: center;

    li {
      font-size: 2.4rem;

      a {
        text-decoration: none;
        color: ${theme.textColor};
      }
    }
  }
transform: translateX(0);

`;
