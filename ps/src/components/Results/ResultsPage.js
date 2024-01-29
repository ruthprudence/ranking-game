import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResultsView } from './ResultsView';
import { completeMatchup } from '../../features/results/resultsSlice';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.ui.items);
    const rankings = useSelector((state) => state.results.rankings);

    useEffect(() => {
        if (items && items.length > 0) {
            dispatch(completeMatchup(items));
        }
    }, [dispatch, items]);
      
    return <ResultsView rankings={rankings} />;
};

export default ResultsPage;
