function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i+1);
    }
    return s.substring(start, start + maxLength + 1);

    function expand(left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left;

            if (currentLength > maxLength) {
                maxLength = currentLength;
                start = left;
            }
            left--;
            right++;
        }
    }
};
