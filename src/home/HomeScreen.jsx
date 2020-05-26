import React, { useState } from 'react';
import Header from './Header';
import TextoSite from './TextoSite';
import Footer from './Footer';
import './HomeScreen.css';
import Paginacao from './Paginacao';

function HomeScreen() {

  //Quantidade de Categorias por Pagina
  const itensPagina = 4;
  const PaginatonLength = require('./CategoriaItens.json').length;

  return (
    <>
      <Header />
      <section>
        <article>
          <TextoSite />
        </article>
          <Paginacao itensTotal={PaginatonLength} itemPage={itensPagina} />
       
      </section>
      <Footer />
    </>
  )
}

export default HomeScreen;