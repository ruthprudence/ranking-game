import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setCurrentPage, setTopic } from './features/game/gameSlice';

// import useBasePage from './hooks/Page/useBasePage';
import SplashPage from './components/Page/SplashPage';
import InputPage from './components/Page/InputPage';
import MatchupPage from './components/Page/MatchupPage';
import ResultsPage from './components/Page/ResultsPage';

const RankingGame = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.game.currentPage);
    const topic = useSelector((state) => state.game.topic);

    const goToInputPage = () => {
        dispatch(setCurrentPage('INPUT_PAGE'));
    }

    // const {
    //     currentPage,
    //     goToInputPage,
    //     goToMatchupPage,
    //     goToResultsPage,
    //     topic,
    //     setTopic,
    //     items,
    //     setItems,
    //     pairs,
    // } = useBasePage();

    // Detailed console log to inspect the state at each render
    // console.log('Rendering RankingGame:', { currentPage, topic, items, pairs });

    switch (currentPage) {
        case 'SPLASH_PAGE':
            return <SplashPage goToInputPage={goToInputPage}/>;
        case 'INPUT_PAGE':
            return <InputPage/>;
        case 'MATCHUP_PAGE':
            return <MatchupPage/>;
        case 'RESULTS_PAGE':
            return <ResultsPage/>;
        default:
            // Log for an unknown page, which indicates a routing error
            console.log('Error: Unknown currentPage', currentPage);
            return <div>Error: Unknown page</div>;
    }
};

export default RankingGame;
