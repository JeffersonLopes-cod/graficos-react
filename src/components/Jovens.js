import React from 'react';
import { Chart } from 'react-google-charts';

// Dados dos distritos e valores de população preta e parda com cores personalizadas
const data = [
  ['Distrito', 'População Jovem', { role: 'style' }],
  ['Cachoeirinha', 44.0, 'color: green'], 
  ['Jaraguá', 45.4, 'color: #3F51B5'], 
  ['Anhanguera', 46.5, 'color: red'], 
  ['Perus', 47.1, 'color: red'], 
  ['Brasilândia', 47.2, 'color: red']
];



const options = {
  title: 'População Jovem - ZN',
  chartArea: { width: '60%' },
  hAxis: {
    title: 'População Jovem (%)',
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
