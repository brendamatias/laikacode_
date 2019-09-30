import React from 'react';

import {
  FooterContainer,
  ContainerTop,
  LinksIcons,
  Description,
  ContainerBottom,
} from './styles';

import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

import logo from '../../assets/footer.svg';

export default function Footer() {
  return (
    <FooterContainer>
      <ContainerTop>
        <Description>
          <div>
            <img src={logo} alt="LaikaCode" />
          </div>
          <div>
            <span>(81) 99862-6092</span>
            <p>hello@laikacode</p>
            <p>Recife - PE</p>
          </div>
        </Description>
        <LinksIcons>
          <li>
            <a href="https://github.com/">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <FaInstagram />
            </a>
          </li>
        </LinksIcons>
      </ContainerTop>
      <ContainerBottom>
        <span>© 2019 LaikaCode. Todos os Direitos Reservados.</span>
      </ContainerBottom>
    </FooterContainer>
  );
}
