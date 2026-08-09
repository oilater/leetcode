const add = (a: number, b: number) => a + b;
const substract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

const parseToken = (operator: string) => {
    if (operator === '+') return add;
    if (operator === '-') return substract;
    if (operator === '*') return multiply;
    if (operator === '/') return divide;
    return null;
}

function evalRPN(tokens: string[]): number {
    const stack = [];

    for (const token of tokens) {
        const operator = parseToken(token);
        if (operator === null) {
            stack.push(Number(token));
            continue;
        }
        const last = stack.pop();
        const first = stack.pop();
        
        const value = Math.trunc(operator(first, last));
        stack.push(value);
    }
    return stack.at(-1);
};