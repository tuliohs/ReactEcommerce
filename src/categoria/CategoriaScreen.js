import React from 'react';

import {
  useHistory,
  useParams
} from 'react-router-dom';

import Header from '../home/Header';
import Footer from  '../home/Footer';

import './CategoriaScreen.css';


const categorias = [
  {nome: "Categoria 1", ativa: true},
  {nome: "Categoria 2", ativa: true},
  {nome: "Categoria 3", ativa: true},
  {nome: "Categoria 4", ativa: true},
]

const produtos = [
  {nome: 'Produto 1', descricao: 'Descrição do produto 1', imagem: '[Imagem do produto]'},
  {nome: 'Produto 2', descricao: 'Descrição do produto 2', imagem: '[Imagem do produto]'},
  {nome: 'Produto 3', descricao: 'Descrição do produto 3', imagem: '[Imagem do produto]'},
  {nome: 'Produto 4', descricao: 'Descrição do produto 4', imagem: '[Imagem do produto]'},
]


export default function CategoriaScreen() {
  const history = useHistory();
  const {id} = useParams()

  return (
    <>
      <Header titulo={`Categoria  ${id}`}/>
      <nav>
        <button onClick={() => history.push('/carrinho')}>Ver Carrinho de Compras</button>
      </nav>
      <section>
        <nav>
          <ul>
            {
              categorias.map(cat => (
                <li>{cat.nome}</li>
              ))
            }
          </ul>
        </nav>
        
        {/* TABELA DE PRODUTOS */}
        <aside>
          <table>
            <caption>Produtos da categoria</caption>
            <thead>
              <tr>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
              {
                produtos.map(prod => (
                  <tr>
                    <td>{prod.imagem}</td>
                    <td>
                      <p>{prod.nome}</p>
                      <p>{prod.descricao}</p>
                    </td>
                    <td>[Preço]</td>
                    <td>[Comprar]</td>
                  </tr>

                ))

              }
            </tbody>


          </table>
        </aside>
      </section>
      <Footer />
    </>
  )
}