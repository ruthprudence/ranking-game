import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResultsView } from './ResultsView';
import { completeMatchup } from '../../features/ui/uiSlice';
import { playSound } from '../../features/audio/audioSlice';


const ResultsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.ui.items);
    const rankings = useSelector((state) => state.ui.rankings);
    const topic = useSelector((state) => state.ui.topic);



    useEffect(() => {
        if (items && items.length > 0) {
            dispatch(completeMatchup());
            dispatch(playSound({ name: 'victorySound' })); 
        }
    }, [dispatch, items]);

    return <ResultsView 
    rankings={rankings}
    topic={topic} />;
};


export default ResultsPage;
