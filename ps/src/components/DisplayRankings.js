import React from 'react';
import { getTieAdjustedRankings } from '../model/PriorityModel';

const DisplayRankings = ({ scores }) => {
  const adjustedRankings = getTieAdjustedRankings(scores);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Item</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {adjustedRankings.map(([choice, score, rank], index, array) => {
            const isLastInTie = (index === array.length - 1) || (array[index + 1][1] !== score);
            return (
              <tr key={choice}>
                <td>{isLastInTie ? rank : "--"}</td>
                <td>{choice}</td>
                <td>{score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayRankings;
