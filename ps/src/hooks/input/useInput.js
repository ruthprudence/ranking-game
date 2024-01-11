// /src/hooks/input/useInput.js
import useRows from './useRows';

const useInput = () => {
    const { rows, addRow, removeRow, updateRow } = useRows();

    // Additional input-related logic can go here

    return { rows, addRow, removeRow, updateRow };
};

export default useInput;
