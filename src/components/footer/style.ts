import styled from "styled-components";
import theme from '@/styles/theme';

export const Container = styled.footer`
display: flex;
align-items: center;
justify-content: center;
padding: 0 10rem;

height: 7rem;

background-color: ${theme.secondaryColor};

h1{
    font-size: 1.8rem;
    font-weight: 300;
    color: #d8d8d8;
}

@media screen and (max-width: 768px) {
   padding: 02rem;
   text-align: center;
  }
`