// src/middleware/audioMiddleware.js
import { loadSound, soundLoaded, playSound } from './audioSlice';

const playAudio = (soundName) => {
  // Replace with the source paths to your sound files
  const soundSrcMap = {
    'eatGhost': '/assets/audio/pacman_eatghost.wav',
    'eatFruit': '/assets/audio/pacman_eatfruit.wav',
    'uhOh': '/assets/audio/pacman_death.wav',
    'victorySound': '/assets/audio/pacman_extrapac.wav',
    'intermission': '/assets/audio/pacman_intermission.wav'
  };

  const soundSrc = soundSrcMap[soundName];
  if (soundSrc) {
    const audio = new Audio(soundSrc);
    audio.play().then(() => {
      console.log(`Sound played: ${soundName}`);
    }).catch((error) => {
      console.error(`Error playing sound (${soundName}):`, error);
    });
  } else {
    console.log(`Sound source not found for: ${soundName}`);
  }
};

const audioMiddleware = store => next => action => {
  if (action.type === playSound.type) {
    const { name } = action.payload;
    const state = store.getState();
    if (!state.audio.muted) {
      playAudio(name);
    }
  }

  return next(action);
};

export default audioMiddleware;