import React from 'react';
import { Chart } from 'react-google-charts';
import './Jovens.css'; // Certifique-se de ajustar o caminho do seu CSS se necessário

// Dados dos distritos e valores de população preta e parda com cores personalizadas
const data = [
  ['Distrito', 'População Preta e Parda', { role: 'style' }],
  ['Santana', 14.5, 'color: green'], // Verde
  ['Tucuruvi', 19.3, 'color: green'], // Laranja
  ['Vila Guilherme', 22.0, 'color: green'], // Amarelo
  ['Mandaqui', 24.3, 'color: green'], // Vermelho Laranja
  ['Casa Verde', 29.1, 'color: green'], // Azul
  ['Freguesia do Ó', 29.9, 'color: #3F51B5'], // Roxo
  ['Pirituba', 31.3, 'color: #3F51B5'], // Azul Escuro
  ['Limão', 32.8, 'color: #3F51B5'], // Azul Claro
  ['Vila Medeiros', 34.0, 'color: #3F51B5'], // Verde Claro
  ['Vila Maria', 34.0, 'color: #3F51B5'], // Amarelo Claro
  ['Jaçanã', 35.8, 'color: #3F51B5'], // Rosa
  ['Tremembé', 39.7, 'color: #3F51B5'], // Cinza
  ['Cachoeirinha', 43.3, 'color: red'], // Verde Oliva
  ['Jaraguá', 47.3, 'color: red'], // Vermelho Laranja
  ['Perus', 48.8, 'color: red'], // Vermelho
  ['Anhangüera', 50.3, 'color: red'], // Verde Água
  ['Brasilândia', 50.6, 'color: red'] // Marrom
];

const options = {
  title: 'Distribuição da População Preta e Parda - ZN',
  chartArea: { width: '60%' },
  hAxis: {
    title: 'População Preta e Parda (%)',
    minValue: 0,
  },
  vAxis: {
    title: 'Distrito',
    textStyle: {
      fontSize: 12,
    },
    titleTextStyle: {
      fontSize: 14,
    }
  },
  legend: { position: 'none' }, // Remove a legenda
};

const Jovens = () => {
  return (
    <div id="chart_div2">
      <Chart
        chartType="BarChart"
        width="100%"
        height="600px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Jovens;
