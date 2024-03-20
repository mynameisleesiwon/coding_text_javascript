// 1. 문자열 밀기

// 문제 설명
// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
//이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때,
// A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < A의 길이 = B의 길이 < 100
// A, B는 알파벳 소문자로 이루어져 있습니다.

function test1(A, B) {
  // A와 B가 같은 경우, 바로 0 반환
  if (A === B) return 0;

  let aToArray = A.split("");

  let count = 0;
  for (let i = 0; i < aToArray.length; i++) {
    if (aToArray.join("") == B) {
      return count;
    } else {
      aToArray.unshift(aToArray.pop());
      count += 1;
    }
  }

  // 루프를 모두 돌았음에도 B를 만들지 못한 경우
  return -1;
}

// 2. 종이 자르기

// 문제 설명
// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다.
// 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.
// 정수 M, N이 매개변수로 주어질 때,
// M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < M, N < 100
// 종이를 겹쳐서 자를 수 없습니다.

function test2(M, N) {
  if (M == 1 && N == 1) return 0;

  return M - 1 + (N - 1) * M;

  // 전체 크기에서 1을 빼면 최소 가위질 횟수가 됩니다.
  // return (M * N) - 1;
}

// 3. 연속된 수의 합 ❗❗

// 문제 설명
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다.
// 두 정수 num과 total이 주어집니다.
// 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 제한사항
// 1 ≤ num ≤ 100
// 0 ≤ total ≤ 1000
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

function test3(num, total) {
  // 연속된 수의 평균을 구합니다.
  let avg = total / num;

  // 결과를 저장할 배열을 선언합니다.
  let result = [];

  // num이 홀수인 경우와 짝수인 경우를 구분하여 시작점을 찾습니다.
  // 홀수인 경우 (num % 2 !== 0):
  // 연속된 정수들의 평균은 그 중간값이 됩니다.
  // 예를 들어, 1, 2, 3의 평균은 2이고, 이는 정확히 중간값입니다.
  // 따라서 num이 홀수일 때, 평균값에서 (num - 1) / 2를 빼면 시작점을 얻을 수 있습니다.
  // 여기서 (num - 1) / 2는 중간값 양쪽에 있는 숫자의 개수입니다.
  // Math.floor를 사용하는 이유는 시작점이 항상 정수가 되어야 하기 때문입니다.

  // 짝수인 경우 (num % 2 === 0):
  // 연속된 정수들의 평균은 중간 두 수의 평균값이 됩니다.
  // 예를 들어, 1, 2, 3, 4의 평균은 2.5이고, 이는 2와 3의 중간값입니다.
  // num이 짝수일 때, 평균값에서 num / 2를 빼고, 그 결과값의 바로 다음 정수가 시작점이 됩니다.
  // 이때 Math.ceil을 사용하는 이유는, 평균값에서 num / 2를 뺀 값이 항상 시작점보다 작거나 같기 때문에, 시작점을 찾기 위해선 이 값을 올림해야 합니다.
  let start =
    num % 2 === 0 ? Math.ceil(avg - num / 2) : Math.floor(avg - (num - 1) / 2);

  // 시작점부터 num개의 연속된 정수를 배열에 추가합니다.
  for (let i = 0; i < num; i++) {
    result.push(start + i);
  }

  // 결과 배열을 반환합니다.
  return result;
}

// 4. 다음에 올 숫자 ❗

// 문제 설명
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때,
// 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 < common의 길이 < 1,000
// -1,000 < common의 원소 < 2,000
// common의 원소는 모두 정수입니다.
// 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
// 등비수열인 경우 공비는 0이 아닌 정수입니다.

function test4(common) {
  // let rules = [];

  // for (let i = common.length - 1; i > 0; i--) {
  //   rules.push(common[i] - common[i - 1]);
  // }

  // if (rules[0] == rules[1]) {
  //   return common.pop() + (common[1] - common[0]);
  // } else {
  //   return common.pop() + rules[0] * (rules[0] / rules[1]);
  // }

  // 마지막 두 원소의 차이를 계산합니다.
  let diff = common[common.length - 1] - common[common.length - 2];
  // 마지막 두 원소의 비율을 계산합니다 (등비수열일 경우).
  let ratio = common[common.length - 1] / common[common.length - 2];

  // 첫 번째와 두 번째 원소의 차이를 계산합니다.
  let initialDiff = common[1] - common[0];

  // 첫 번째와 두 번째 원소의 비율을 계산합니다 (등비수열일 경우).
  let initialRatio = common[1] / common[0];

  // 등차수열인 경우
  if (diff === initialDiff) {
    return common[common.length - 1] + diff;
  }
  // 등비수열인 경우
  else if (ratio === initialRatio) {
    return common[common.length - 1] * ratio;
  }
}
