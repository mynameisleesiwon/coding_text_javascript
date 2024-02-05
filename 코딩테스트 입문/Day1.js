// 1. 두 수의 합

// 문제 설명
// 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.

// 제한사항
// -50,000 ≤ num1 ≤ 50,000
// -50,000 ≤ num2 ≤ 50,000

function test1(num1, num2) {
  var answer = -1;
  if (num1 >= -50000 && num1 <= 50000) {
    if (num2 >= -50000 && num2 <= 50000) {
      answer = num1 + num2;
      return answer;
    } else {
      throw new Error("num1과 num2는 -50,000과 50,000 사이의 값이어야 합니다.");
    }
  }
}

// 2. 두 수의 차

// 문제 설명
// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

// 제한사항
// -50,000 ≤ num1 ≤ 50,000
// -50,000 ≤ num2 ≤ 50,000

function test2(num1, num2) {
  var answer = 0;
  if (num1 >= -50000 && num1 <= 50000) {
    if (num2 >= -50000 && num2 <= 50000) {
      answer = num1 - num2;
      return answer;
    } else {
      throw new Error("num1과 num2는 -50,000과 50,000 사이의 값이어야 합니다.");
    }
  }
}

// 3. 두 수의 곱

// 문제 설명
// 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ num1 ≤ 100
// 0 ≤ num2 ≤ 100

function test3(num1, num2) {
  var answer = 0;
  if (num1 >= 0 && num1 <= 100 && num2 >= 0 && num2 <= 100) {
    answer = num1 * num2;
    return answer;
  } else {
    throw new Error("num1과 num2는 0과 100 사이의 값이어야 합니다.");
  }
}

// 4. 몫 구하기

// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ num1 ≤ 100
// 0 ≤ num2 ≤ 100

function test4(num1, num2) {
  var answer = 0;
  if (num1 >= 0 && num1 <= 100 && num2 >= 0 && num2 <= 100) {
    answer = num1 / num2;
    return parseInt(answer);
  } else {
    throw new Error("num1과 num2는 0과 100 사이의 값이어야 합니다.");
  }
}
