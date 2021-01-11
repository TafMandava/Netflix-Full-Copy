import React from 'react';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from './containers/footer';
import { Container } from './components/jumbotron/styles/jumbotron';

export default function App() {
  return (
        <>
          <JumbotronContainer />
          <FooterContainer />
        </>
  );
}