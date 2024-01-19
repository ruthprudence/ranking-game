import { useState, useEffect } from 'react';
import generatePairs from '../../../../utils/calculations/generatePairs';

const usePairGenerator = (elements = []) => {
    const [pairs, setPairs] = useState([]);

    useEffect(() => {
        setPairs(generatePairs(elements));
    }, [elements]);

    return { pairs };
};

export default usePairGenerator;