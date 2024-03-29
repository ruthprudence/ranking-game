import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResultsView } from './ResultsView';
import { completeMatchup } from '../../features/ui/uiSlice';
import { SOUND_NAME} from '../../features/constants';


const ResultsPage = ({ animationClass }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.ui.items);
    const rankings = useSelector((state) => state.ui.rankings);
    const topic = useSelector((state) => state.ui.topic);
    const muted = useSelector((state) => state.audio.muted);

    const playSound = (soundName) => {
        if (!muted) {
            const audioElement = document.getElementById(soundName);
            if (audioElement) {
                audioElement.play().catch(error => console.error(`Error playing sound: ${soundName}`, error));
            }
        }
    };

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, []);

    useEffect(() => {
        if (items && items.length > 0) {
            playSound(SOUND_NAME.VICTORY); 
            dispatch(completeMatchup());
        }
    }, [dispatch, items, muted]);

    return (
            <ResultsView 
                animationClass={animationClass}
                rankings={rankings}
                topic={topic} />
    );
};


export default ResultsPage;
