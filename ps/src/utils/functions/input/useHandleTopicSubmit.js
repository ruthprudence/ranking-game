// utils/useHandleTopicSubmit.js
import { useCallback } from 'react';
import useGoToInputPage from '../nav/useGoToInputPage';

const useHandleTopicSubmit = (setTopic, setCurrentPage) => {
    const goToInputPage = useGoToInputPage(setTopic, setCurrentPage);

    return useCallback(topic => {
        setTopic(topic); // Set the topic first
        goToInputPage(topic); // Pass the topic to navigate to the input page
    }, [setTopic, goToInputPage]);
};

export default useHandleTopicSubmit;
