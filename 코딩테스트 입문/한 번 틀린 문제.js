// 1. 분수의 덧셈 ❌

// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000

function gcd(a, b) {
  // 기저 조건: b가 0이 되면, a가 최대공약수가 됩니다.
  if (b === 0) return a;

  // 재귀 호출: a를 b로 나눈 나머지(r)를 구하고,
  // 이제 b와 r의 최대공약수를 찾는 문제로 변환합니다.
  // 유클리드 호제법에 따르면, gcd(a, b) = gcd(b, r) 이 됩니다.
  // 이 과정을 b가 0이 될 때까지 반복합니다.
  return gcd(b, a % b);
}

function test1(numer1, denom1, numer2, denom2) {
  // 분수의 덧셈
  let sumNumer = numer1 * denom2 + numer2 * denom1;
  let sumDenom = denom1 * denom2;

  // 최대공약수 계산
  const gcdValue = gcd(sumNumer, sumDenom);

  // 기약 분수로 만들기
  sumNumer /= gcdValue;
  sumDenom /= gcdValue;

  // 결과 배열 반환
  return [sumNumer, sumDenom];
}

// 2. 중앙값 구하기 ⭕

// 문제 설명
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다.
// 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// array의 길이는 홀수입니다.
// 0 < array의 길이 < 100
// -1,000 < array의 원소 < 1,000

function test2(array) {
  let middleNum = Math.floor(array.length / 2);
  return array.sort((a, b) => a - b)[middleNum];
}

// 3. 최빈값 구하기 ⭕

// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때,
// 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000

function test3(array) {
  let newArray = []; // 중복을 제거한 값들을 저장할 배열
  let mode = 0; // 최빈값을 저장할 변수
  let count = 0; // 현재 숫자의 빈도수를 세기 위한 카운터
  let modeCount = 0; // 최빈값의 빈도수를 저장할 변수

  // 배열에서 중복을 제거하여 newArray를 생성
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }

  // newArray의 각 요소에 대해 원본 배열에서의 빈도수를 계산
  for (let i = 0; i < newArray.length; i++) {
    for (let k = 0; k < array.length; k++) {
      if (newArray[i] == array[k]) {
        count += 1; // 현재 요소의 빈도수 증가
      }
    }

    // 새로운 최빈값을 찾았을 경우
    if (count > modeCount) {
      modeCount = count; // 최빈값의 빈도수 업데이트
      mode = newArray[i]; // 새로운 최빈값 저장
    }
    // 현재 최빈값과 동일한 빈도수의 다른 값이 있을 경우
    else if (count == modeCount) {
      mode = -1; // 최빈값이 여러 개임을 표시하기 위해 -1로 설정
    }
    count = 0; // 다음 요소의 빈도수 계산을 위해 카운터 초기화
  }

  // 최종적으로 결정된 최빈값 반환
  return mode;
}

// 4. 짝수는 싫어요 ⭕

// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function test4(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    // 1부터 n까지 반복
    if (i % 2 !== 0) {
      // i가 홀수인 경우
      answer.push(i); // answer 배열에 추가
    }
  }
  return answer; // 이미 오름차순으로 정렬된 배열 반환
}

// 5. 피자 나눠 먹기 (2) ⭕

// 문제 설명
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ n ≤ 100

function gcd(a, b) {
  if (a == 0) return b;

  return gcd(b % a, a);
}

function test5(n) {
  let gcdValue = gcd(n, 6); // n과 6의 최대공약수를 구함
  let minPizzas = (n * 6) / gcdValue / 6; // 최소 필요한 피자 판 수 계산

  return minPizzas; // 최소 필요한 피자 판 수 반환
}

// 6. 배열 자르기 ⭕

// 문제 설명
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤ num1 < num2 < numbers의 길이

