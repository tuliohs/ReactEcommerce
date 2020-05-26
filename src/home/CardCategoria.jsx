import React from 'react';
import logo from '../logo.svg';


export default function CardCategoria({ nome, ativo}) {
  return (
    <div>
      <h6>{nome}</h6>
      <img src={logo} alt={nome} />
    </div>
  )
}