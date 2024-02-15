import React from 'react';
import { PAGES } from '../constants';
import { setCurrentPage } from '../game/gameSlice';
import { useDispatch } from 'react-redux';
import { resetState } from './uiSlice';
import SoundButton from '../../components/UI/SoundButton';

const defaultText = "Reset (Lose Progress)";

export const RenderFooterButton = ({ currentPage }) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetState());
    dispatch(setCurrentPage(PAGES.SPLASH));
    dispatch({ type: 'RESET_PIE' });
  };

  switch (currentPage) {
    case PAGES.SPLASH:
        return null;
    case PAGES.INPUT:
        return <SoundButton className ="resetBtn"  soundName="uhOh" onClick={handleReset}>{defaultText}</SoundButton>;
    case PAGES.MATCHUP:
        return <SoundButton className ="resetBtn"  soundName="uhOh" onClick={handleReset}>{defaultText}</SoundButton>;
    case PAGES.RESULTS:
        return <SoundButton className ="resetBtn"  soundName="intermission" onClick={handleReset}>Rank Again!</SoundButton>;
    default:
        return <SoundButton className ="resetBtn"  soundName="intermission" onClick={handleReset}>Rank Again!</SoundButton>;
}
};