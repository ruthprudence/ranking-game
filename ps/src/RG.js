import React from 'react';
import useBasePage from './hooks/useBasePage';
// Import other necessary components

const RG = () => {
  const { currentPage, goToInputPage, topic, setTopic, items, setItems } = useBasePage('SPLASH_PAGE');

  switch(currentPage) {
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