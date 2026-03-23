function myAtoi(s: string): number {
    let str = s.trim();
    let sign = 1;
    let i = 0;
    
    if (str[0] === '-' || str[0] === '+') {
        sign = str[0] === '-' ? -1 : 1;
        i = 1;
    } else {
        i = 0;
    }

    let res = '';
    for (; i < str.length; i++) {
        const char = str[i];
        if (char < '0' || char > '9') break;
        res += char;
    }
    if (res.length === 0) return 0;
    let parsed = parseInt(res);
    parsed *= sign;
    
    const MAX_INT = 2 ** 31 - 1;
    const MIN_INT = - (2 ** 31);

    if (parsed > MAX_INT) return MAX_INT;
    if (parsed < MIN_INT) return MIN_INT;
    
    return parsed;
};