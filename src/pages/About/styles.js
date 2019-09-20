import styled from 'styled-components';

export const Section = styled.div`
  max-width: 1140px;
  margin: auto;
  padding: 100px 0;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  justify-content: center;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1rem;

  p {
    margin: 0 0 30px 0;
  }

  span {
    color: #f6494d;
    font-weight: bold;
    margin-right: 5px;
  }
`;
