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
  // 분수의 덧셈
  let sumNumer = numer1 * denom2 + numer2 * denom1;
  let sumDenom = denom1 * denom2;

  // 최대공약수 계산
  const gcdValue = gcd(sumNumer, sumDenom);

  // 기약 분수로 만들기
  sumNumer /= gcdValue;
  sumDenom /= gcdValue;

  // 결과 배열 반환
  return [sumNumer, sumDenom];
}

// 2. 중앙값 구하기 ⭕

// 문제 설명
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.
// 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// array의 길이는 홀수입니다.
// 0 < array의 길이 < 100
// -1,000 < array의 원소 < 1,000

function test2(array) {
  let middleNum = Math.floor(array.length / 2);
  return array.sort((a, b) => a - b)[middleNum];
}
