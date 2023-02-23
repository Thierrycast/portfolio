import styled from "styled-components";
import theme from '@/styles/theme';

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10rem 10rem;

  width: 100%;
  height: calc(100vh);

  background-color: ${theme.primaryColor};

  div{
    padding: 4rem 16rem 8rem;

    width: 100%;
    height: auto;

    background: ${theme.secondaryColor};

    color: white;
    border: 0.2rem solid #101013;
    border-radius: 0.4rem;

    h1{
      color: ${theme.blueVariant};
      font-weight: 500;
      margin-bottom: 3rem;
    }

    p{
      font-size: 1.8rem;
      margin-bottom: 2rem;
      color: ${theme.textColor};
    }

    
  }

  @media screen and (max-width: 768px) {
padding: 1rem;

    div{
      padding: 2rem;
    }
  }
`;
