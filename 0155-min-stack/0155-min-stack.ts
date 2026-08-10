interface Value {
    num: number;
    min: number;
}

class MinStack {
    stack: Value[];

    constructor() {
        this.stack = [];
    }

    push(value: number): void {
        const previous = this.stack.at(-1);
        
        const node = {
            num: value,
            min: previous ? Math.min(previous.min, value) : value,
        };
        this.stack.push(node);
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack.at(-1).num;
    }

    getMin(): number {
        return this.stack.at(-1).min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */