// src/middleware/audioMiddleware.js
import { loadSound, soundLoaded } from './audioSlice';

const playSound = (soundName) => {
  const sound = document.getElementById(soundName);
  if (sound) {
    sound.play();
    console.log(`  Playing sound: ${soundName}`);
  }
};

const audioMiddleware = store => next => action => {
  if (action.type === 'audio/playSound') {
    const { name } = action.payload;
    const state = store.getState();
    if (state.audio.sounds[name]?.loaded && !state.audio.muted) {
      console.log(`middleware: ${name}`);
      playSound(name);
      
    }
  }

  return next(action);
};

export default audioMiddleware;
