import { calculateScores, sortPriorities } from '../model/PriorityModel';

export const handleChoiceSelection = (choices) => {
    const scores = calculateScores(choices);
    const sortedPriorities = sortPriorities(choices);
    return { scores, sortedPriorities };
};
