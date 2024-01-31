import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResultsView } from './ResultsView';
import { completeMatchup } from '../../features/ui/uiSlice';

const ResultsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.ui.items);
    const rankings = useSelector((state) => state.ui.rankings);

    useEffect(() => {
        if (items && items.length > 0) {
            dispatch(completeMatchup());
        }
    }, [dispatch, items]);
      
    return <ResultsView rankings={rankings} />;
};


export default ResultsPage;
