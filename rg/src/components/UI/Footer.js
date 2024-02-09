import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RenderFooterButton } from '../../features/ui/RenderFooterButton';
import { PAGES } from   '../../features/constants';
import { setCurrentPage } from '../../features/game/gameSlice';
// eslint-disable-next-line
import { RenderBugButton } from '../../features/ui/RenderBugButton';
import VolumeControl from '../UI/VolumeControl';

const Footer = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.game.currentPage);

    // eslint-disable-next-line
    const navigateToBugReport = () => {
        dispatch(setCurrentPage(PAGES.BUG));
    };

    return (
        <footer className="footer">

            <VolumeControl />
            <p className="copyright">Copyright 2024</p>
            <p className="copyright">Ruth Prudence, All Rights Reserved</p>
            <RenderFooterButton currentPage={currentPage} />
            {/* <RenderBugButton currentPage={currentPage} /> */}
        </footer>
    );
};

export default Footer;




