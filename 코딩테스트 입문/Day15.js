// 1. 영어가 싫어요 ❗❗

// 문제 설명
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// numbers는 소문자로만 구성되어 있습니다.
// numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
// 1 ≤ numbers의 길이 ≤ 50
// "zero"는 numbers의 맨 앞에 올 수 없습니다.

function test1(numbers) {
  const numWords = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  // Object.keys
  // 자바스크립트에서 객체의 모든 열거 가능한 속성의 이름(키)들을 배열로 반환하는 메소드
  Object.keys(numWords).forEach((key) => {
    // 문자열을 특정 단어 기준으로 나눈 뒤, 그 단어를 다른 문자열로 대체하여 다시 합치는 과정
    numbers = numbers.split(key).join(numWords[key]);
  });

  return parseInt(numbers);
}

// 2. 인덱스 바꾸기

// 문제 설명
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 < my_string의 길이 < 100
// 0 ≤ num1, num2 < my_string의 길이
// my_string은 소문자로 이루어져 있습니다.
// num1 ≠ num2

function test2(my_string, num1, num2) {
  const stringToArray = my_string.split("");
  const index1 = stringToArray[num1];
  const index2 = stringToArray[num2];

  stringToArray[num1] = index2;
  stringToArray[num2] = index1;

  return stringToArray.join("");
}

// 3. 한 번만 등장한 문자 ❗❗

// 문제 설명
// 문자열 s가 매개변수로 주어집니다.
// s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// 제한사항
// 0 < s의 길이 < 1,000
// s는 소문자로만 이루어져 있습니다.

function test3(s) {
  // 문자열을 배열로 변환
  const characters = s.split("");

  // 한 번만 등장하는 문자들을 필터링
  const uniqueChars = characters.filter(
    (char, index, arr) => arr.indexOf(char) === arr.lastIndexOf(char)
  );

  // 필터링된 문자들을 사전 순으로 정렬하고 문자열로 합쳐서 반환
  return uniqueChars.sort().join("");
}

// 4. 약수 구하기

// 문제 설명
// 정수 n이 매개변수로 주어질 때,
// n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 10,000

function test4(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i);
    }
  }
  return answer;
}
