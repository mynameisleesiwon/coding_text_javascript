// 1. 가까운 수 ❗

// 문제 설명
// 정수 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ array의 원소 ≤ 100
// 1 ≤ n ≤ 100
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

function test1(array, n) {
  // 첫 번째 원소를 초기 가장 가까운 값으로 설정합니다.
  let closestValue = Math.abs(array[0] - n);
  let answer = array[0];

  for (let i = 1; i < array.length; i++) {
    // i를 1부터 시작합니다.
    const currentDifference = Math.abs(array[i] - n);

    // 현재 원소가 더 가까운 경우
    if (currentDifference < closestValue) {
      closestValue = currentDifference;
      answer = array[i];
      // 현재 원소와 기존 원소가 거리가 같고, 현재 원소가 더 작은 경우
    } else if (currentDifference === closestValue && array[i] < answer) {
      answer = array[i];
    }
  }

  return answer;
}

// 2. 369게임 ❗

// 문제 설명
// 머쓱이는 친구들과 369게임을 하고 있습니다.
// 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
// 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ order ≤ 1,000,000

function test2(order) {
  let count = 0;
  let newArray = order.toString().split("");
  newArray.map((item) => {
    if (item === "3" || item === "6" || item === "9") {
      count += 1;
    }
  });

  return count;
}

// 3. 암호 해독

// 문제 설명
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ cipher의 길이 ≤ 1,000
// 1 ≤ code ≤ cipher의 길이
// cipher는 소문자와 공백으로만 구성되어 있습니다.
// 공백도 하나의 문자로 취급합니다.

function test3(cipher, code) {
  let newArray = cipher.split("");
  let answer = "";

  // map은 배열의 각 요소에 대해 함수를 실행하고 결과를 모아 새로운 배열을 만들 때 사용하는 반면,
  // forEach는 단순히 배열의 각 요소에 대해 함수를 실행할 때 사용됩니다.
  // 여기서는 새로운 배열을 만들 필요가 없으므로 forEach가 더 적절합니다.
  newArray.forEach((item, index) => {
    if ((index + 1) % code === 0) {
      answer += item;
    }
  });
  return answer;
}

// 4. 대문자와 소문자 ❗❗

// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 영어 대문자와 소문자로만 구성되어 있습니다.

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function test4(my_string) {
  const newArray = my_string.split("");
  const changeArray = newArray.map((item) =>
    isUpperCase(item) ? item.toLowerCase() : item.toUpperCase()
  );

  return changeArray.join("");
}
