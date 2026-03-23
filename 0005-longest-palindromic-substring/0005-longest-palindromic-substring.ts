function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
    let res = '';

    for (let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i+1);
    }
    return res;

    function expand(left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentStr = s.substring(left, right + 1);
            if (currentStr.length > res.length) {
                res = currentStr;
            }
            left--;
            right++;
        }
    }
};