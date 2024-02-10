// src/hooks/useLoadSounds.js
import { useEffect } from 'react'; 
import { useDispatch } from 'react-redux';
import { loadSound } from '../audio/audioSlice'; 

export const useLoadSounds = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSound({ name: 'eatGhost', src: '/assets/audio/pacman_eatghost.wav' }));
    dispatch(loadSound({ name: 'eatFruit', src: '/assets/audio/pacman_eatfruit.wav' }));
    dispatch(loadSound({ name: 'uhOh', src: '/assets/audio/pacman_death.wav' }));
    dispatch(loadSound({ name: 'victorySound', src: '/assets/audio/pacman_extrapac.wav' }));
    dispatch(loadSound({ name: 'intermission', src: '/assets/audio/pacman_intermission.wav' }));
  }, [dispatch]);
  
};
