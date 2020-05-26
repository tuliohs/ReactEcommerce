import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardCategoria from './CardCategoria';
import './HomeScreen.css';

function Itens({ itensPagina, Page }) {

    console.log(itensPagina + '  ' + Page)
    const Itens = require('./CategoriaItens.json');
    const lastIte = Page * itensPagina;
    const initItem = lastIte - itensPagina;
    return (
        Itens
            .filter(cat => cat.ativa === true && cat.id > initItem && cat.id <= lastIte)
            .map(e => (
                <Link to={`/categorias/${e.id}`}>
                    <CardCategoria
                        nome={e.nome}
                        ativo={e.ativa} />
                </Link>
            ))
    );
}

export default Itens;

/*json
            .filter(cat => cat.ativa === true && cat.id >= page.item && cat.id <= page.item + itemPage)
            .map(cat => (
                <Link to={`/categorias/${cat.id}`}>
                    <CardCategoria
                        nome={cat.nome}
                        ativo={cat.ativa}
                    />
                </Link>
            ))
            */