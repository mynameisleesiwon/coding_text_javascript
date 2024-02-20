// 1. 나머지 구하기

// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

function test1(num1, num2) {
  var answer = -1;

  if (num1 > 0 && num1 <= 100 && num2 > 0 && num2 <= 100) {
    answer = num1 % num2;
    return answer;
  } else {
    throw new Error("num1과 num2는 0보다 크고 100보다 작거나 같아야합니다.");
  }
}

// 2. 중앙값 구하기❗❗

// 문제 설명
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.
// 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// array의 길이는 홀수입니다.
// 0 < array의 길이 < 100
// -1,000 < array의 원소 < 1,000

function test2(array) {
  if (array.length % 2 === 0) {
    throw new Error("array의 길이는 홀수입니다.");
  } else if (array.length === 0 || array.length >= 100) {
    throw new Error("0 < array의 길이 < 100");
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] <= -1000 || array[i] >= 1000) {
      throw new Error("-1,000 < array의 원소 < 1,000");
    }
  }

  // 배열 오름차순
  array.sort((a, b) => a - b);

  // 배열 가운데 인덱스 구하기
  const middleIndex = Math.floor(array.length / 2);

  return array[middleIndex];
}

// 3. 최빈값 구하기❗❗

// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000

function test3(array) {
  // 변수 선언
  let frequencyMap = {};
  let maxFrequency = 0;
  let mode = [];

  if (array.length === 0 || array.length >= 100) {
    throw new Error("0 < array의 길이 < 100");
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0 || array[i] >= 1000) {
      throw new Error("0 ≤ array의 원소 < 1000");
    }
  }

  // 빈도수를 기록
  array.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;

    // 최대 빈도수 업데이트
    if (frequencyMap[num] > maxFrequency) {
      maxFrequency = frequencyMap[num];
    }
  });

  // 최대 빈도수를 가진 숫자 찾기
  for (const num in frequencyMap) {
    if (frequencyMap[num] === maxFrequency) {
      mode.push(Number(num));
    }
  }

  // 최빈값이 여러 개인지 확인
  if (mode.length === 1) {
    return mode[0];
  } else {
    return -1;
  }
}

// 4. 짝수는 싫어요❗❗

// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function test4(n) {
  const result = [];

  if (n >= 1 && n <= 100) {
    for (let i = 1; i <= n; i += 2) {
      result.push(i);
    }
    return result;
  } else {
    throw new Error("1 ≤ n ≤ 100");
  }
}
