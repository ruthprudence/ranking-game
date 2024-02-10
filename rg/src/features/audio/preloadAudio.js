import { useLoadSounds } from "./useLoadSounds";

export const preloadAudio = () => {
        return (
                <div className="App">
                    <audio id="eatGhost" src="/assets/audio/pacman_eatghost.wav" preload="auto" hidden></audio>
                    <audio id="eatFruit" src="/assets/audio/pacman_eatfruit.wav" preload="auto" hidden></audio>
                    <audio id="uhOh" src="/assets/audio/pacman_death.wav" preload="auto" hidden></audio>
                    <audio id="victorySound" src="/assets/audio/pacman_extrapac.wav" preload="auto" hidden></audio>
                    <audio id="intermission" src="/assets/audio/pacman_intermission.wav" preload="auto" hidden></audio>
                </div>
            );
}