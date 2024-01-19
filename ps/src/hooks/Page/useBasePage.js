import { useState, useEffect } from 'react';
import usePairGenerator from '../calculate/usePairGenerator';
import useGoToInputPage from './functions/useGoToInputPage';
import useGoToMatchupPage from './functions/useGoToMatchupPage';
import useGoToResultsPage from './functions/useGoToResultsPage';
import useUpdateItemsWithVotes from './functions/useUpdateItemsWithVotes.js';


const useBasePage = () => {
    const [currentPage, setCurrentPage] = useState('SPLASH_PAGE');
    const [topic, setTopic] = useState('');
    const [items, setItems] = useState([]);
    const [pairs, setPairs] = useState([]);
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemsUpdated, setItemsUpdated] = useState(false); 

    const { pairs: generatedPairs } = usePairGenerator(items ? items.length : 0);

    useEffect(() => {
        if (items && items.length > 0) {
            setPairs(generatedPairs);
            setLoading(false);
        }
    }, [items, generatedPairs]);

    const goToInputPage = useGoToInputPage(setTopic, setCurrentPage);

    const goToMatchupPage = useGoToMatchupPage(setItems, setItemsUpdated, setCurrentPage);

    const updateItemsWithVotes = useUpdateItemsWithVotes(setItems, setItemsUpdated);

    const goToResultsPage = useGoToResultsPage(setItems, setScores, setCurrentPage);
    
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
        itemsUpdated 
    };
};

export default useBasePage;
