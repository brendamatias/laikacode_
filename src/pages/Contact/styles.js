import styled from 'styled-components';

export const Section = styled.div`
  margin: auto;
  padding: 100px 0;
  box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.1);

  header,
  div {
    max-width: 1140px;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin: 5px 0;
    border: 0;
    padding: 15px;
    font-size: 14px;
    background: #ecf5ff;
    border-radius: 4px;
  }

  input::placeholder,
  textarea::placeholder {
    font: 14px 'Open Sans', sans-serif;
  }

  textarea {
    height: 150px;
    resize: none;
  }

  button {
    margin-top: 10px;
    border-radius: 4px;
    background: #f6494d;
    border: none;
    color: #fff;
    padding: 10px 0;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  margin: 10px 0;
`;
