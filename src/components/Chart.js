import React from 'react';
import { Chart } from 'react-google-charts';
import './Chart.css';

// Dados dos distritos
const rawData = [
  ['Distrito', 'População'],
  ['Brasilândia', 283658],
  ['Jaraguá', 214796],
  ['Tremembé', 225512],
  ['Pirituba', 171632],
  ['Cachoeirinha', 146866],
];

// Ordena os dados por população em ordem decrescente
const sortedData = rawData.slice(1).sort((a, b) => b[1] - a[1]);
const chartData = [rawData[0], ...sortedData]; // Adiciona o cabeçalho de volta

const chartOptions = {
  title: 'Distribuição da População por Distrito - ZN',
  chartArea: { width: '50%' },
  hAxis: {
    title: 'População',
    minValue: 0,
  },
  vAxis: {
    title: 'Distrito',
  },
  colors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#990099', '#0099c6', '#dd4477'],
};

const ChartComponent = () => {
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

export default ChartComponent;
