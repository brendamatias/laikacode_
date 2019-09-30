import styled from 'styled-components';
import background from '../../assets/home.svg';

export const HeaderContainer = styled.header`
  font-family: 'Raleway', sans-serif;
  height: 100%;
  background: url(${background}) no-repeat right bottom;
  background-size: 60%;
  background-color: #f5f8fd;

  .fixed {
    background: #f6494d;
    transition: background 0.3s;
    z-index: 1;

    li {
      a {
        color: #fff;
        &:hover {
          color: #000;
        }
      }
    }
  }
`;

export const ContainerTop = styled.div`
  padding: 1rem 8rem;
  position: fixed;
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;

    li {
      a {
        padding: 0.25rem 0.75rem 0.25rem 0.75rem;
        color: #393939;
        font-size: 14px;
        font-weight: 600;
        &:hover {
          color: #f6494d;
        }
      }
    }
  }

  @media (max-width: 700px) {
    padding: 1rem 0;

    img {
      width: 30%;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      ul {
        display: flex;
        flex-direction: column;
        background: #fff;

        li {
          margin: 5px 0;
        }
      }
    }
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  div {
    padding-left: 12%;
    max-width: 50%;

    h1 {
      color: #393939;
      span {
        color: #f6494d;
      }
    }

    p {
      color: #626262;
    }

    button {
      border: 0;
      background: none;

      &:hover {
        transform: translateY(-5px);
        transition: all 0.2s;
        svg path {
          fill: #f6494d;
        }
      }
    }
  }
  @media (min-width: 37em) {
  } /* 592px */
  @media (min-width: 41em) {
  } /* 656px */
  @media (min-width: 47em) {
  } /* 752px */
  @media (min-width: 68em) {
    /* 1088px */
  }

  @media (min-width: 82em) {
    /* 1312px */

    div {
      h1 {
        font: 700 2rem/2.5rem 'Raleway', sans-serif;
        margin-bottom: 0.6rem;
      }

      p {
        font: 400 1rem/1.5rem 'Raleway', sans-serif;
        margin-bottom: 0.6rem;
      }
    }
  }

  @media (min-width: 100em) {
    /* 1600px */
    padding-top: -94px;

    div {
      h1 {
        font: 700 3rem/3.5rem 'Raleway', sans-serif;
        line-height: 3.5rem;
        margin-bottom: 1.125rem;
      }

      p {
        font: 400 1rem/1.5rem 'Raleway', sans-serif;
        margin-bottom: 1.875rem;
      }
    }
  }
`;
