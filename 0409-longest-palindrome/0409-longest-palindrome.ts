/**
짝수인 항목들 모두 더함
홀수인 항목 있으면 하나만 더함
5 -> 4
 */

function longestPalindrome(s: string): number {
    const obj = {};

    for (const word of s) {
        obj[word] = (obj[word] || 0) + 1;
    }

    let sum = 0;
    let hasOdd = false;
    for (const key in obj) {
        if (obj[key] % 2 === 0) {
            sum += obj[key];
        } else {
            sum += (obj[key] - 1);
            hasOdd = true;
        }
    }
    
    if (hasOdd) sum += 1;

    return sum;
};