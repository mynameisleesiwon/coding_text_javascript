// 1. 모음 제거 ❗

// 문제 설명
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000

function test1(my_string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const stringToArray = my_string.split("");
  const newArray = [];

  stringToArray.forEach((element) => {
    if (!vowels.includes(element)) {
      newArray.push(element);
    }
  });

  return newArray.join("");

  // return my_string.split("").filter(char => !vowels.includes(char)).join("");
  // return my_string.replace(/[aeiou]/g, '');
}

// 2. 문자열 정렬하기 (1) ❗

// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때,
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// my_string에는 숫자가 한 개 이상 포함되어 있습니다.
// my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.

function test2(my_string) {
  const stringToArray = my_string.split("");
  const newArray = [];
  stringToArray.map((item) => {
    if (!isNaN(item) && item !== " ") {
      newArray.push(parseInt(item));
    }
  });
  return newArray.sort((a, b) => a - b);
}

// 3. 숨어있는 숫자의 덧셈 (1)

// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다.
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다

function test3(my_string) {
  let answer = 0;
  my_string.split("").filter((item) => {
    if (!isNaN(item)) {
      answer += parseInt(item);
    }
  });
  return answer;
}

// 4. 소인수분해 ❗❗

// 문제 설명
// 소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다.
// 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다.
// 따라서 12의 소인수는 2와 3입니다.
// 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ n ≤ 10,000

function test4(n) {
  let factors = []; // 소인수를 저장할 빈 배열을 초기화합니다.
  let lastFactor = 0; // 마지막으로 추가된 소인수를 추적합니다.

  // 2부터 시작하여 n의 제곱근 이하의 모든 수에 대해 반복합니다.
  for (let i = 2; i * i <= n; i++) {
    // n이 i로 나누어 떨어지는 동안 반복합니다.
    while (n % i === 0) {
      // 중복된 소인수가 아니라면 배열에 추가합니다.
      if (lastFactor !== i) {
        factors.push(i); // i를 소인수 배열에 추가합니다.
        lastFactor = i; // 마지막으로 추가된 소인수를 업데이트합니다.
      }
      n /= i; // n을 i로 나눈 값을 다시 n에 할당하여 업데이트합니다.
    }
  }

  // 모든 소수들로 나누어 보고 남은 n이 1보다 크고
  // 마지막으로 추가된 소인수가 아니라면 배열에 추가합니다.
  if (n > 1 && lastFactor !== n) {
    factors.push(n);
  }

  // 완성된 소인수 배열을 반환합니다.
  return factors;
}
