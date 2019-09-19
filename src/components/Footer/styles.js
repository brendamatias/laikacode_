import styled from 'styled-components';
import { darken } from 'polished';

export const FooterContainer = styled.footer``;

export const ContainerTop = styled.div`
  padding: 4rem 8rem;
  background: #1c1c1c;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  color: #fff;

  span {
    font-weight: 600;
    color: #f6494d;
    cursor: pointer;
  }
`;

export const LinksIcons = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 0.06fr);
  margin-top: 40px;
  margin-bottom: 15px;

  li {
    a {
      font-size: 20px;
      color: #fff;
      cursor: pointer;

      &:hover {
        transition: all 0.2s;
        color: #f6494d;
      }
    }
  }
`;

export const MenuLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

  li {
    ul li {
      margin: 10px 0;
    }
    a {
      letter-spacing: 0.2rem;
      font-size: 12px;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;

export const ContainerBottom = styled.div`
  background-color: #2c2c2c;
  color: #959595;
  padding: 18px;
  font-size: 11px;
  text-align: center;
`;
