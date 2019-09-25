import React from 'react';

import HeaderSection from '../../components/HeaderSection';
import { Section, Container, Form, Input } from './styles';

import imagem from '../../assets/contact.png';

export default function Contact() {
  return (
    <Section>
      <HeaderSection>
        <h1>Contact</h1>
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
            <input name="name" type="text" placeholder="Name"/>
            <input name="email" type="email" placeholder="E-mail"/>
            <input name="email" type="tel" placeholder="Telephone" />
            <textarea placeholder="Your message" />

            <button type="submit">Sign in</button>
          </Form>
      </Container>
    </Section>
  );
}
