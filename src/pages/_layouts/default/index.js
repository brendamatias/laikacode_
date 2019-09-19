import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
