// 1. 직사각형 넓이 구하기 ❗❗

// 문제 설명
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때,
// 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// dots의 길이 = 4
// dots의 원소의 길이 = 2
// -256 < dots[i]의 원소 < 256
// 잘못된 입력은 주어지지 않습니다.

function test1(dots) {
  // 가로와 세로 길이를 담을 변수를 초기화합니다.
  let width = 0;
  let height = 0;

  // 첫 번째 점과 다른 점들을 비교하여 가로와 세로 길이를 찾습니다.
  for (let i = 1; i < dots.length; i++) {
    // x 좌표가 같다면, 두 점은 세로 변을 이룹니다.
    if (dots[0][0] === dots[i][0]) {
      height = Math.abs(dots[0][1] - dots[i][1]);
      // y 좌표가 같다면, 두 점은 가로 변을 이룹니다.
    } else if (dots[0][1] === dots[i][1]) {
      width = Math.abs(dots[0][0] - dots[i][0]);
    }
  }

  // 가로 길이와 세로 길이를 곱하여 넓이를 반환합니다.
  return width * height;
}

// 2. 캐릭터의 좌표 ❗

// 문제 설명
// 머쓱이는 RPG게임을 하고 있습니다.
// 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다.
// 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1],
// down을 누른다면 [0, -1], left를 누른다면 [-1, 0],
// right를 누른다면 [1, 0]입니다.
// 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다.
// 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
// [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.

// 제한사항
// board은 [가로 크기, 세로 크기] 형태로 주어집니다.
// board의 가로 크기와 세로 크기는 홀수입니다.
// board의 크기를 벗어난 방향키 입력은 무시합니다.
// 0 ≤ keyinput의 길이 ≤ 50
// 1 ≤ board[0] ≤ 99
// 1 ≤ board[1] ≤ 99
// keyinput은 항상 up, down, left, right만 주어집니다.

function test2(keyinput, board) {
  let x = 0;
  let y = 0;
  let maxX = (board[0] - 1) / 2;
  let maxY = (board[1] - 1) / 2;

  keyinput.forEach((item) => {
    if (item === "up" && y < maxY) {
      y += 1; // 'up'일 때 y를 증가시킵니다.
    } else if (item === "down" && y > -maxY) {
      y -= 1; // 'down'일 때 y를 감소시킵니다.
    } else if (item === "left" && x > -maxX) {
      x -= 1; // 'left'일 때 x를 감소시킵니다.
    } else if (item === "right" && x < maxX) {
      x += 1; // 'right'일 때 x를 증가시킵니다.
    }
  });

  return [x, y];
}

// 3. 최댓값 만들기 (2) ❗

// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers 의 길이 ≤ 100

function test3(numbers) {
  console.log(numbers.sort((a, b) => b - a));
  let maxValue = numbers[0] * numbers[1];

  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      if (numbers[i] * numbers[k] > maxValue) {
        maxValue = numbers[i] * numbers[k];
      }
    }
  }

  return maxValue;

  // numbers.sort((a, b) => a - b);
  // let n = numbers.length;
  // let maxProduct = Math.max(
  //   numbers[0] * numbers[1], // 가장 작은 두 수의 곱
  //   numbers[n - 1] * numbers[n - 2] // 가장 큰 두 수의 곱
  // ); // 이 중 더 큰 값이 최댓값입니다.

  // return maxProduct;
}

// 4. 다항식 더하기 ❗❗

// 문제 설명
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다.
// 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
// 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

// 제한사항
// 0 < polynomial에 있는 수 < 100
// polynomial에 변수는 'x'만 존재합니다.
// polynomial은 양의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
// 항과 연산기호 사이에는 항상 공백이 존재합니다.
// 공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.
// 하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.
// " + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.
// 0으로 시작하는 수는 없습니다.
// 문자와 숫자 사이의 곱하기는 생략합니다.
// polynomial에는 일차 항과 상수항만 존재합니다.
// 계수 1은 생략합니다.
// 결괏값에 상수항은 마지막에 둡니다.
// 0 < polynomial의 길이 < 50

function test4(polynomial) {
  // 일차항과 상수항을 분리하여 저장할 변수를 초기화합니다.
  let xTermSum = 0;
  let constantSum = 0;

  // 주어진 다항식을 공백을 기준으로 분리합니다.
  const terms = polynomial.split(" + ");

  // 각 항을 순회하면서 일차항과 상수항을 구분하여 합산합니다.
  terms.forEach((term) => {
    if (term.includes("x")) {
      // 'x'를 포함하는 경우 일차항입니다.
      // 계수가 생략되어 있는 경우 1로 간주합니다.
      const coefficient = term.replace("x", "") || "1";
      xTermSum += parseInt(coefficient, 10);
    } else {
      // 'x'를 포함하지 않는 경우 상수항입니다.
      constantSum += parseInt(term, 10);
    }
  });

  // 결과 문자열을 구성합니다.
  let result = "";

  // 일차항이 있으면 결과 문자열에 추가합니다. 계수가 1인 경우는 생략합니다.
  if (xTermSum === 1) {
    result += "x";
  } else if (xTermSum > 1) {
    result += `${xTermSum}x`;
  }

  // 상수항이 있으면 결과 문자열에 추가합니다.
  // 이 때, 일차항이 있었다면 공백과 더하기 기호를 넣어줍니다.
  if (constantSum > 0) {
    if (result.length > 0) {
      result += " + ";
    }
    result += `${constantSum}`;
  }

  // 결과 문자열을 반환합니다.
  return result;
}
