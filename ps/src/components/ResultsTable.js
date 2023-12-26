import React from 'react';

const ResultsTable = ({ sortedChoices, scores }) => (
  <table>
    <thead>
      <tr>
        <th>Ranking</th>
        <th>Item</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {sortedChoices.map((choice, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{choice}</td>
          <td>{scores[choice]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ResultsTable;
