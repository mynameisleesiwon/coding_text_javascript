// 1. 배열 자르기 ❗❗

// 문제 설명
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤num1 < num2 < numbers의 길이

function test1(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// 2. 외계행성의 나이 ❗

// 문제 설명
// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// age는 자연수입니다.
// age ≤ 1,000
// PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.

function test2(age) {
  const alphabet = "abcdefghij"; // 0부터 9까지를 나타내는 알파벳 문자열
  return String(age) // 나이를 문자열로 변환
    .split("") // 각 자릿수별로 나눔
    .map((num) => alphabet[num]) // 해당하는 알파벳으로 변환
    .join(""); // 문자열로 합침
}

// 3. 진료 순서 정하기 ❗❗

// 문제 설명
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 중복된 원소는 없습니다.
// 1 ≤ emergency의 길이 ≤ 10
// 1 ≤ emergency의 원소 ≤ 100

function test3(emergency) {
  // 응급도가 높은 순으로 정렬된 배열의 복사본을 생성합니다.
  const sorted = [...emergency].sort((a, b) => b - a);

  // 원본 배열의 각 원소에 대해 정렬된 배열에서의 인덱스(진료 순서)를 찾아 반환합니다.
  return emergency.map((e) => sorted.indexOf(e) + 1);
}

// 4. 순서쌍의 개수 ❗❗

// 문제 설명
// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 1,000,000

function test4(n) {
  let count = 0;

  // n의 제곱근까지만 확인하면서 나누어 떨어지는지 확인합니다.
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      // i가 n의 약수인 경우
      count++; // (i, n/i) 순서쌍 추가
      if (i !== n / i) {
        // i와 n/i가 서로 다른 숫자일 경우
        count++; // (n/i, i) 역순 순서쌍 추가
      }
    }
  }

  return count;
}
