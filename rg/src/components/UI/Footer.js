import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../../features/ui/uiSlice'; // Import the reset action creator
// import { Link } from 'react-router-dom'; // If using React Router
import { RenderFooterButton } from '../../features/ui/RenderFooterButton';

const Footer = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.game.currentPage);

    return (
        <footer className="footer">
            <p>Copyright 2024</p>
            <p>Ruth Prudence, All Rights Reserved</p>
            <RenderFooterButton currentPage={currentPage} />{/* For non-React Router approach */}
            {/* <Link to="/" onClick={handleReset}>Reset and Go to Start</Link> */} {/* For React Router approach */}
            <p>Report a Bug</p>
        </footer>
    );
};

export default Footer;




