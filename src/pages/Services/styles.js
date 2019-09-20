import styled from 'styled-components';

export const Section = styled.div`
  margin: auto;
  padding: 100px 0;
  background: #ecf5ff;
  box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.1);

  header,
  div {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 0.4fr);
  grid-gap: 60px;
  justify-content: center;
`;

export const ServiceItem = styled.div`
  padding: 40px 30px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 10px 40px 10px;
  background: #fff;
  box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;

  h5 {
    color: #999;
    font-size: 1.3125em;
    font-weight: bold;
    color: #1a1a1a;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color: #444444;
  }
`;

export const Icon = styled.div`
  svg {
    font-size: 36px;
  }
`;
