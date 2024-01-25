/** RankingGame
 * 
 *  This is the main component for the app.
 *  It controls the page rendering based on the currentPage state in the Redux store.
 * 
 *  It is also the parent component for all the other components.
 * 
*/
import React from 'react';
import { useSelector } from 'react-redux';

import SplashPage from './components/Splash/SplashPage';
import InputPage from './components/Input/InputPage';
import MatchupPage from './components/Matchup/MatchupPage';
import ResultsPage from './components/Results/ResultsPage';

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
