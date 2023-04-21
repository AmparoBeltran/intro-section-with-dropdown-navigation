import styled from "styled-components";

export const NavStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  nav {
    gap: 55em;
    display: flex;
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 3em;
  }

  .dropbtn {
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-target {
    display: flex;
    align-items: center;
  }

  .dropdown-content {
    border-radius: 5px;

    display: none;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.almostWhite};
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-link {
    display: flex;
    align-items: center;
  }

  .dropdown-content a {
    font-size: 0.9em;
    color: ${({ theme }) => theme.colors.mediumGray};
    padding: 1em;
    text-decoration: none;
    display: block;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropdown-target img {
    transform: rotate(180deg);
  }

  img.icon {
    width: 15px;
    height: 15px;
    margin-left: 10px;
  }

  .dropdown-content :hover {
    background-color: yellowgreen;
  }

  .login {
    display: flex;
    gap: 2em;
  }
  .register {
    border: 1px solid ${({ theme }) => theme.colors.almostBlack};
    border-radius: 10px;
    padding: 0.5em 1em;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.mediumGray};
  }

  .icon-menu {
    display: none;
  }

  .icon-close-menu {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: absolute;
    width: calc(100% - 1em);
    top: 1em;
    bottom: 0;
    left: 1em;
    justify-content: space-between;
    align-items: flex-start;
    nav {
      display: none;
      &.open {
        display: flex;
        flex-direction: column;
        background-color: ${({ theme }) => theme.colors.almostWhite};
        gap: 5em;
        position: relative;
        padding: 1em;
        height: 100%;
        z-index: 1;
        width: 60vw;
      }

      .menu {
        display: flex;
        flex-direction: column;
        gap: 2em;
        align-items: flex-start;
        padding-left: 1em;
      }

      .login {
        display: flex;
        flex-direction: column;
        gap: 2em;
      }

      .dropdown-content {
        box-shadow: none;
        position: relative;
        padding-left: 1em;

        & > a {
          padding-bottom: 0;
        }
      }

      .dropbtn {
        padding-left: 0;
      }
    }

    .icon-menu {
      display: block;
    }

    .icon-close-menu {
      display: flex;
      align-self: flex-end;
    }
  }
`;
