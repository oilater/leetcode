function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(987_654_321);
    dp[0] = 0;

    for (let i = 0; i <= amount; i++) {
        for (const coin of coins) {
            if (i < coin) continue
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount] === 987_654_321 ? -1 : dp[amount];
};