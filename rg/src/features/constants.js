// constants.js
export const MAXCHOICES = 12;
export const MINCHOICES = 3;

export const MAXLENGTH = 50;

export const PAGES = {
    SPLASH: 'SPLASH_PAGE',
    INPUT: 'INPUT_PAGE',
    MATCHUP: 'MATCHUP_PAGE',
    RESULTS: 'RESULTS_PAGE',
    BUG: 'BUG_REPORT_PAGE',
};

export const BUTTONS = {
    DEFAULT: 'Reset -- Lose Progress',
    RETRY: 'Rank Again!',
}

export const PROMPTS = {
    SPLASH: 'click "Submit Topic"',
    INPUT: 'click Rank! to begin',
};

export const ERRORS = {
    SPLASH: '(enter a topic below)',
    MATCHUP: 'Something went wrong. Please try again.',
    INPUT: `Enter between ${MINCHOICES} and ${MAXCHOICES} items.`,
    RESULTS: '',
    PAGE: 'Invalid page transition',
};

export const PLACEHOLDERS = {
    SPLASH: 'e.g., "fruits"',
    INPUT_DEFAULT: [
        'apricots',
        'persimmons',
        'cranberries'
    ],
    INPUT_ROWS: 'Enter an item',
};

export const SOUND_NAME = {
    EATGHOST: 'eatGhost',
    EATFRUIT: 'eatFruit',
    UHOH: 'uhOh',
    VICTORY: 'victorySound',
    INTERMISSION: 'intermission',
};

    const SOUND_FILES = {
        EATGHOST: 'pacman_eatghost.wav',
        EATFRUIT: 'pacman_eatfruit.wav',
        DEATH: 'pacman_death.wav',
        EXTRAPAC: 'pacman_extrapac.wav',
        INTERMISSION: 'pacman_intermission.wav'
    };
    
    const getSoundPaths = (basePath) => {
        return Object.keys(SOUND_FILES).reduce((acc, key) => {
            acc[key] = `${basePath}assets/audio/${SOUND_FILES[key]}`;
            return acc;
        }, {});
    };
    
    const audioBasePath = process.env.REACT_APP_AUDIO_BASE_PATH || '/';
    export const SOUND_PATH = getSoundPaths(audioBasePath);
