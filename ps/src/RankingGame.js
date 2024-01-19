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

    // Detailed console log to inspect the state at each render
    console.log('Rendering RankingGame:', { currentPage, topic, items, pairs });

    switch (currentPage) {
        case 'SPLASH_PAGE':
            return <SplashPage goToInputPage={goToInputPage} setTopic={setTopic} />;
        case 'INPUT_PAGE':
            return <InputPage setItems={setItems} goToMatchupPage={goToMatchupPage} topic={'TestTopic'} />;
        case 'MATCHUP_PAGE':
            // Log to check the items and pairs state when entering the Matchup page
            console.log('Entering Matchup Page with:', { items, pairs });
            return <MatchupPage items={items} pairs={pairs} goToResultsPage={goToResultsPage} topic={topic} />;
        case 'RESULTS_PAGE':
            // Log to check the items state when entering the Results page
            console.log('Entering Results Page with items:', items);
            return <ResultsPage items={items} topic={topic} />;
        default:
            // Log for an unknown page, which indicates a routing error
            console.log('Error: Unknown currentPage', currentPage);
            return <div>Error: Unknown page</div>;
    }
};

export default RankingGame;
