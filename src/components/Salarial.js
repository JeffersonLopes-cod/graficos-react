import React from 'react';
import { Chart } from 'react-google-charts';

// Dados dos distritos
const rawData = [
  ['Distrito', 'População'],
  ['Casa Verde', 3.5],
  ['Cachoeirinha', 1.4],
  ['Santana, Mandaqui, Vila Maria', 0.9],
  ['Freguesia do Ó', 0.7],
  ['Pirituba', 0.6],
];

// Ordena os dados por população em ordem decrescente
const sortedData = rawData.slice(1).sort((a, b) => b[1] - a[1]);
const chartData = [rawData[0], ...sortedData]; // Adiciona o cabeçalho de volta

const chartOptions = {
  title: 'Espaços de Cultura - ZN',
  chartArea: { width: '50%' },
  hAxis: {
    minValue: 0.5,
    maxValue: 4,
  },
  vAxis: {
    title: 'Distrito',
  },
  colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477'],
};

const Salarial = () => {
  return (
    <div id="chart_div">
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default Salarial;
