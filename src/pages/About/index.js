import React from 'react';

import HeaderSection from '../../components/HeaderSection';
import { Section, Container } from './styles';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

import about from '../../assets/about.svg';

export default function About() {
  return (
    <Section id="about">
      <HeaderSection>
        <h1>Sobre nós</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeaderSection>
      <Container>
        <img src={about} alt="Sobre" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ul>
            <li>
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
            <li>
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
