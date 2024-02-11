import React from 'react';
import {SOUNDS} from '../../features/constants';
import SoundButton from '../UI/SoundButton';
import Footer from '../UI/Footer';

export const PanelView = ({ handleSoundPlay }) => {
    const sounds = [
        { name: SOUNDS.EATGHOST, description: 'Play Eat Ghost Sound' },
        { name: SOUNDS.EATFRUIT, description: 'Play Eat Fruit Sound' },
        { name: SOUNDS.UHOH, description: 'Play Restart Sound' },
        { name: SOUNDS.VICTORY, description: 'Play Victory Sound' },
        { name: SOUNDS.INTERMISSION, description: 'Play Intermission Sound' },
    ];

    const playSoundDirectly = (soundId) => {
        const sound = document.getElementById(soundId);
        if (sound) {
            sound.play();
        }
    };

    return (
        <div className="panel-view">
            <div className="panel-section">
                <h2>Redux Approach</h2>
                <table className="panel-table">
                    <tbody>
                        {sounds.map((sound, index) => (
                            <tr key={index}>
                                <td>
                                    <SoundButton onClick={() => handleSoundPlay(sound.name)}>
                                        {sound.description}
                                    </SoundButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="panel-section">
                <h2>Direct Approach</h2>
                <table className="panel-table">
                    <tbody>
                        {sounds.map((sound, index) => (
                            <tr key={index}>
                                <td>
                                    <button onClick={() => playSoundDirectly(sound.name)}>
                                        {sound.description} (Direct)
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="footer-container resultsFooter"><Footer /> </div>
        </div>
           
    );
};

export default PanelView;
