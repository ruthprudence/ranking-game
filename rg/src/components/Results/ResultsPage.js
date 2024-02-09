import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResultsView } from './ResultsView';
import { completeMatchup } from '../../features/ui/uiSlice';
// import victorySound from '../../assets/audio/pacman_extrapac.wav';
import { playSound } from '../../features/audio/audioSlice';


const ResultsPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.ui.items);
    const rankings = useSelector((state) => state.ui.rankings);
    const topic = useSelector((state) => state.ui.topic);



    useEffect(() => {
        if (items && items.length > 0) {
            dispatch(completeMatchup());
        }
    }, [dispatch, items]);

    dispatch(playSound({ name: 'victorySound' }));

    return <ResultsView 
    rankings={rankings}
    topic={topic} />;
};


export default ResultsPage;
