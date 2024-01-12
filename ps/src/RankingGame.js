import React from 'react';
import useBasePage from './hooks/Page/useBasePage';


// Import the page components
import SplashPage from './hooks/Page/useSplashPage';
import InputPage from './hooks/Page//useInputPage';
import MatchupPage from './hooks/Page/useMatchupPage';
import ResultsPage from './hooks/Page/useResultsPage';

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
