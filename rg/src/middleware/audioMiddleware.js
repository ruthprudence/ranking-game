// src/middleware/audioMiddleware.js
import { loadSound, soundLoaded, playSound } from '../features/audio/audioSlice';

const audioMiddleware = store => next => action => {
  if (action.type === loadSound.type) {
    const { name, src } = action.payload;
    const audio = new Audio(src);
    audio.onloadeddata = () => {
      store.dispatch(soundLoaded({ name }));
    };
    // Handle error loading here if needed
  } else if (action.type === playSound.type) {
    const { name } = action.payload;
    const state = store.getState();
    if (state.audio.sounds[name]?.loaded && !state.audio.muted) {
      const audio = new Audio(state.audio.sounds[name].src);
      audio.play();
      console.log('playing sound');
    }
  }

  return next(action);
};

export default audioMiddleware;
