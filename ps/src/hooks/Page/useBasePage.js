import { useState, useEffect, useCallback } from 'react';
import usePairGenerator from '../calculate/usePairGenerator';

const useBasePage = () => {
    const [currentPage, setCurrentPage] = useState('SPLASH_PAGE');
    const [topic, setTopic] = useState('');
    const [items, setItems] = useState([]);
    const [pairs, setPairs] = useState([]);
    const [scores, setScores] = useState({});
    const [loading, setLoading] = useState(true);

    const { pairs: generatedPairs } = usePairGenerator(items ? items.length : 0);

    useEffect(() => {
        console.log('useEffect - items or generatedPairs changed:', { items, generatedPairs });
        if (items && items.length > 0) {
            setPairs(generatedPairs);
            setLoading(false);
        }
    }, [items, generatedPairs]);

    const goToInputPage = useCallback((inputTopic) => {
        setTopic(inputTopic);
        setCurrentPage('INPUT_PAGE');
        console.log('goToInputPage:', { inputTopic, newPage: 'INPUT_PAGE' });
    }, []);

    const goToMatchupPage = useCallback(updatedItems => {
        if (updatedItems) { // Protective check added
            setItems(updatedItems);
        }
        setCurrentPage('MATCHUP_PAGE');
        console.log('goToMatchupPage:', { updatedItems, newPage: 'MATCHUP_PAGE' });
    }, []);

    const goToResultsPage = useCallback(updatedScores => {
        setScores(updatedScores);
        setCurrentPage('RESULTS_PAGE');
        console.log('goToResultsPage:', { updatedScores, newPage: 'RESULTS_PAGE' });
    }, []);

    // Log at every render
    console.log('Rendering useBasePage:', {
        currentPage,
        topic,
        items,
        pairs,
        scores,
        loading
    });

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
