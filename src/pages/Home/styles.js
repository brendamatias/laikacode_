import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 90.52px);
  display: flex;
  align-items: center;

  img {
    width: 60%;
  }

  h1 {
    color: #393939;
    font: 700 3rem/3.5rem 'Raleway', sans-serif;
    line-height: 3.5rem;
    margin-bottom: 1.125rem;
    span {
      color: #f6494d;
    }
  }

  p {
    font: 400 1rem/1.5rem 'Raleway', sans-serif;
    margin-bottom: 1.875rem;
    color: #626262;
  }

  button {
    border: 0;
    background: none;

    &:hover {
      transform: translateY(-5px);
      transition: all 0.2s;
    }
  }
`;
