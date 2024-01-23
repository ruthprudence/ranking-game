import React from 'react';
import { useSelector } from 'react-redux';

import SplashPage from './components/Splash/SplashPage';
import InputPage from './components/Input/InputPage';
import MatchupPage from './components/Matchup/MatchupPage.js.BAK';
import ResultsPage from './components/Results/ResultsPage.js.BAK';

const RankingGame = () => {
    const currentPage = useSelector((state) => state.game.currentPage);

    switch (currentPage) {
        case 'SPLASH_PAGE':
            return <SplashPage />;
        case 'INPUT_PAGE':
            return <InputPage />;
        case 'MATCHUP_PAGE':
            return <MatchupPage />;
        case 'RESULTS_PAGE':
            return <ResultsPage />;
        default:
            console.error('Error: Unknown currentPage', currentPage);
            return <div>Error: Unknown page</div>;
    }
};

export default RankingGame;
