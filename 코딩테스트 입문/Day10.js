// 1. 점의 위치 구하기

// 문제 설명
// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다.
// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다.
// 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// dot의 길이 = 2
// dot[0]은 x좌표를, dot[1]은 y좌표를 나타냅니다
// -500 ≤ dot의 원소 ≤ 500
// dot의 원소는 0이 아닙니다.

function test1(dot) {
  const x = dot[0];
  const y = dot[1];
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }
}

// 2. 2차원으로 만들기

// 문제 설명
// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다.
// num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
// 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

// 제한사항
// num_list의 길이는 n의 배 수개입니다.
// 0 ≤ num_list의 길이 ≤ 150
// 2 ≤ n < num_list의 길이

function test2(num_list, n) {
  let answer = [];
  let newArray = [];
  for (let i = 0; i <= num_list.length - n; i += n) {
    for (let k = i; k < i + n; k++) {
      newArray.push(num_list[k]);
    }
    answer.push(newArray);
    newArray = [];
  }
  return answer;
}

// 3. 공 던지기 ❗❗

// 문제 설명
// 머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다.
// 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
// 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때,
// k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 < numbers의 길이 < 100
// 0 < k < 1,000
// numbers의 첫 번째와 마지막 번호는 실제로 바로 옆에 있습니다.
// numbers는 1부터 시작하며 번호는 순서대로 올라갑니다.

function test3(numbers, k) {
  let currentIndex = 0; // 현재 공을 가진 사람의 인덱스, 0부터 시작.

  // k번째로 공을 던지는 사람을 찾기 위한 반복문.
  for (let i = 1; i < k; i++) {
    currentIndex = (currentIndex + 2) % numbers.length; // 오른쪽으로 한 명 건너뛰고 다음 사람에게 공을 던짐.
    // % numbers.length => 이 연산은 원형 구조를 모델링하여, 배열의 끝에 도달한 경우 다시 처음으로 돌아가게 만듭니다.
    // 즉, 이는 원형으로 서 있는 친구들 사이에서 공을 순환시키는 데 사용됩니다.
  }

  return numbers[currentIndex]; // k번째로 공을 던지는 사람의 번호 반환.
}

// 4. 배열 회전시키기 ❗

// 문제 설명
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ numbers의 길이 ≤ 20
// direction은 "left" 와 "right" 둘 중 하나입니다.

function test4(numbers, direction) {
  if (direction == "right") {
    // 마지막 원소를 제거하고 저장
    const lastElement = numbers.pop();

    // unshift()
    // 하나 이상의 요소를 배열의 시작 부분에 추가하고, 변경된 배열의 길이를 반환
    numbers.unshift(lastElement);
  } else if (direction == "left") {
    // 첫 번째 원소를 제거하고 저장
    // shift()
    // 배열의 첫 번째 요소를 제거하고 그 요소를 반환. 배열이 비어있으면 undefined 반환
    const firstElement = numbers.shift();

    // 저장한 원소를 배열의 끝부분에 추가
    numbers.push(firstElement);
  }
  return numbers;
}
