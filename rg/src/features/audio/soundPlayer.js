// soundPlayer.js
export const playSound = (soundName, muted) => {
    if (!muted) {
      const audioElement = document.getElementById(soundName);
      if (audioElement) {
        const newAudio = new Audio(audioElement.src);
        newAudio.play().catch(error => console.error(`Error playing sound: ${soundName}`, error));
      }
    }
  };
  