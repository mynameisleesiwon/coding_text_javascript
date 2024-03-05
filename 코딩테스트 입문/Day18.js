// 1. 문자열안에 문자열 ❗

// 문제 설명
// 문자열 str1, str2가 매개변수로 주어집니다.
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ str1의 길이 ≤ 100
// 1 ≤ str2의 길이 ≤ 100
// 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.

function test1(str1, str2) {
  // let str1ToArray = str1.split(" ");
  // let str1ToArrayUsingStr2 = str1.split(str2);
  // if (str1ToArray.length == str1ToArrayUsingStr2.length) {
  //   return 2;
  // } else {
  //   return 1;
  // }
  return str1.includes(str2) ? 1 : 2;
}

// 2. 제곱수 판별하기 ❗

// 문제 설명
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
// 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 1,000,000

function test2(n) {
  const sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? 1 : 2;
  // let answer = 2;
  // for (let i = 1; i < n; i++) {
  //   if (n == i * i) {
  //     answer = 1;
  //     break;
  //   }
  // }
  // return answer;
}

// 3. 세균 증식

// 문제 설명
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다.
// 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 10
// 1 ≤ t ≤ 15

function test3(n, t) {
  let answer = n;

  for (let i = 1; i <= t; i++) {
    answer *= 2;
  }

  return answer;

  // return n * Math.pow(2, t);
}

// 4. 문자열 정렬하기 (2)

// 문제 설명
// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
// my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < my_string 길이 < 100

function test4(my_string) {
  let myStringToLowerCase = my_string.toLowerCase();
  let myStringToArray = myStringToLowerCase.split("");

  return myStringToArray.sort().join("");
}
