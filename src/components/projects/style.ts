import styled from "styled-components"
import theme from '@/styles/theme';

export const Container = styled.div`

height: 100vh;
padding: 12rem 0rem 0;
background: ${theme.primaryColor};
display: flex;
flex-direction: column;
gap: 6rem;


h1 {
    color: ${theme.blueVariant};
    font-weight: 500;
    margin-bottom: 6rem;
    font-size: 3rem;
    text-align: center;

    span {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 768px) {
    height:  50rem;
    padding: 12rem 0 0 0;
    
  }
`;

export const ContainerSwiper = styled.div`

`

export const Project = styled.div`
height: 20rem;
width: 35rem;

transition: 0.5s;

display: flex;
align-items: center;
justify-content: center;

background-color: ${theme.secondaryColor};
border: 0.2rem solid #101013;
    border-radius: 0.4rem;

    &:hover {
      transition: 0.5s;
      border: 0.1rem solid ${theme.blueVariant};
    }

span{
  font-size: 2.4rem;
  color: white;
}

@media screen and (max-width: 768px) {
  width: 30rem;

    
  }
`