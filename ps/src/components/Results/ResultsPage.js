import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResultsView } from './ResultsView';
import { completeMatchup } from '../../features/results/resultsSlice';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.ui.items);
    const scores = useSelector((state) => state.ui.scores);
    const rankings = useSelector((state) => state.results.rankings);

    useEffect(() => {
        if (items && items.length > 0) {
            dispatch(completeMatchup({ items, scores }));
        }
    }, [dispatch, items, scores]);
      
    return <ResultsView rankings={rankings} />;
};

export default ResultsPage;
