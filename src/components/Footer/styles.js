import styled from 'styled-components';

export const FooterContainer = styled.footer``;

export const ContainerTop = styled.div`
  padding: 4rem 8rem;
  background: #1c1c1c;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  color: #fff;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 40px;
  }
  span {
    font-weight: 600;
    cursor: pointer;
  }
`;

export const LinksIcons = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 0.04fr);
  margin-top: 40px;
  margin-bottom: 15px;
  justify-content: flex-end;

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

export const ContainerBottom = styled.div`
  background-color: #2c2c2c;
  color: #959595;
  padding: 18px;
  font-size: 11px;
  text-align: center;
`;
