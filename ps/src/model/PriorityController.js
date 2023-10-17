import { sortPriorities } from '../model/PriorityModel';

export const handleChoices = (choices) => {
  // Call the model's sortPriorities function to get the sorted priorities
  const sortedPriorities = sortPriorities(choices);

  // Return the sorted priorities to be displayed in the view
  return sortedPriorities;
};