function test6(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// 7. 외계행성의 나이 ⭕

// 문제 설명
// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// age는 자연수입니다.
// age ≤ 1,000
// PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.

function test7(age) {
  // PROGRAMMERS-962 행성에서 사용하는 나이 표기법을 객체로 정의합니다.
  const PROGRAMMERS_AGE = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  // 최종적으로 반환할 문자열을 담을 변수를 선언합니다.
  let answer = "";
  // 주어진 나이를 문자열로 변환한 후, 각 문자를 배열의 요소로 분리합니다.
  let newArray = age.toString().split("");

  // 분리된 문자 배열을 순회하면서 각 숫자에 해당하는 알파벳으로 변환합니다.
  newArray.forEach((item) => {
    // 변환된 알파벳을 answer 문자열에 추가합니다.
    answer += PROGRAMMERS_AGE[item];
  });

  // 모든 숫자를 알파벳으로 변환한 문자열을 반환합니다.
  return answer;
}

// 8. 진료순서 정하기 ⭕

// 문제 설명
// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 중복된 원소는 없습니다.
// 1 ≤ emergency의 길이 ≤ 10
// 1 ≤ emergency의 원소 ≤ 100

function test8(emergency) {
  // 새로운 객체를 생성합니다. 이 객체는 각 응급도의 순위를 저장하는 용도로 사용됩니다.
  let emergencyObject = new Object();

  // emergency 배열의 각 원소에 대해 반복합니다.
  emergency.forEach((item) => {
    // 현재 원소의 순위를 나타낼 변수입니다. 초기 순위는 1로 시작합니다.
    let ranking = 1;
    // 다시 emergency 배열을 반복하며 현재 원소와 다른 원소들을 비교합니다.
    for (let i = 0; i < emergency.length; i++) {
      // 현재 원소가 비교 대상 원소보다 응급도가 낮은 경우,
      // 즉, 비교 대상 원소의 응급도가 더 높은 경우 순위를 1 증가시킵니다.
      if (item < emergency[i]) {
        ranking += 1;
      }
    }
    // 계산된 순위를 emergencyObject 객체에 저장합니다.
    // 객체의 키로는 원소의 응급도를 사용하고, 값으로는 계산된 순위를 사용합니다.
    emergencyObject[item] = ranking;
  });

  // emergency 배열의 각 원소에 대해 emergencyObject에서 해당 원소의 순위를 찾아
  // 새로운 배열을 생성합니다. 이 배열은 각 원소의 응급도 순위를 담고 있습니다.
  let answer = emergency.map((item) => (item = emergencyObject[item]));

  // 최종적으로 계산된 순위 배열을 반환합니다.
  return answer;
}

// 9. 순서쌍의 개수 ⭕

// 문제 설명
// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 1,000,000

function test9(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  return count;
}

// 10. 개미 군단 ⭕

// 문제 설명
// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다.
// 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다.
// 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만,
// 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다.
// 사냥감의 체력 hp가 매개변수로 주어질 때,
// 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// hp는 자연수입니다.
// 0 ≤ hp ≤ 1000

function test10(hp) {
  let count = 0;

  while (hp > 0) {
    if (hp / 5 >= 1) {
      count += parseInt(hp / 5);
      hp = hp % 5;
    } else if (hp / 3 >= 1) {
      count += parseInt(hp / 3);
      hp = hp % 3;
    } else if (hp / 1 >= 1) {
      count += hp / 1;
      hp = hp % 1;
    }
  }

  return count;
}

// 11. 구슬을 나누는 경우의 수 ❌

// 문제 설명
// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ balls ≤ 30
// 1 ≤ share ≤ 30
// 구슬을 고르는 순서는 고려하지 않습니다.
// share ≤ balls

function test11(balls, share) {
  let result = 1; // 결과 값을 저장할 변수를 1로 초기화합니다.

  // share 개수만큼 반복하면서 조합의 공식을 적용합니다.
  for (let i = 0; i < share; i++) {
    result *= balls - i; // 분자에 해당하는 balls! 부분을 계산합니다.
    result /= i + 1; // 분모에 해당하는 k!(n-k)! 부분을 계산합니다.
  }

  // 모든 계산이 끝난 후, 가능한 모든 경우의 수를 반환합니다.
  return result;
}
