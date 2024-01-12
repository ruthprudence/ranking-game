import React from 'react';
import useBasePage from './hooks/useBasePage';

// Import the page components
import SplashPage from './pages/SplashPage';
import InputPage from './pages/InputPage';
import MatchupPage from './pages/MatchupPage';
import ResultsPage from './pages/ResultsPage';

const RG = () => {
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
            return <SplashPage onSubmit={goToInputPage} />;
        case 'INPUT_PAGE':
            return <InputPage topic={topic} items={items} onSubmit={goToMatchupPage} />;
        case 'MATCHUP_PAGE':
            return <MatchupPage items={items} onSubmit={goToResultsPage} />;
        case 'RESULTS_PAGE':
            return <ResultsPage items={items} />;
        default:
            return <div>Error: Unknown page</div>;
    }
};

export default RG;
