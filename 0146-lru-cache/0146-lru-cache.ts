/**
put이든 get이든 최근에 포함
최근에 건드린 value가 뒤로 가게
1, 2
2, 1
put할때는 capacity 검사 -> size >= capacity이면 맨 앞 원소 제거 후 마지막에 추가

get할 때는 없으면 -1
있으면 그대로 출력 후 delete로 삭제한 뒤, 맨 끝에 추가
*/

class LRUCache {
    capacity: number;
    cache: Map<number, number>;

    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key: number): number {
        const value = this.cache.get(key);
        if (value === undefined || value === null) {
            return -1;
        }
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        if (this.cache.size >= this.capacity) {
            const oldKey = this.cache.keys().next().value;
            this.cache.delete(oldKey);
        }
        this.cache.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */