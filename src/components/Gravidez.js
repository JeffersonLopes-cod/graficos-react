import React from 'react';
import { Chart } from 'react-google-charts';

// Dados dos distritos
const rawData = [
  ['Distrito', 'População'],
  ['BRasilândia', 12.5],
  ['Jaraguá', 11.8],
  ['Jaçanã', 11],
  ['Tremembé', 10.3],
  ['Vila Medeiros', 9.6],
];

// Ordena os dados por população em ordem decrescente
const sortedData = rawData.slice(1).sort((a, b) => b[1] - a[1]);
const chartData = [rawData[0], ...sortedData]; // Adiciona o cabeçalho de volta

const chartOptions = {
  title: 'Gravidez na Adolescência - ZN',
  chartArea: { width: '50%' },
  hAxis: {
    minValue: 0.5,
    maxValue: 15,
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
