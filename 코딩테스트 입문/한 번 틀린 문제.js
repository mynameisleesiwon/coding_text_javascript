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

// 3. 최빈값 구하기 ⭕

// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때,
// 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000

function test3(array) {
  let newArray = []; // 중복을 제거한 값들을 저장할 배열
  let mode = 0; // 최빈값을 저장할 변수
  let count = 0; // 현재 숫자의 빈도수를 세기 위한 카운터
  let modeCount = 0; // 최빈값의 빈도수를 저장할 변수

  // 배열에서 중복을 제거하여 newArray를 생성
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  // newArray의 각 요소에 대해 원본 배열에서의 빈도수를 계산
  for (let i = 0; i < newArray.length; i++) {
    for (let k = 0; k < array.length; k++) {
      if (newArray[i] == array[k]) {
        count += 1; // 현재 요소의 빈도수 증가
      }
    }

    // 새로운 최빈값을 찾았을 경우
    if (count > modeCount) {
      modeCount = count; // 최빈값의 빈도수 업데이트
      mode = newArray[i]; // 새로운 최빈값 저장
    }
    // 현재 최빈값과 동일한 빈도수의 다른 값이 있을 경우
    else if (count == modeCount) {
      mode = -1; // 최빈값이 여러 개임을 표시하기 위해 -1로 설정
    }
    count = 0; // 다음 요소의 빈도수 계산을 위해 카운터 초기화
  }

  // 최종적으로 결정된 최빈값 반환
  return mode;
}

// 4. 짝수는 싫어요 ⭕

// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function test4(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    // 1부터 n까지 반복
    if (i % 2 !== 0) {
      // i가 홀수인 경우
      answer.push(i); // answer 배열에 추가
    }
  }
  return answer; // 이미 오름차순으로 정렬된 배열 반환
}

// 5. 피자 나눠 먹기 (2) ⭕

// 문제 설명
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ n ≤ 100

function gcd(a, b) {
  if (a == 0) return b;

  return gcd(b % a, a);
}

function test5(n) {
  let gcdValue = gcd(n, 6); // n과 6의 최대공약수를 구함
  let minPizzas = (n * 6) / gcdValue / 6; // 최소 필요한 피자 판 수 계산

  return minPizzas; // 최소 필요한 피자 판 수 반환
}
