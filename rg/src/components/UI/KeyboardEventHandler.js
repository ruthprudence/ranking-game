// KeyboardEventHandler.js
import { useEffect } from 'react';
import { playSound } from '../../features/audio/soundPlayer';
import { SOUND_NAME } from '../../features/constants';

const KeyboardEventHandler = ({ keyMap, muted }) => {
  const handleKeyPress = (event) => {
    console.log(`Key pressed: ${event.key}`); // Debugging log
    if (!muted) playSound(SOUND_NAME.EATGHOST); // Play sound for testing

    const keyAction = keyMap[event.key.toLowerCase()] || keyMap[event.key];
    if (keyAction) {
      keyAction();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyMap, muted]);

  return null; // This component doesn't render anything
};

export default KeyboardEventHandler;
