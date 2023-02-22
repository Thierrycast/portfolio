import styled from "styled-components";
import theme from '@/styles/theme';

export const Container = styled.div`
background-color: ${theme.primaryColor};
padding: 9rem 0 0 0;
height: 100vh;


`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 6rem 10rem 12rem;

  width: 100%;
  height: 100%;

  background: ${theme.secondaryColor};
  color: white;
 

  h1 {
    color: #3554f9;
    font-weight: 500;
    margin-bottom: 6rem;
    font-size: 2rem;

    span {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 768px) {
   padding: 6rem 2rem;

  }
`;

export const Technologies = styled.div`
  height: 200rem;
  width: 100%;
  gap: 10rem;

  display: flex;
  align-items: center;
  
  flex-wrap: wrap;

  div {
    transition: 1s;

    width: 10rem;
    height: 10rem;
    padding: 1rem 1rem 0rem;
    border-radius: 1rem;

    
    text-align: center;

    img{
      width: 7rem;
    }

    span{
      font-weight: 500;
      font-size: 1.6rem;
      color: ${theme.textColor};
    }

    &:hover{
      transition: 0.5s;
      scale: 1.05;
    }
  }

  @media screen and (max-width: 768px) {
   gap: 2rem;

  }
`;
