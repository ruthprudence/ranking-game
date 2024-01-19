// functions/handleVote.js
const useHandleVote = (handleChoiceSelection) => {
    return (chosenItem) => {
        const itemId = chosenItem.id;
        handleChoiceSelection(itemId);
    };
};

export default useHandleVote;