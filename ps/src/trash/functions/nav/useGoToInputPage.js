import { useCallback } from 'react';

const useGoToInputPage = (setTopic, setCurrentPage) => {
    return useCallback((topic) => {
        setTopic(topic);
        setCurrentPage('INPUT_PAGE');
    }, [setTopic, setCurrentPage]);
};

export default useGoToInputPage;