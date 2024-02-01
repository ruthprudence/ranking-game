// constants.js
export const MAXCHOICES = 12;
export const MINCHOICES = 3;

export const MAXLENGTH = 20;

export const PAGES = {
    SPLASH: 'SPLASH_PAGE',
    INPUT: 'INPUT_PAGE',
    MATCHUP: 'MATCHUP_PAGE',
    RESULTS: 'RESULTS_PAGE',
};

export const BUTTONS = {
    DEFAULT: 'Reset -- Lose Progress',
    RETRY: 'Rank Again!',
}

export const PROMPTS = {
    SPLASH: 'Rank Something!',
    INPUT: 'Click "Submit" to begin',
};

export const ERRORS = {
    SPLASH: '',
    MATCHUP: 'Something went wrong. Please try again.',
    INPUT: `Choose between ${MINCHOICES} and ${MAXCHOICES} items.`,
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