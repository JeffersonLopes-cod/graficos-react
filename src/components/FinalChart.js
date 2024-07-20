import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  ['República', 25.8],
  ['Lapa', 22.4],
  ['Bela Vista', 19.1],
  ['Barra Funda', 18.4],
  ['Bom Retiro', 15.3],
  ['Pinheiros', 15.2],
  ['Santa Cecília', 14.7],
  ['Sé', 11.2],
  ['Perdizes', 10.5],
  ['Consolação', 7.0],
  ['Belém', 6.1],
  ['Santo Amaro', 5.4],
  ['Jardim Paulista', 4.4],
  ['Vila Leopoldina', 4.4],
  ['Ipiranga', 3.6],
  ['Casa Verde', 3.5],
  ['Tatuapé', 3.1],
  ['Itaim Bibi', 3.1],
  ['Liberdade', 2.7],
  ['Alto de Pinheiros', 2.5],
  ['Vila Mariana', 2.3],
  ['Butantã', 1.9],
  ['Raposo Tavares', 1.9],
  ['Jabaquara', 1.7],
  ['Vila Sônia', 1.6],
  ['Cachoeirinha', 1.4],
  ['Campo Limpo', 1.3],
  ['Vila Prudente', 1.0],
  ['Vila Matilde', 0.9],
  ['Mandaqui', 0.9],
  ['Santana', 0.9],
  ['Cursino', 0.9],
  ['Vila Maria', 0.9],
  ['Penha', 0.8],
  ['Saúde', 0.7],
  ['Jardim Helena', 0.7],
  ['Cangaíba', 0.7],
  ['Freguesia do Ó', 0.7],
  ['São Lucas', 0.7],
  ['Vila Jacuí', 0.7],
  ['Vila Curuçá', 0.6],
  ['Pirituba', 0.6],
  ['Grajaú', 0.5],
  ['Itaim Paulista', 0.4],
  ['Cidade Ademar', 0.3],
  ['Sapopemba', 0.3],
  ['Jardim São Luís', 0.3],
  ['Água Rasa', 0.0],
  ['Anhanguera', 0.0],
  ['Aricanduva', 0.0],
  ['Artur Alvim', 0.0],
  ['Brás', 0.0],
  ['Brasilândia', 0.0],
  ['Cambuci', 0.0],
  ['Campo Belo', 0.0],
  ['Campo Grande', 0.0],
  ['Capão Redondo', 0.0],
  ['Carrão', 0.0],
  ['Cidade Dutra', 0.0],
  ['Cidade Líder', 0.0],
  ['Cidade Tiradentes', 0.0],
  ['Ermelino Matarazzo', 0.0],
  ['Guaianases', 0.0],
  ['Iguatemi', 0.0],
  ['Itaquera', 0.0],
  ['Jaçanã', 0.0],
  ['Jaguara', 0.0],
  ['Jaguaré', 0.0],
  ['Jaraguá', 0.0],
  ['Jardim Ângela', 0.0],
  ['José Bonifácio', 0.0],
  ['Lajeado', 0.0],
  ['Limão', 0.0],
  ['Marsilac', 0.0],
  ['Moema', 0.0],
  ['Moóca', 0.0],
  ['Morumbi', 0.0],
  ['Parelheiros', 0.0],
  ['Pari', 0.0],
  ['Parque do Carmo', 0.0],
  ['Pedreira', 0.0],
  ['Perus', 0.0],
  ['Ponte Rasa', 0.0],
  ['Rio Pequeno', 0.0],
  ['Sacomã', 0.0],
  ['São Domingos', 0.0],
  ['São Mateus', 0.0],
  ['São Miguel', 0.0],
  ['São Rafael', 0.0],
  ['Socorro', 0.0],
  ['Tremembé', 0.0],
  ['Tucuruvi', 0.0],
  ['Vila Andrade', 0.0],
  ['Vila Formosa', 0.0],
  ['Vila Guilherme', 0.0],
  ['Vila Medeiros', 0.0],
];

const App = () => {
  // Função para dividir o array em sub-arrays de 5 elementos cada
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Dividindo os dados em grupos de 5
  const groupedData = chunkArray(data, 5);

  return (
    <div className="container">
      {groupedData.map((group, index) => {
        const chartData = {
          labels: group.map(item => item[0]),
          datasets: [
            {
              label: 'População Jovem',
              data: group.map(item => item[1]),
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
          ],
        };

        return (
          <div key={index} className="mb-4">
            <h5>Grupo {index + 1}</h5>
            <Bar data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
