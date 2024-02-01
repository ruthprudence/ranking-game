import React from 'react';
import { PAGES } from '../constants';
import { setCurrentPage } from '../game/gameSlice';
import { useDispatch } from 'react-redux';
import { resetState } from './uiSlice';

export const RenderBugButton = ({ currentPage }) => {
  const dispatch = useDispatch();

  const navigateToBugReport = () => {
    dispatch(setCurrentPage(PAGES.BUG));
};

  switch (currentPage) {
    case PAGES.SPLASH:
        return <p onClick={navigateToBugReport}>Report a Bug</p>;
    case PAGES.INPUT:
        return <p onClick={navigateToBugReport}>Report a Bug</p>;
    case PAGES.MATCHUP:
        return <p onClick={navigateToBugReport}>Report a Bug</p>;
    case PAGES.RESULTS:
        return <p onClick={navigateToBugReport}>Report a Bug</p>;
    case PAGES.BUG:
        return null;
    default:
        return null;
  }
};