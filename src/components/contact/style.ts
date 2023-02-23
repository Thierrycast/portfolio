import styled from "styled-components";
import theme from "@/styles/theme";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh);
  background: ${theme.primaryColor};
  color: white;
  padding: 12rem 10rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    color: ${theme.blueVariant};
    margin-bottom: 4rem;
    font-size: 3rem;
    font-weight: 500;

    span {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
    justify-content: center;

    h1 {
      text-align: center;
    }
  }
`;

export const Wrap = styled.div`
  height: 50rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const SendEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 50rem;
  height: 43rem;
  background-color: ${theme.secondaryColor};
  border: 0.1rem solid #101013;
  border-radius: 0.4rem;
  padding: 2.5rem;
  transition: 0.5s;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  input,
  textarea {
    background-color: ${theme.primaryColor};
    border: 0.1rem solid #101013;
    border-radius: 0.4rem;
    padding: 0.8rem;
  }

  input {
    height: 4rem;
  }

  textarea {
    width: 100%;
    height: 16rem;
  }

  .name {
    display: flex;
    justify-content: space-between;

    input {
      width: 22rem;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      gap: 3rem;

      input {
        width: 100%;
      }
    }
  }

  button {
    width: 22rem;
    height: 4rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: #fff;
    background: ${theme.blueVariant};
    border: none;
    border-radius: 0.4rem;
    margin-top: 2rem;
    backdrop-filter: blur(1rem);
    transition: 0.8s;

    &:hover {
      width: 24rem;
      transition: 0.8s;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 6rem;

      &:hover {
        width: 100%;
      }
    }
  }

  &:hover {
    border: 0.1rem solid ${theme.blueVariant};
    transition: 0.5s;
  }
`;

export const SocialMedias = styled.div`
  width: 40rem;
  height: 36rem;

  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  flex-wrap: wrap;

  div {
    transition: 0.5s;

    height: 12rem;
    width: 12rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0.1rem solid #101013;
    border-radius: 1rem;

    padding: 3rem;

    

    &:hover {
      transition: 0.5s;
      border: 0.1rem solid ${theme.blueVariant};
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-wrap: nowrap;
    gap: 2rem;
    padding: 0;

    div {
      height: 7rem;
      width: 7rem;

      padding: 1.5rem;

      border: 0.1rem solid ${theme.blueVariant};
    }
  }
`;

export const ImageComponent = styled(Image)`
  
`;
