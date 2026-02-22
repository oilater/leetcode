function maxProfit(prices: number[]): number {
    let pivot = 987_654_321;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < pivot) {
            pivot = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - pivot);
        }
    }
    
    return profit;
};