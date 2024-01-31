/** RankingGame
 * 
 *  This is the main component for the app.
 *  It controls the page rendering based on the currentPage state in the Redux store.
 * 
 *  It is also the parent component for all the other components.
 * 
*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { advancePage } from './features/game/gameSlice';
import { PAGES } from './features/constants';
import SplashPage from './components/Splash/SplashPage';
import InputPage from './components/Input/InputPage';
import MatchupPage from './components/Matchup/MatchupPage';
import ResultsPage from './components/Results/ResultsPage';

const RankingGame = () => {
    const currentPage = useSelector((state) => state.game.currentPage);
    const dispatch = useDispatch();

    switch (currentPage) {
        case PAGES.SPLASH:
            return <SplashPage onAdvance={() => dispatch(advancePage())} />;
        case PAGES.INPUT:
            return <InputPage onAdvance={() => dispatch(advancePage())} />;
        case PAGES.MATCHUP:
            return  <MatchupPage onAdvance={() => dispatch(advancePage())} />;         
        case PAGES.RESULTS:
            return <ResultsPage />;
        default:
            console.error('Error: Unknown currentPage', currentPage);
            return <div>Error: Unknown page</div>;
    }
    };

export default RankingGame;