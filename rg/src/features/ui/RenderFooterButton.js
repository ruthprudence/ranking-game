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
        return <button className ="resetBtn" onClick={handleReset}>{defaultText}</button>;
    case PAGES.MATCHUP:
        return <button className ="resetBtn" onClick={handleReset}>{defaultText}</button>;
    case PAGES.RESULTS:
        return <button className ="resetBtn" onClick={handleReset}>Rank Again!</button>;
    default:
        return <button className ="resetBtn" onClick={handleReset}>play The Ranking Game!</button>;
}
};