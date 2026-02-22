/**
한번에 1 또는 2계단씩 오를 수 있는데
정상까지 갈 수 있는 방법의 수 구하기

1<= n <= 45

1+1
2

1+1+1
1+2
2+1

1+1+1+1
1+1+2
1+2+1
2+1+1
2+2

1+1+1+1+1
1+1+1+2
1+1+2+1
1+2+1+1
2+1+1+1
1+2+2
2+1+2
2+2+1

1 -> 1
2 -> 2
3 -> 3
4 -> 5
5 -> 8
피보나치 수열
 */

function climbStairs(n: number): number {
  if (n <= 2) return n;
  
  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
	let third = first + second;
	first = second;
	second = third;
  }
  return second;
};