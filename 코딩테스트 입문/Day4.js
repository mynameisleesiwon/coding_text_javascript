// 1. 피자 나눠 먹기 (1)

// 문제 설명
// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때,
// 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요

// 제한사항
// 1 ≤ n ≤ 100

function test1(n) {
  var answer = 0;
  if (n >= 1 && n <= 100) {
    answer = Math.ceil(n / 7);
    return answer;
  } else {
    throw new Error("1 ≤ n ≤ 100");
  }
}

// 2. 피자 나눠 먹기 (2)

// 문제 설명
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ n ≤ 100

// 최대 공약수 계산
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// 두 수의 최소공배수는 두 수의 곱을 최대공약수로 나눈 값
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function test2(n) {
  var answer = 0;
  if (n >= 1 && n <= 100) {
    answer = lcm(n, 6) / 6;
    return answer;
  } else {
    throw new Error("1 ≤ n ≤ 100");
  }
}

// 3. 피자 나눠 먹기 (3)

// 문제 설명
// 머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다.
// 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때,
// n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ slice ≤ 10
// 1 ≤ n ≤ 100

function test3(slice, n) {
  var answer = 0;
  if (slice < 2 || slice > 10) {
    throw new Error("2 ≤ slice ≤ 10");
  } else if (n < 1 || n > 100) {
    throw new Error("1 ≤ n ≤ 100");
  } else {
    answer = Math.ceil(n / slice);
    return answer;
  }
}

// 4. 배열의 평균값

// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100

function test4(numbers) {
  var answer = 0;
  var total = 0;
  var arrayLength = numbers.length;

  if (numbers.length < 1 || numbers.length > 100) {
    throw new Error("1 ≤ numbers의 길이 ≤ 100");
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0 || numbers[i] > 1000) {
      throw new Error("0 ≤ array의 원소 ≤ 1,000");
    }
  }

  numbers.map((a) => (total = total + a));

  answer = total / arrayLength;

  return answer;
}
