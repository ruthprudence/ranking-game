// src/middleware/audioMiddleware.js
import { loadSound, soundLoaded } from './audioSlice';

const playSound = (soundName) => {
  const sound = document.getElementById(soundName);
  if (sound) {
    sound.play();
  }
};

const audioMiddleware = store => next => action => {
  if (action.type === playSound.type) {
    const { name } = action.payload;
    const state = store.getState();
    if (state.audio.sounds[name]?.loaded && !state.audio.muted) {
      playSound(name);
    }
  }

  return next(action);
};

export default audioMiddleware;
