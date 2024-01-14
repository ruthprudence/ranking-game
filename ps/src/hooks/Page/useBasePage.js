// useBasePage.js
import { useState, useEffect, useCallback } from 'react';
import usePairGenerator from '../utils/usePairGenerator';


const useBasePage = () => {
    const [currentPage, setCurrentPage] = useState('SPLASH_PAGE');
    const [topic, setTopic] = useState('');
    const [items, setItems] = useState([]);
    const [choices, setChoices] = useState([]);
    const [pairs, setPairs] = useState([]);
    const { pairs: generatedPairs } = usePairGenerator(items.length);

    useEffect(() => {
        setPairs(generatedPairs);
    }, [generatedPairs]);
    const [scores, setScores] = useState({});

    const goToInputPage = useCallback((inputTopic) => {
        setTopic(inputTopic); // Update the topic state
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
