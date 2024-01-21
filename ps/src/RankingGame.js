import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generatePairs } from './features/matchup/matchupSlice';

import SplashPage from './components/Page/SplashPage';
import InputPage from './components/Page/InputPage';
import MatchupPage from './components/Page/MatchupPage';
import ResultsPage from './components/Page/ResultsPage';

const RankingGame = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.game.currentPage);
    const items = useSelector((state) => state.game.items);

    useEffect(() => {
        if (currentPage === 'MATCHUP_PAGE' && items.length > 0) {
            console.log("Dispatching generatePairs with items:", items);
            dispatch(generatePairs()); 
        }
    }, [currentPage, dispatch, items.length]);

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
