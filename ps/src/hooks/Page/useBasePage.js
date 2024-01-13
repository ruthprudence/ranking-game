// useBasePage.js
import { useState, useCallback } from 'react';

const useBasePage = () => {
    const [currentPage, setCurrentPage] = useState('SPLASH_PAGE');
    const [topic, setTopic] = useState('');
    const [items, setItems] = useState([]);
    const [choices, setChoices] = useState([]);
    const [pairs, setPairs] = useState([]);
    const [scores, setScores] = useState({});

    const goToInputPage = useCallback(() => {
        setCurrentPage('INPUT_PAGE');
    }, []);

    const goToMatchupPage = useCallback(updatedItems => {
        setItems(updatedItems);
        setCurrentPage('MATCHUP_PAGE');
    }, []);

    const goToResultsPage = useCallback(updatedScores => {
        setScores(updatedScores);
        setCurrentPage('RESULTS_PAGE');
    }, []);

    return {
        currentPage,
        setCurrentPage,
        topic,
        setTopic,
        items,
        setItems,
        choices,
        setChoices,
        pairs,
        setPairs,
        scores,
        setScores,
        goToInputPage,
        goToMatchupPage,
        goToResultsPage
    };
};

export default useBasePage;
