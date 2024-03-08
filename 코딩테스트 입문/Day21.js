// 1. 숨어있는 숫자의 덧셈 (2) ❗❗

// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다.
// my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ my_string 안의 자연수 ≤ 1000
// 연속된 수는 하나의 숫자로 간주합니다.
// 000123과 같이 0이 선행하는 경우는 없습니다.
// 문자열에 자연수가 없는 경우 0을 return 해주세요.

function test1(my_string) {
  // 문자열에서 숫자들을 찾기 위한 정규 표현식
  // /\d+/g
  // \d는 각각의 숫자를 찾습니다.
  // \d+는 연속된 숫자들을 하나의 단위로 묶어 찾습니다. 따라서 "123"은 "1", "2", "3" 세 개가 아니라 하나의 "123"으로 인식됩니다.
  // /g가 없으면 정규 표현식은 첫 번째 일치하는 항목만 찾고 검색을 중지합니다. g 플래그로 인해 문자열 전체를 검사하여 모든 일치하는 항목을 찾습니다.
  const numbers = my_string.match(/\d+/g) || [];

  // 찾아낸 숫자들을 더함 (숫자가 없을 경우 0을 반환)
  return numbers.reduce((acc, num) => acc + Number(num), 0);
}

// 2. 안전지대 ❗❗❗

// 문제 설명
// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// board는 n * n 배열입니다.
// 1 ≤ n ≤ 100
// 지뢰는 1로 표시되어 있습니다.
// board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

function test2(board) {
  const n = board.length; // board의 길이를 n에 할당합니다. (n x n 배열이라고 가정)
  let safeAreaCount = 0; // 안전한 지역의 칸 수를 저장할 변수를 초기화합니다.

  // 주어진 칸이 보드 범위 안에 있는지 확인하는 함수입니다.
  function isInBoard(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
  }

  // 지뢰가 있는지 확인하는 함수입니다.
  function isMine(x, y) {
    return isInBoard(x, y) && board[x][y] === 1;
  }

  // 주변 8방향에 대한 좌표 변화값입니다. 위, 아래, 좌, 우, 대각선을 포함합니다.
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // 주어진 칸 주변에 지뢰가 있는지 확인하는 함수입니다.
  function hasAdjacentMine(x, y) {
    return directions.some(([dx, dy]) => isMine(x + dx, y + dy));
  }

  // board의 모든 칸을 순회하며 안전한 지역의 칸 수를 세는 메인 로직입니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 현재 칸이 지뢰가 아니고, 주변에 지뢰가 없는 경우 안전한 지역으로 판단합니다.
      if (!isMine(i, j) && !hasAdjacentMine(i, j)) {
        safeAreaCount++;
      }
    }
  }

  // 최종적으로 계산된 안전한 지역의 칸 수를 반환합니다.
  return safeAreaCount;
}

// 3. 삼각형의 완성조건 (2) ❗❗

// 문제 설명
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
// 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// sides의 원소는 자연수입니다.
// sides의 길이는 2입니다.
// 1 ≤ sides의 원소 ≤ 1,000

function test3(sides) {
  const [a, b] = sides.sort((x, y) => x - y); // 작은 순서로 정렬

  const minC = Math.abs(a - b) + 1; // 가능한 최소 길이
  const maxC = a + b - 1; // 가능한 최대 길이

  // 가능한 c의 길이 개수를 계산합니다.
  const count = maxC - minC + 1;

  return count;
}

// 4. 외계어 사전 ❗❗

// 문제 설명
// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다.
// 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// spell과 dic의 원소는 알파벳 소문자로만 이루어져있습니다.
// 2 ≤ spell의 크기 ≤ 10
// spell의 원소의 길이는 1입니다.
// 1 ≤ dic의 크기 ≤ 10
// 1 ≤ dic의 원소의 길이 ≤ 10
// spell의 원소를 모두 사용해 단어를 만들어야 합니다.
// spell의 원소를 모두 사용해 만들 수 있는 단어는 dic에 두 개 이상 존재하지 않습니다.
// dic과 spell 모두 중복된 원소를 갖지 않습니다.

function test4(spell, dic) {
  // spell 배열을 알파벳 순서로 정렬합니다.
  const spellWord = spell.sort().join("");

  // dic 배열을 순회하면서 spellWord와 일치하는 단어가 있는지 확인합니다.
  for (let word of dic) {
    if (word.split("").sort().join("") === spellWord) {
      return 1; // 일치하는 단어가 있다면 1을 반환합니다.
    }
  }

  return 2; // 일치하는 단어가 없다면 2를 반환합니다.
}
