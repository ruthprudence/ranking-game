// src/middleware/audioMiddleware.js
import { loadSound, soundLoaded, playSound } from './audioSlice';
// import { SOUNDS} from '../constants';

const playAudio = (soundName) => {
  const sound = document.getElementById(soundName);
  if (sound) {
    sound.play().then(() => {
      // console.log(`Sound played: ${soundName}`);
    }).catch((error) => {
      // console.error(`Error playing sound (${soundName}):`, error);
    });
  } else {
    // console.log(`Sound element not found: ${soundName}`);
  }
};

const audioMiddleware = store => next => action => {
  // console.log(`Middleware received action: ${action.type}`, action);

  if (action.type === 'audio/playSound') {
    const { name } = action.payload;

    // Skip processing if the name is undefined
    if (!name) {
      // console.log("Skipped playing sound: Name is undefined");
      return next(action);
    }

    const state = store.getState();
    // console.log(`Middleware processing: ${name}, Muted: ${state.audio.muted}`);
    
    if (!state.audio.muted) {
      // console.log(`Playing sound: ${name}`);
      playAudio(name);
    }
  }

  return next(action);
};



export default audioMiddleware;
