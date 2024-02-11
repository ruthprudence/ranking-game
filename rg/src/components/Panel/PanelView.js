// PanelView.js
import React from 'react';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';
import { MAXCHOICES, PLACEHOLDERS, PROMPTS, ERRORS } from '../../features/constants';
import SoundButton from '../UI/SoundButton';

export const PanelView = ({ handleSoundPlay }) => {
    const sounds = [
        { name: 'eatGhost', description: 'Play Eat Ghost Sound' },
        { name: 'eatFruit', description: 'Play Eat Fruit Sound' },
        { name: 'uhOh', description: 'Play Restart Sound' },
        { name: 'victorySound', description: 'Play Victory Sound' },
        { name: 'victorySoundintermission', description: 'Play Intermission Sound'},

    ];

    return (
        <div className="panel-view">
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
            <div className="footer-container resultsFooter"><Footer /> </div>
        </div>
        
    );
};

export default PanelView;