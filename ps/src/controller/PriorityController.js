import { calculateScores, sortPriorities } from '../model/PriorityModel';

export const handleChoiceSelection = (choices, initialScores) => {
    const scores = calculateScores(choices, initialScores);
    const sortedPriorities = sortPriorities(choices);
    return { scores, sortedPriorities };
};

