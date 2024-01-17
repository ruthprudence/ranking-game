import { useState, useEffect, useCallback } from 'react';
import usePairGenerator from '../calculate/usePairGenerator';

const useBasePage = () => {
    const [currentPage, setCurrentPage] = useState('SPLASH_PAGE');
    const [topic, setTopic] = useState('');
    const [items, setItems] = useState([]);
    const [pairs, setPairs] = useState([]);
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemsUpdated, setItemsUpdated] = useState(false); // New state variable

    const { pairs: generatedPairs } = usePairGenerator(items ? items.length : 0);

    useEffect(() => {
        if (items && items.length > 0) {
            setPairs(generatedPairs);
            setLoading(false);
        }
    }, [items, generatedPairs]);

    const goToInputPage = useCallback((inputTopic) => {
        setTopic(inputTopic);
        setCurrentPage('INPUT_PAGE');
    }, []);

    const goToMatchupPage = useCallback(updatedItems => {
        if (updatedItems) {
            setItems(updatedItems);
            setItemsUpdated(true); // Update state variable when items are updated
        }
        setCurrentPage('MATCHUP_PAGE');
    }, []);

    const updateItemsWithVotes = useCallback(() => {
        const updatedItems = items.map(item => {
            const scoreItem = scores.find(score => score.id === item.id);
            return scoreItem ? { ...item, votes: scoreItem.votes } : item;
        });
        setItems(updatedItems);
    }, [items, scores]);

    const goToResultsPage = useCallback(updatedScores => {
        setScores(updatedScores);
        updateItemsWithVotes(); // Update items with the latest votes
        setCurrentPage('RESULTS_PAGE');
    }, [updateItemsWithVotes]);

    useEffect(() => {
        // Listen for changes in the scores state and update items
        if (scores.length > 0) {
            updateItemsWithVotes();
        }
    }, [scores, updateItemsWithVotes]);

    // Log at every render
    console.log('Rendering useBasePage:', {
        currentPage,
        topic,
        items,
        pairs,
        scores,
        loading,
        itemsUpdated // Include the new state variable in the log
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
        loading,
        itemsUpdated // Expose the new state variable
    };
};

export default useBasePage;
