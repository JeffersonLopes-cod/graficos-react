// GridComponent.jsx
import React from 'react';
import './Salarial.css'; // Inclua o CSS específico para este componente

const Salarial = () => {
  return (
    <div className="container">
      <div className="tit-salarial">
        <h1>Título Salarial</h1>
        {/* Adicione o conteúdo para a área tit-salarial */}
      </div>
      <div className="grafico">
        <p>Conteúdo do gráfico centralizado</p>
        {/* Adicione o gráfico ou outro conteúdo para a área grafico */}
      </div>
      <div className="explanes">
        <p>Explicações</p>
        {/* Adicione o conteúdo para a área explanes */}
      </div>
    </div>
  );
};

export default Salarial;
