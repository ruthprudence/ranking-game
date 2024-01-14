import React from 'react';
import useBasePage from './hooks/Page/useBasePage';

// Import the page components
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
        setItems
    } = useBasePage();

    switch (currentPage) {
        case 'SPLASH_PAGE':
            return <SplashPage goToInputPage={goToInputPage} setTopic={setTopic} />;
        case 'INPUT_PAGE':
            console.log('Items in RankingGame:', items); // Add this line to inspect items
            return <InputPage setItems={setItems} goToMatchupPage={goToMatchupPage} topic={topic} />;
        case 'MATCHUP_PAGE':
            console.log('Items in RankingGame:', items); // Add this line to inspect items
            return <MatchupPage items={items} goToResultsPage={goToResultsPage} />;
        case 'RESULTS_PAGE':
            return <ResultsPage items={items} />;
        default:
            return <div>Error: Unknown page</div>;
    }
};

export default RankingGame;
