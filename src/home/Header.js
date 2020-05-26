import React from 'react';
import logo from '../logo.svg';

export default function Header({titulo = 'Loja Virtual'}) {
  return (
    <header>
      <img src={logo} alt="logo do site"/>
      <h1>{titulo}</h1>
    </header>
  );
}

