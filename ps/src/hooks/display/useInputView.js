// useInputView.js
import { useCallback } from 'react';

const useInputView = (onUpdateRow, onRemoveRow) => {
  const handleValueChange = useCallback((index, value) => {
    onUpdateRow(index, value);
  }, [onUpdateRow]);

  const handleRemove = useCallback((index) => {
    onRemoveRow(index);
  }, [onRemoveRow]);

  return { handleValueChange, handleRemove };
};

export default useInputView;
