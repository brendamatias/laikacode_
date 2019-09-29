import React, { useEffect, useState } from 'react';

import { a } from 'react-router-dom';
import { HeaderContainer, ContainerTop, ContainerBottom } from './styles';
import { MdExpandMore } from 'react-icons/md';

import logo from '../../assets/logo.svg';
import logowhite from '../../assets/logo-white.svg';

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const scrollCallBack = window.addEventListener('scroll', () => {
      setScroll(window.pageYOffset);
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  return (
    <HeaderContainer>
      <ContainerTop className={scroll > 100 ? 'fixed' : ''}>
        <div>
          <img src={scroll > 100 ? logowhite : logo} alt="LaikaCode" />
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#portfolio">Portfólio</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
      </ContainerTop>
      <ContainerBottom>
        <div>
          <h1>
            <span>Lorem Ipsum is simply</span> dummy text of the printing.
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button type="button">
            <MdExpandMore size={36} color="#000" />
          </button>
        </div>
      </ContainerBottom>
    </HeaderContainer>
  );
}
