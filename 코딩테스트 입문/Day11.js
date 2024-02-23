// 1. 주사위의 개수

// 문제 설명
// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때,
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// box의 길이는 3입니다.
// box[0] = 상자의 가로 길이
// box[1] = 상자의 세로 길이
// box[2] = 상자의 높이 길이
// 1 ≤ box의 원소 ≤ 100
// 1 ≤ n ≤ 50
// n ≤ box의 원소
// 주사위는 상자와 평행하게 넣습니다.

function test1(box, n) {
  const widthAvailable = Math.floor(box[0] / n);
  const lengthAvailable = Math.floor(box[1] / n);
  const heightAvailable = Math.floor(box[2] / n);

  return widthAvailable * lengthAvailable * heightAvailable;
}

// 2. 합성수 찾기 ❗❗

// 문제 설명
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function isComposite(number) {
  let divisorCount = 0; // 약수의 개수

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      // 나누어 떨어지면 약수
      divisorCount++;
    }
  }

  return divisorCount > 2; // 약수가 2개를 초과하면 합성수
}

function test2(n) {
  let count = 0; // 합성수의 개수를 세는 변수

  for (let i = 2; i <= n; i++) {
    // 1은 합성수가 아니므로 2부터 시작
    if (isComposite(i)) {
      // 합성수인지 확인하는 함수
      count++;
    }
  }

  return count; // 합성수의 총 개수 반환
}

// 3. 최댓값 만들기 (1)

// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100

function test3(numbers) {
  numbers.sort((a, b) => b - a);

  const firstNumber = numbers[0];
  const secondNumber = numbers[1];

  return firstNumber * secondNumber;
}

// 4. 팩토리얼 ❗❗

// 문제 설명
// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
// 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다.
// 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < n ≤ 3,628,800

function test4(n) {
  let i = 1;
  let factorial = 1;

  while (factorial <= n) {
    i++;
    factorial *= i;
  }

  // 마지막에 factorial이 n을 초과했기 때문에, 초과하기 전의 i 값을 반환해야 합니다.
  return i - 1;
}
