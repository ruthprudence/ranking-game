// PriorityController.js
import {sortPriorities } from '../model/PriorityModel';

export const handleChoiceSelection = (choices) => {
  // Call the Model functions and process data
  // const scores = calculateScores(choices);
  const sortedPriorities = sortPriorities(choices);
  return {sortedPriorities };
};
