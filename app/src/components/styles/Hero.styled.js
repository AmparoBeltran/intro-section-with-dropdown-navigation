import styled from "styled-components";

export const HeroStyled = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  margin-top: 5em;
  width: 100%;

  .cta {
    display: flex;
    flex-direction: column;
    width: 35%;
    padding: 3em 3em 0em 3em;
    gap: 4em;

    h1 {
      font-size: 6em;
    }

    .copy {
      width: 90%;
      color: ${({ theme }) => theme.colors.mediumGray};
      line-height: 1.5em;
      font-size: 1.5em;
    }

    button {
      cursor: pointer;
      width: max-content;
      padding: 0.5em 1em;
      border-radius: 10px;
      font-size: 1.5em;
      font-weight: 800;
      color: ${({ theme }) => theme.colors.almostWhite};
      background-color: ${({ theme }) => theme.colors.almostBlack};
    }
  }

  .clients {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3em;

    img {
      height: 100%;
    }
  }

  .hero-desktop-img {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    img {
      max-height: 70vh;
    }
  }
  .hero-mobile-img {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2em;

    .hero-mobile-img {
      display: flex;

      img {
        max-height: 35vh;
      }
    }
    .desktop-img {
      display: none;
    }

    .cta {
      padding: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 2em;
      align-items: center;

      h1 {
        font-size: 1.8em;
      }
      .copy {
        width: 100%;
        text-align: center;
        font-size: 0.9em;
      }
      button {
        padding: 0.8em 1em;
        border-radius: 10px;
        font-size: 1.2em;
      }
    }
    .clients {
      img {
        transform: scale(0.7);
      }
    }
  }
`;
