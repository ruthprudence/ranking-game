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
            <audio id={SOUND_NAME.EATGHOST} src={SOUND_PATH.EATGHOST} preload="auto" hidden></audio>
            <audio id={SOUND_NAME.EATFRUIT} src={SOUND_PATH.EATFRUIT} preload="auto" hidden></audio>
            <audio id={SOUND_NAME.UHOH} src={SOUND_PATH.DEATH} preload="auto" hidden></audio>
            <audio id={SOUND_NAME.VICTORY} src={SOUND_PATH.EXTRAPAC} preload="auto" hidden></audio>
            <audio id={SOUND_NAME.INTERMISSION} src={SOUND_PATH.INTERMISSION} preload="auto" hidden></audio>
        </div>
    );
};

export default Audio;