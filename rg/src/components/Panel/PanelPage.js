import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { playSound } from '../../features/audio/audioSlice';
import PanelView from './PanelView';

const PanelPage = () => {
    const dispatch = useDispatch();

    const handleSoundPlay = (soundName) => {
        // console.log(`  Playing sound through PanelPage: ${soundName}`);
        dispatch(playSound({ name: soundName }));
        
    };

    useEffect(() => {
        handleSoundPlay('intermission');
        
    }, []);

    return <PanelView handleSoundPlay={handleSoundPlay} />;
};

export default PanelPage;