// 1. 두 수의 나눗셈

// 문제 설명
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

function test1(num1, num2) {
  var answer = 0;

  if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100) {
    answer = (num1 / num2) * 1000;
    return parseInt(answer);
  } else {
    throw new Error("num1과 num2는 0보다 크고 100보다 작거나 같아야 합니다.");
  }
}

// 2. 숫자 비교하기

// 문제 설명
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ num1 ≤ 10,000
// 0 ≤ num2 ≤ 10,000

function test2(num1, num2) {
  if (num1 >= 0 && num1 <= 10000 && num2 >= 0 && num2 <= 10000) {
    if (num1 === num2) {
      return 1;
    } else {
      return -1;
    }
  } else {
    throw new Error(
      "num1과 num2는 0보다 크거나 같고 10000보다 작거나 같아야합니다."
    );
  }
}

// 3. 분수의 덧셈❗❗

// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function test3(numer1, denom1, numer2, denom2) {
  if (
    numer1 > 0 &&
    numer1 < 1000 &&
    numer2 > 0 &&
    numer2 < 1000 &&
    denom1 > 0 &&
    denom1 < 1000 &&
    denom2 > 0 &&
    denom2 < 1000
  ) {
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
  } else {
    throw new Error("각 매개변수는 0보다 크고 1000보다 작습니다.");
  }
}

// 4. 배열 두배 만들기

// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 1 ≤ numbers의 길이 ≤ 1,000

function test4(numbers) {
  var answer = [];

  // numbers의 길이가 1 이상 1000 이하인지 검사
  if (numbers.length >= 1 && numbers.length <= 1000) {
    // numbers 배열의 각 요소에 대해 처리
    numbers.map((number) => {
      // 원소가 -10,000부터 10,000 사이에 속하는지 확인
      if (number >= -10000 && number <= 10000) {
        answer.push(number * 2); // 해당 범위 내에 있으면 2배로 만들어 answer 배열에 추가
      } else {
        throw new Error("원소는 -10,000부터 10,000 사이에 있어야 합니다.");
      }
    });
    return answer;
  } else {
    throw new Error("numbers 배열의 길이는 1 이상 1000 이하여야 합니다.");
  }
}
