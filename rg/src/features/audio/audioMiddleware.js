// src/middleware/audioMiddleware.js
import { loadSound, soundLoaded, playSound } from './audioSlice';
// import { SOUNDS} from '../constants';

const playAudio = (soundName) => {
  const sound = document.getElementById(soundName);
  if (sound) {
    sound.play().then(() => {
      console.log(`Sound played: ${soundName}`);
    }).catch((error) => {
      console.error(`Error playing sound (${soundName}):`, error);
    });
  } else {
    console.log(`Sound element not found: ${soundName}`);
  }
};

const audioMiddleware = store => next => action => {
  // console.log('Middleware triggered: ', action.type); // Log every action type


  // if (action.type === 'audio/playSound') {
    if (action.type === playSound.type) {
    const { name } = action.payload;
    console.log(`middleware: ${name}`);
    const state = store.getState();
    if (state.audio.sounds[name]?.loaded && !state.audio.muted) {
      
      playAudio(name);
      
    }
  }

  return next(action);
};

export default audioMiddleware;
