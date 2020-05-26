import React, { useState, useCallback } from 'react';
import Pagination from 'rc-pagination';
import Itens from './Itens';
import './HomeScreen.css';

function Paginacao({ itensTotal, itemPage }) {

  const [pagina, setPagina] = useState({ current: 1 });

  const clickChange = page => {
    console.log(page);
    setPagina({
      current: page,
    });
  };
  document.getElementsByClassName('rc-pagination-item-link').innerText = '<<';

  return (
    <div className="pagination">
      <Pagination
        onChange={clickChange}
        showTitle={false}
        showLessItems
        total={(itensTotal * 10) / itemPage} />
      <aside>
        <Itens itensPagina={itemPage} Page={pagina.current} />
      </aside>
    </div>
  );
}

export default Paginacao;