/**
11
 1
 0 

더한 값은 0 or 1
1 저장
다음 자리수에는 a + b + carry
근데 이걸 %2 한걸 넣어야 함
carry에는 2로 나눈 몫을 저장

포인터가 length-1부터 시작
1개? 2개?

a, b 중 하나가 더 먼저 끝나는 경우
a, b 포인터를 만들자
carry가 있다면 다음 문자에 그걸 넣어야함

-> 이건 조건문과 연산자에 대한 이해가 부족한거임

|| 는 하나라도 true라면 true가 된다
그니까 하나라도 있으면 계속 돌리라는 뜻

반복
 */

function addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = '';

    while (i >= 0 || j >= 0 || carry) {
        // 기본적으로 carry를 넣고 시작함
        let sum = carry;

        if (i >= 0) sum += Number(a[i]);
        if (j >= 0) sum += Number(b[j]);
        
        res = (sum % 2) + res; // 현재 자리수 0
        // carry에는 2로 나눈 몫 저장
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }
    return res;
};