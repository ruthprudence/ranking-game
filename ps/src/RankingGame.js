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
            return <SplashPage goToInputPage={goToInputPage} />;
        case 'INPUT_PAGE':
            return <InputPage setItems={setItems} goToMatchupPage={goToMatchupPage} />;
        case 'MATCHUP_PAGE':
            return <MatchupPage items={items} goToResultsPage={goToResultsPage} />;
        case 'RESULTS_PAGE':
            return <ResultsPage items={items} />;
        default:
            return <div>Error: Unknown page</div>;
    }
};

export default RankingGame;
