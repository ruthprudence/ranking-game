import React from 'react';
import useBasePage from './hooks/Page/useBasePage';


// Import the page components
import useSplashPage from './hooks/Page/useSplashPage';
import useInputPage from './hooks/Page//useInputPage';
import useMatchupPage from './hooks/Page/useMatchupPage';
import useResultsPage from './hooks/Page/useResultsPage';

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
            return <useSplashPage onSubmit={goToInputPage} />;
        case 'INPUT_PAGE':
            return <useInputPage topic={topic} items={items} onSubmit={goToMatchupPage} />;
        case 'MATCHUP_PAGE':
            return <useMatchupPage items={items} onSubmit={goToResultsPage} />;
        case 'RESULTS_PAGE':
            return <useResultsPage items={items} />;
        default:
            return <div>Error: Unknown page</div>;
    }
};

export default RG;
