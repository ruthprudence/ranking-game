import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../../features/ui/uiSlice'; // Import the reset action creator
// import { Link } from 'react-router-dom'; // If using React Router
import { RenderFooterButton } from '../../features/ui/RenderFooterButton';
import { PAGES } from   '../../features/constants';
import { setCurrentPage } from '../../features/game/gameSlice';
import { RenderBugButton } from '../../features/ui/RenderBugButton';

const Footer = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.game.currentPage);

    const navigateToBugReport = () => {
        dispatch(setCurrentPage(PAGES.BUG));
    };

    return (
        <footer className="footer">

            <RenderFooterButton currentPage={currentPage} />
            <p className="copyright">Copyright 2024</p>
            <p className="copyright">Ruth Prudence, All Rights Reserved</p>
            {/* <RenderBugButton currentPage={currentPage} /> */}
        </footer>
    );
};

export default Footer;




