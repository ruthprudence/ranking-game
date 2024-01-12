// useSortingProcessController.js
import { useState } from 'react';
import SortingProcessModel from '../models/SortingProcessModel';

const useSortingProcessController = (initialState) => {
  const [model] = useState(new SortingProcessModel(initialState));
  
  // Add any specific logic or state-updating functions here

  return { model }; // Return any properties or functions needed
};

export default useSortingProcessController;
