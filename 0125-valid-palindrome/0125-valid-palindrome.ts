/**
 * @param {string} s
 * @return {boolean}
 1. 일단 알파벳 아닌 것들은 제거하기 (알파벳에 포함되지 않았다면 제거)
 2. 투포인터로 돌면서 체크
 3. s의 길이: 200,000
 /^[A-Za-z]$/
 */
var isPalindrome = function(s) {
    const filtered = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let first = 0;
    let last = filtered.length - 1;

    while (first < last) {
        if (filtered[first] !== filtered[last]) {
            return false;
        }

        first++;
        last--;
    }

    return true;
};