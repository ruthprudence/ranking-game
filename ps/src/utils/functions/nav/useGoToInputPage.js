import { useCallback } from 'react';

const useGoToInputPage = (setTopic, setCurrentPage) => {
    return useCallback((inputTopic) => {
        setTopic(inputTopic);
        setCurrentPage('INPUT_PAGE');
    }, [setTopic, setCurrentPage]);
};

export default useGoToInputPage;