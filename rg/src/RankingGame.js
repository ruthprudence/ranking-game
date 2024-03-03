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
import BugPage from './components/Bug/BugPage';
import usePageTransition from './features/game/usePageTransition';


const RankingGame = () => {
    const currentPage = useSelector((state) => state.game.currentPage);
    const dispatch = useDispatch();
    const animationClass = usePageTransition();

    return (
        <div className=''> 
            {(() => {
    switch (currentPage) {
        case PAGES.SPLASH:
            return <SplashPage
                    animationClass={animationClass}
                    onAdvance={() => dispatch(advancePage())} />;
        case PAGES.INPUT:
            return <InputPage
                    animationClass={animationClass}
                    onAdvance={() => dispatch(advancePage())} />;
        case PAGES.MATCHUP:
            return <MatchupPage
                    animationClass={animationClass}
                    onAdvance={() => dispatch(advancePage())} />;         
        case PAGES.RESULTS:
            return <ResultsPage
                    animationClass={animationClass}/>;
        case PAGES.BUG:
            return <BugPage 
                    animationClass={animationClass}/>;
        default:
            console.error('Error: Unknown currentPage', currentPage);
            return <div>Error: Unknown page</div>;
    }

})()}
</div>
);
    };

export default RankingGame;