// useTopicManagement.js
import { useState, useCallback } from 'react';

const useTopicManagement = (onSubmitTopic) => {
    const [topic, setTopic] = useState('');

    const handleChange = useCallback((e) => {
        setTopic(e.target.value);
    }, []);

    const isTopicValid = useCallback(() => {
        return topic.trim().length > 0;
    }, [topic]);

    const handleSubmitTopic = useCallback(() => {
        if (isTopicValid()) {
            onSubmitTopic(topic);
        } else {
            alert('Please enter a valid topic.');
        }
    }, [topic, isTopicValid, onSubmitTopic]);

    return { topic, handleChange, handleSubmitTopic };
};

export default useTopicManagement;
