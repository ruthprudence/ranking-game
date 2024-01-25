import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectRankings } from '../../features/matchup/matchupSlice';
import { calculateScores } from '../../utils/calculateScores';
import { calculateRankings } from '../../utils/calculateRankings';
import {ResultsView } from './ResultsView';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.game.items);
    const rankings = useSelector(selectRankings);

    useEffect(() => {
        console.log('Items state at ResultsPage:', items);
        if (items && items.length > 0) {
            dispatch(calculateScores());
            dispatch(calculateRankings());
        }
    }, [dispatch, items]);
      
      console.log('Rankings:', rankings);
      

    return (
        <ResultsView
       rankings={rankings}
    />
    );
};

export default ResultsPage;
