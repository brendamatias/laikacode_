import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  ContainerTop,
  LinksIcons,
  MenuLinks,
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
        <div>
          <img src={logo} alt="LaikaCode" />
          <LinksIcons>
            <li>
              <a>
                <FaGithub />
              </a>
            </li>
            <li>
              <a>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a>
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a>
                <FaInstagram />
              </a>
            </li>
          </LinksIcons>
          <span>hello@laikacode</span>
        </div>
        <MenuLinks>
          <li>
            <Link to="/">Services</Link>
            <ul>
              <li>Lorem ipsum</li>
              <li>Ipsum dummy</li>
              <li>Dummy text</li>
              <li>Text</li>
            </ul>
          </li>
          <li>
            <Link to="/">About</Link>
            <ul>
              <li>Lorem ipsum</li>
              <li>Ipsum dummy</li>
              <li>Dummy text</li>
              <li>Text</li>
            </ul>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
            <ul>
              <li>Lorem ipsum</li>
              <li>Ipsum dummy</li>
              <li>Dummy text</li>
              <li>Text</li>
            </ul>
          </li>
          <li>
            <Link to="/">Contact</Link>
            <ul>
              <li>Lorem ipsum</li>
              <li>Ipsum dummy</li>
              <li>Dummy text</li>
            </ul>
          </li>
          <li>
            <Link to="/">Blog</Link>
            <ul>
              <li>Lorem ipsum</li>
              <li>Ipsum dummy</li>
            </ul>
          </li>
        </MenuLinks>
      </ContainerTop>
      <ContainerBottom>
        <span>© 2019 LaikaCode. Todos os Direitos Reservados.</span>
      </ContainerBottom>
    </FooterContainer>
  );
}
