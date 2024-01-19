// functions/handleLeftChoiceSelect.js
const useHandleLeftChoiceSelect = (currentPair, items, handleVote) => {
    return () => {
        if (currentPair && currentPair.length > 0) {
            handleVote(items[currentPair[0]]);
        }
    };
};

export default useHandleLeftChoiceSelect;