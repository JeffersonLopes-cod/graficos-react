// src/components/Resumos.js
import React from 'react';
import './Resumos.css';

// Componente de Resumo Individual
const Resumo = ({ title, content }) => (
  <div className="resumo">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

// Função para gerar o conteúdo das análises
const getAnalisePopulacao = () => {
  return [
    {
      title: 'Análise Geral',
      content: 'Os dados mostram que a distribuição da população jovem varia significativamente entre os distritos da Zona Norte de São Paulo. Os distritos com maiores populações jovens são Brasilândia e Perus, enquanto os menores são Santana e Tucuruvi.',
    },
    {
      title: 'Distritos com Alta População Jovem',
      content: 'Os distritos com maior população jovem são Brasilândia, Perus e Anhanguera. Esses distritos têm maiores proporções de jovens em comparação com outros, refletindo uma concentração maior de pessoas na faixa etária jovem.',
    },
    {
      title: 'Distritos com Menor População Jovem',
      content: 'Santana e Tucuruvi apresentam as menores porcentagens de população jovem. Isso pode indicar uma menor densidade populacional jovem nesses distritos ou uma possível migração de jovens para áreas com mais oportunidades.',
    },
    {
      title: 'Comparação Entre Distritos',
      content: 'Comparando os distritos, nota-se que há uma variação significativa na distribuição da população jovem. Distritos como Brasilândia e Perus têm porcentagens muito mais altas de jovens em comparação com Santana e Tucuruvi, indicando uma desigualdade na distribuição populacional jovem.',
    }
  ];
};

// Componente Principal de Resumos
const Resumos = () => {
  const analises = getAnalisePopulacao();

  return (
    <div className="resumos-container">
      {analises.map((analise, index) => (
        <Resumo key={index} title={analise.title} content={analise.content} />
      ))}
    </div>
  );
};

export default Resumos;
