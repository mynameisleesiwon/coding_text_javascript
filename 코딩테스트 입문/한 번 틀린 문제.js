// 1. 분수의 덧셈 ❌

// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000

function gcd(a, b) {
  // 기저 조건: b가 0이 되면, a가 최대공약수가 됩니다.
  if (b === 0) return a;

  // 재귀 호출: a를 b로 나눈 나머지(r)를 구하고,
  // 이제 b와 r의 최대공약수를 찾는 문제로 변환합니다.
  // 유클리드 호제법에 따르면, gcd(a, b) = gcd(b, r) 이 됩니다.
  // 이 과정을 b가 0이 될 때까지 반복합니다.
  return gcd(b, a % b);
}

function test1(numer1, denom1, numer2, denom2) {
  let sumNumer = numer1 * denom2 + numer2 * denom1;
  let sumDenom = denom1 * denom2;

  let gcbValue = gcb(sumNumer, sumDenom);

  sumNumer /= gcbValue;
  sumDenom /= gcbValue;

  return [sumNumer, sumDenom];
}
