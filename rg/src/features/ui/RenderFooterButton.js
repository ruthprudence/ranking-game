import React from 'react';
import { PAGES } from '../constants';
import { setCurrentPage } from '../game/gameSlice';
import { useDispatch } from 'react-redux';
import { resetState } from './uiSlice';

const defaultText = "Reset (Lose Progress)";

export const RenderFooterButton = ({ currentPage }) => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetState());
    dispatch(setCurrentPage(PAGES.SPLASH));
  };

  switch (currentPage) {
    case PAGES.SPLASH:
        return null;
    case PAGES.INPUT:
        return <button onClick={handleReset}>{defaultText}</button>;
    case PAGES.MATCHUP:
        return <button onClick={handleReset}>{defaultText}</button>;
    case PAGES.RESULTS:
        return <button onClick={handleReset}>Rank Again!</button>;
    default:
        return <button onClick={handleReset}>The Ranking Game</button>;
}
};