import React, { useState } from 'react';
import './Table.css';

const Table = () => {
  const [data, setData] = useState({
    "NORTE 1": [
      "Jaçanã", "Mandaqui", "Santana", "Tremembé", "Tucuruvi", "Vila Guilherme", "Vila Maria", "Vila Medeiros"
    ],
    "NORTE 2": [
      "Anhangüera", "Brasilândia", "Cachoeirinha", "Casa Verde", "Freguesia do Ó", "Jaraguá", "Limão", "Perus", "Pirituba", "São Domingos"
    ]
  });

  const toggleVisibility = (className) => {
    document.querySelectorAll(`.${className}`).forEach(row => {
      row.style.display = row.style.display === 'none' ? 'table-row' : 'none';
    });
  };

  return (
    <div className="table-container">
      <table id="districts-table">
        <thead>
          <tr>
            <th className="clickable" onClick={() => toggleVisibility('norte1')}>Divisão NORTE 1</th>
            <th className="clickable" onClick={() => toggleVisibility('norte2')}>Divisão NORTE 2</th>
          </tr>
        </thead>
        <tbody>
          <tr className="norte1">
            <td>
              <ul>
                {data["NORTE 1"].map((distrito, index) => (
                  <li key={index}>{distrito}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {data["NORTE 2"].map((distrito, index) => (
                  <li key={index}>{distrito}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
