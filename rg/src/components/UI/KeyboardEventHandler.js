// KeyboardEventHandler.js
import { useEffect } from 'react';

const KeyboardEventHandler = ({ keyMap }) => {
  const handleKeyPress = (event) => {
    const key = event.key.toLowerCase();
    if (key in keyMap) {
      keyMap[key]();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyMap]);

  return null; // This component doesn't render anything
};

export default KeyboardEventHandler;
