// utils/useHandleTopicSubmit.js
import { useCallback } from 'react';

const useHandleTopicSubmit = (setTopic, goToInputPage) => {
    return useCallback(topic => {
        setTopic(topic);
        goToInputPage();
    }, [setTopic, goToInputPage]);
};

export default useHandleTopicSubmit;