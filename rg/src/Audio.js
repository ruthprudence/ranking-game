/** Audio
 * 
 * This component is responsible for rendering the audio elements that are used throughout the game.
*/
import React from 'react';
import {SOUNDS}  from './features/constants';
const Audio = () => {

    return (
        <div>
            <audio id={SOUNDS.EATGHOST} src="/assets/audio/pacman_eatghost.wav" preload="auto" hidden></audio>
            <audio id={SOUNDS.EATFRUIT} src="/assets/audio/pacman_eatfruit.wav" preload="auto" hidden></audio>
            <audio id={SOUNDS.UHOH} src="/assets/audio/pacman_death.wav" preload="auto" hidden></audio>
            <audio id={SOUNDS.VICTORY} src="/assets/audio/pacman_extrapac.wav" preload="auto" hidden></audio>
            <audio id={SOUNDS.INTERMISSION} src="/assets/audio/pacman_intermission.wav" preload="auto" hidden></audio>
        </div>
    );
};

export default Audio;