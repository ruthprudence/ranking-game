import { useState, useEffect, useCallback } from 'react';
import usePairGenerator from '../utils/usePairGenerator';

const useBasePage = () => {
    const [currentPage, setCurrentPage] = useState('SPLASH_PAGE');
    const [topic, setTopic] = useState('');
    const [items, setItems] = useState([]);
    const [pairs, setPairs] = useState([]);
    const [scores, setScores] = useState({});

    const { pairs: generatedPairs } = usePairGenerator(items.length);

    useEffect(() => {
        setPairs(generatedPairs);
    }, [generatedPairs]);

    const goToInputPage = useCallback((inputTopic) => {
        setTopic(inputTopic);
        setCurrentPage('INPUT_PAGE');
    }, []);

    const goToMatchupPage = useCallback(updatedItems => {
        setItems(updatedItems);
        if (pairs.length > 0) {
            setCurrentPage('MATCHUP_PAGE');
        }
    }, [pairs]);

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
