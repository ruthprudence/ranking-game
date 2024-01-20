import { useState, useEffect } from 'react';
import generatePairs from './useGeneratePairs';

const usePairGenerator = (elements = []) => {
    const [pairs, setPairs] = useState([]);

    useEffect(() => {
        setPairs(generatePairs(elements));
    }, [elements]);

    return { pairs };
};

export default usePairGenerator;