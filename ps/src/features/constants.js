// constants.js
export const MAXCHOICES = 12;
export const MINCHOICES = 3;

export const PAGES = {
    SPLASH: 'SPLASH_PAGE',
    INPUT: 'INPUT_PAGE',
    MATCHUP: 'MATCHUP_PAGE',
    RESULTS: 'RESULTS_PAGE',
};

export const PROMPTS = {
    SPLASH: 'Rank Something!',
}

export const ERRORS = {
    SPLASH: '',
    MATCHUP: 'Something went wrong. Please try again.',
    INPUT: '',
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