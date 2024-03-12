// 1. 저주의 숫자 3 ❗❗

// 문제 설명
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

// 10진법,	3x 마을에서 쓰는 숫자,	10진법,	3x 마을에서 쓰는 숫자
// 1	1	 6	8
// 2	2	 7	10
// 3	4	 8	11
// 4	5	 9	14
// 5	7	 10	16
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function test1(n) {
  let count = 0; // 3의 배수와 숫자 3을 건너뛰기 위한 카운터 변수
  let result = n; // 결과를 저장할 변수, 초기값은 n으로 설정

  for (let i = 1; count < n; i++) {
    // 만약 i가 3의 배수이거나 i가 10진법에서 3을 포함하고 있지 않다면,
    // count를 증가시키고, 결과에도 반영
    if (i % 3 !== 0 && i.toString().indexOf("3") === -1) {
      count++;
      result = i;
    }
  }

  return result;
}

test1(10);

// 2. 평행 ❗❗❗

// 문제 설명
// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때,
// 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// dots의 길이 = 4
// dots의 원소는 [x, y] 형태이며 x, y는 정수입니다.
// 0 ≤ x, y ≤ 100
// 서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
// 두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
// 임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.

function test2(dots) {
  // 첫 번째 점과 두 번째 점을 지나는 직선과 세 번째 점과 네 번째 점을 지나는 직선의 기울기를 비교합니다.
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
    return 1;
  // 첫 번째 점과 세 번째 점을 지나는 직선과 두 번째 점과 네 번째 점을 지나는 직선의 기울기를 비교합니다.
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
    return 1;
  // 첫 번째 점과 네 번째 점을 지나는 직선과 두 번째 점과 세 번째 점을 지나는 직선의 기울기를 비교합니다.
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
    return 1;
  // 위 조건에 해당하지 않는 경우, 즉 어떤 두 직선도 기울기가 같지 않다면 0을 반환합니다.
  return 0;
}

// 직선의 기울기 계산
function calculateSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}

// 3. 겹치는 선분의 길이 ❗❗❗

// 문제 설명
// 선분 3개가 평행하게 놓여 있습니다.
// 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때,
// 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// lines의 길이 = 3
// lines의 원소의 길이 = 2
// 모든 선분은 길이가 1 이상입니다.
// lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
// -100 ≤ a < b ≤ 100

function test3(lines) {
  // 모든 선분의 시작점과 끝점을 추출하여 events 배열에 저장합니다.
  // 시작점은 +1로, 끝점은 -1로 표시하여 구간의 시작과 끝을 구분합니다.
  let events = [];
  lines.forEach(([start, end]) => {
    events.push({ point: start, type: "start" });
    events.push({ point: end, type: "end" });
  });

  // events 배열을 점의 위치(point)에 따라 오름차순으로 정렬합니다.
  events.sort((a, b) => a.point - b.point);

  let overlapLength = 0; // 겹치는 구간의 길이
  let activeLines = 0; // 현재 겹치는 선분의 개수
  let lastPoint; // 마지막으로 처리한 점의 위치

  // events 배열을 순회하며 겹치는 구간의 길이를 계산합니다.
  events.forEach((event, index) => {
    if (lastPoint !== undefined && activeLines >= 2) {
      // 현재 구간의 길이를 더합니다.
      overlapLength += event.point - lastPoint;
    }
    // 선분의 시작점을 만나면 activeLines를 증가시키고, 끝점을 만나면 감소시킵니다.
    if (event.type === "start") {
      activeLines += 1;
    } else {
      activeLines -= 1;
    }
    // 마지막으로 처리한 점의 위치를 업데이트합니다.
    lastPoint = event.point;
  });

  return overlapLength;
}

// 4. 유한소수 판별하기 ❗❗

// 문제 설명
// 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다.
// 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.
// 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
// 두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// a, b는 정수
// 0 < a ≤ 1,000
// 0 < b ≤ 1,000

function test4(a, b) {
  // 최대 공약수를 구하는 함수
  function gcd(x, y) {
    while (y !== 0) {
      let temp = x % y;
      x = y;
      y = temp;
    }
    return x;
  }

  // 분자와 분모의 최대공약수를 구합니다.
  let greatestCommonDivisor = gcd(a, b);

  // 분모를 최대공약수로 나눠 기약분수로 만듭니다.
  b /= greatestCommonDivisor;

  // 분모를 소인수분해하여 2와 5로만 이루어졌는지 확인합니다.
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }

  // 분모가 1이 되면 기약분수이고, 2와 5로만 이루어졌다면 유한소수입니다.
  if (b === 1) {
    return 1; // 유한소수
  } else {
    return 2; // 무한소수
  }
}
