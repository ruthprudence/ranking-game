// DisplayController.js
import { getAdjustedRankingsData } from '../models/DisplayModel';

const DisplayController = {
  getRankings(scores) {
    return getAdjustedRankingsData(scores);
  }
};

export default DisplayController;
