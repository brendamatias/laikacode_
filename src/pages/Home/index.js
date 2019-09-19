import React from 'react';

import { MdExpandMore } from 'react-icons/md';
import { Container } from './styles';

import intro from '../../assets/home.svg';

export default function Home() {
  return (
    <Container>
      <div>
        <h1>
          <span>Lorem Ipsum is simply</span> dummy text of the printing.
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button type="button">
          <MdExpandMore size={36} color="#000" />
        </button>
      </div>
      <img src={intro} />
    </Container>
  );
}
