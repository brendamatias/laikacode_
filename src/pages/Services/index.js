import React from 'react';

import HeaderSection from '../../components/HeaderSection';
import { Section, Container, ServiceItem, Icon } from './styles';
import { FaDesktop, FaRegComments, FaBezierCurve } from 'react-icons/fa';

export default function Services() {
  return (
    <Section>
      <HeaderSection>
        <h1>Nossos Serviços</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </HeaderSection>
      <Container>
        <ServiceItem>
          <Icon background={'#fceef3'}>
            <FaRegComments color="#ff689b" />
          </Icon>
          <div>
            <h5>FaRegComments</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
        </ServiceItem>
        <ServiceItem>
          <Icon background={'#e6fdfc'}>
            <FaDesktop color="#3fcdc7" />
          </Icon>
          <div>
            <h5>Desenvolvimento Web</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
          </div>
        </ServiceItem>
        <ServiceItem>
          <Icon background={'#e1eeff'}>
            <FaBezierCurve color="#2282ff" />
          </Icon>
          <div>
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </ServiceItem>
        <ServiceItem>
          <Icon background={'#ecebff'}>
            <FaBezierCurve color="#8660fe" />
          </Icon>
          <div>
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </ServiceItem>
      </Container>
    </Section>
  );
}
