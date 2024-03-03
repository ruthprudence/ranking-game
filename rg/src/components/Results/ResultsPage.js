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
        setTimeout(() => {
          const element = document.getElementById('headingResults');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 0);
      }, []);

    useEffect(() => {
        if (items && items.length > 0) {
            playSound(SOUND_NAME.VICTORY); 
            dispatch(completeMatchup());
        }
    }, [dispatch, items, muted]);

    return (
        <div className={ animationClass} >
            <ResultsView 
                rankings={rankings}
                topic={topic} />;
        </div>
    );
};


export default ResultsPage;
