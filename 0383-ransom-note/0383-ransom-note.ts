function canConstruct(ransomNote: string, magazine: string): boolean {
    const obj = {};

    for (const key of magazine) {
        obj[key] = (obj[key] || 0) + 1;
    }

    for (const key of ransomNote) {
        if (obj[key] === 0 || obj[key] === undefined) {
            return false;
        }

        obj[key] = (obj[key] || 0) - 1;
    }

    return true;
};