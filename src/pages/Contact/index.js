import React from 'react';

import HeaderSection from '../../components/HeaderSection';
import { Section, Container, Form } from './styles';

import imagem from '../../assets/contact.svg';

export default function Contact() {
  return (
    <Section>
      <HeaderSection>
        <h1>Contato</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeaderSection>
      <Container>
        <div>
          <img src={imagem} alt="Contact" />
        </div>
        <Form>
          <input name="name" type="text" placeholder="Qual seu nome? :)" />
          <input
            name="email"
            type="email"
            placeholder="Diz para a gente o seu melhor email!"
          />
          <input
            name="email"
            type="tel"
            placeholder="Seu telefone (prometemos não passar trote)"
          />
          <textarea placeholder="Conta para a gente um pouco do que precisa" />

          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </Section>
  );
}
