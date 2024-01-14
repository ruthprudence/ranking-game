import React from 'react';
import useBasePage from './hooks/Page/useBasePage';

import SplashPage from './components/Page/SplashPage';
import InputPage from './components/Page/InputPage';
import MatchupPage from './components/Page/MatchupPage';
import ResultsPage from './components/Page/ResultsPage';

const RankingGame = () => {
    const {
        currentPage,
        goToInputPage,
        goToMatchupPage,
        goToResultsPage,
        topic,
        setTopic,
        items,
        setItems,
        pairs,
    } = useBasePage();

    switch (currentPage) {
        case 'SPLASH_PAGE':
            return <SplashPage goToInputPage={goToInputPage} setTopic={setTopic} />;
        case 'INPUT_PAGE':
            console.log('Items in RankingGame:', items); // Add this line to inspect items
            return <InputPage setItems={setItems} goToMatchupPage={goToMatchupPage} topic={topic} />;
            case 'MATCHUP_PAGE':
                console.log('Items in RankingGame:', items); // Log items for debugging
                console.log('Pairs in RankingGame:', pairs); // Log pairs for debugging
                return <MatchupPage items={items} pairs={pairs} goToResultsPage={goToResultsPage} />;
            case 'RESULTS_PAGE':
                return <ResultsPage items={items} />;
            default:
                return <div>Error: Unknown page</div>;
        }
    };
    
    export default RankingGame;
