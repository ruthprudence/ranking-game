/** Audio
 * 
 * This component is responsible for rendering the audio elements that are used throughout the game.
*/
// Audio.js
import React from 'react';
import { SOUND_NAME, SOUND_PATH } from './features/constants'; // Adjust the import path as needed

const Audio = () => {
    return (
        <div>
          {Object.entries(SOUND_PATH).map(([key, path]) => (
            <audio key={key} id={key} src={path} preload="auto" hidden />
          ))}
        </div>
      );
    };
    
    export default Audio;