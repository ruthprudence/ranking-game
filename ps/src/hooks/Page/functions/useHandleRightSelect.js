// functions/handleRightChoiceSelect.js
const useHandleRightChoiceSelect = (currentPair, items, handleVote) => {
    return () => {
        if (currentPair && currentPair.length > 1) {
            handleVote(items[currentPair[1]]);
        }
    };
};

export default useHandleRightChoiceSelect;