import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PanelView from './PanelView';

const PanelPage = () => {
    const dispatch = useDispatch();


    return <PanelView />;
};

export default PanelPage;