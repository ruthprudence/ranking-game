export const calculateRankings = (items) => {
    const sortedItems = [...items].sort((a, b) => b.votes - a.votes);
  
    let lastVotes = null;
    let rank = 0;
  
    return sortedItems.map((item, index) => {
      if (item.votes !== lastVotes) {
        rank = index + 1;
        lastVotes = item.votes;
      }
      return { itemName: item.name, score: item.votes, rank };
    });
  };
  