// src/controller/TopicController.js

export const handleTopicSubmission = (topic, setShowInput, setTopic) => {
    // Assuming setShowInput and setTopic are setState functions from PrioritySorter
    setTopic(topic); // Set the submitted topic
    setShowInput(false); // Hide the topic input view
};
