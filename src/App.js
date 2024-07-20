import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Chart from './components/Chart';
import Jovens from './components/Jovens'
import Salarial from './components/Salarial';


function App() {
  return (
    <div className="App">
      <Header title="Estudo para o Casa de Profeta" />
      <Table />
      <Chart />
      <br></br>
      <Jovens/>
      <br></br>
      <Salarial/>
    </div>
  );
}

export default App;
