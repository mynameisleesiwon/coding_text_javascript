// 1. 숫자 찾기 ❗

// 문제 설명
// 정수 num과 k가 매개변수로 주어질 때,
// num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < num < 1,000,000
// 0 ≤ k < 10
// num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

function test1(num, k) {
  let numToStringToArray = String(num).split("");
  let kToString = String(k);
  let answer = -1;

  for (let i = 0; i < numToStringToArray.length; i++) {
    if (numToStringToArray[i] === kToString) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}

// 2. n의 배수 고르기

// 문제 설명
// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때,
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 10,000
// 1 ≤ numlist의 크기 ≤ 100
// 1 ≤ numlist의 원소 ≤ 100,000

function test2(n, numlist) {
  return numlist.filter((item) => item % n == 0);
}

// 3. 자릿수 더하기

// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000

function test3(n) {
  const newArray = String(n).split("");
  let answer = 0;

  newArray.forEach((item) => {
    answer += parseInt(item);
  });

  return answer;
}

// 4. OX퀴즈

// 문제 설명
// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
// 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
// 1 ≤ quiz의 길이 ≤ 10
// X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
// X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
// -10,000 ≤ X, Y ≤ 10,000
// -20,000 ≤ Z ≤ 20,000
// [연산자]는 + 와 - 중 하나입니다.

function test4(quiz) {
  let answer = [];

  for (let i = 0; i < quiz.length; i++) {
    let question = quiz[i].split(" ");
    let left = parseInt(question[0]);
    let operator = question[1];
    let right = parseInt(question[2]);
    let result = parseInt(question[4]);

    if (operator == "+") {
      if (left + right == result) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    } else if (operator == "-") {
      if (left - right == result) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }
  }

  return answer;
}
