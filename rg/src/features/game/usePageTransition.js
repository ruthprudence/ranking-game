// src/features/game/usePageTransition.js
import { useSelector } from 'react-redux';

const usePageTransition = () => {
  const currentPage = useSelector(state => state.game.currentPage);

  switch (currentPage) {
    case 'SPLASH_PAGE':
      return 'slideTopToBottom';
    case 'INPUT_PAGE':
      return 'slideRightToLeft';
    case 'MATCHUP_PAGE':
      return 'slideLeftToRight';
    case 'RESULTS_PAGE':
      return 'slideBottomToTop';
    case 'BUG_REPORT_PAGE':
      return 'slideTopToBottom';
    default:
      return '';
  }
};

export default usePageTransition;
