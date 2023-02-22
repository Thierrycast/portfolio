import styled from "styled-components";
import theme from '@/styles/theme';

export const ContainerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10rem;
  width: 100%;

  height: 100vh;

  background-color: ${theme.primaryColor};

  @media screen and (max-width: 768px) {
    padding: 0 4rem;

    .devicon {
      display: none;
    }
  }
`;

export const FirstSectionAside = styled.div`
  width: 60rem;
  height: 40rem;

  margin-top: 8rem;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 2.2rem;
    color: #fff;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 7.2rem;
    background: linear-gradient(to right, #413aff, #1590e8);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-style: normal;
    font-weight: 300;
    font-size: 2.2rem;
    color: #fff;
  }

  button {
    transition: 0.8s;

    margin-top: 2rem;
    font-size: 1.8rem;
    font-weight: 400;

    color: #fff;
    background: #313aff;

    backdrop-filter: blur(1rem);
    padding: 2rem 3.2rem;
    width: 25rem;
    border-radius: 0.4rem;

    &:hover {
      transition: 0.8s;
      width: 27rem;
    }
  }
`;

export const SocialMedias = styled.div`
  margin-top: 3rem;

  display: flex;
  gap: 3rem;

  height: 7rem;

  img {
    cursor: pointer;
    transition: 0.8s;
    width: 5rem;
    height: 5rem;
    background-color: #413aff;
    padding: 0.1rem;
    border-radius: 50%;

    &:hover {
      transition: 0.8s;

      scale: 1.1;
    }
  }
`;

export const DevIcon = styled.div`
  margin-top: 6rem;

  width: 30rem;
  height: 30rem;

  display: block;
`;
