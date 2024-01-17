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

    console.log(`currentPage: ${currentPage}`);
    console.log(`topic: ${topic}`);
    console.log(`items: ${items}`);
    console.log(`pairs: ${pairs}`);

    switch (currentPage) {
        case 'SPLASH_PAGE':
            console.log(`currentPage: ${currentPage}`);
            console.log(`topic: ${topic}`);
            console.log(`items: ${items}`);
            console.log(`pairs: ${pairs}`);
            return <SplashPage goToInputPage={goToInputPage} setTopic={setTopic} />;
        case 'INPUT_PAGE':
            console.log(`currentPage: ${currentPage}`);
            console.log(`topic: ${topic}`);
            console.log(`items: ${items}`);
            console.log(`pairs: ${pairs}`);
            return <InputPage setItems={setItems} goToMatchupPage={goToMatchupPage} topic={topic} />;
        case 'MATCHUP_PAGE':
            console.log(`currentPage: ${currentPage}`);
            console.log(`topic: ${topic}`);
            console.log(`items: ${items}`);
            console.log(`pairs: ${pairs}`);
            return <MatchupPage items={items} pairs={pairs} goToResultsPage={goToResultsPage} />;
        case 'RESULTS_PAGE':
            console.log(`currentPage: ${currentPage}`);
            console.log(`topic: ${topic}`);
            console.log(`items: ${items}`);
            console.log(`pairs: ${pairs}`);
            return <ResultsPage items={items} />;
        default:
            console.log(`currentPage: ${currentPage}`);
            console.log(`topic: ${topic}`);
            console.log(`items: ${items}`);
            console.log(`pairs: ${pairs}`);        
            return <div>Error: Unknown page</div>;
    }
};

export default RankingGame;
