import { useState, useEffect, useCallback } from 'react';
import usePairGenerator from '../utils/usePairGenerator';
import { generatePairs } from '../utils/generatePairs'; 

const useBasePage = () => {
    const [currentPage, setCurrentPage] = useState('SPLASH_PAGE');
    const [topic, setTopic] = useState('');
    const [items, setItems] = useState([]);
    const [pairs, setPairs] = useState([]);
    const [scores, setScores] = useState({});

    const [loading, setLoading] = useState(true);

    const { pairs: generatedPairs } = usePairGenerator(items ? items.length : 0);

    useEffect(() => {
        if (items && items.length > 0) {
            setPairs(generatePairs(generatedPairs));
            setLoading(false);
        }
    }, [items, generatedPairs]);

    const goToInputPage = useCallback((inputTopic) => {
        setTopic(inputTopic);
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
        pairs,
        setPairs,
        scores,
        setScores,
        goToInputPage,
        goToMatchupPage,
        goToResultsPage,
        loading
    };
};

export default useBasePage;
