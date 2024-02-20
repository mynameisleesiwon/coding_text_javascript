// 1. 개미 군단 ❗❗

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

function test1(hp) {
  let count = 0;

  // 장군개미로 최대한 체력을 깎는다.
  const generalAnts = Math.floor(hp / 5);
  count += generalAnts;
  hp -= generalAnts * 5;

  // 병정개미로 다음으로 많이 체력을 깎는다.
  const soldierAnts = Math.floor(hp / 3);
  count += soldierAnts;
  hp -= soldierAnts * 3;

  // 남은 체력은 일개미로 채운다.
  count += hp; // 일개미는 1의 공격력을 가지므로 남은 hp가 그대로 필요한 일개미의 수가 된다.

  return count;
}

// 2. 모스부호 (1) ❗

// 문제 설명
// 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다.
// 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다.
// 문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
// 모스부호는 다음과 같습니다.

const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

// 제한사항
// 1 ≤ letter의 길이 ≤ 1,000
// return값은 소문자입니다.
// letter의 모스부호는 공백으로 나누어져 있습니다.
// letter에 공백은 연속으로 두 개 이상 존재하지 않습니다.
// 해독할 수 없는 편지는 주어지지 않습니다.
// 편지의 시작과 끝에는 공백이 없습니다.

function test2(letter) {
  let letterArray = letter.split(" ");

  // map으로 변환한 결과를 새 변수에 할당
  let decodedArray = letterArray.map((item) => morse[item]);

  // 변환된 배열을 문자열로 합침
  let decodedLetter = decodedArray.join("");
  return decodedLetter;
}

// 3. 가위 바위 보

// 문제 설명
// 가위는 2,  바위는 0,  보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < rsp의 길이 ≤ 100
// rsp와 길이가 같은 문자열을 return 합니다.
// rsp는 숫자 0, 2, 5로 이루어져 있습니다.

function test3(rsp) {
  let rspArray = rsp.split("");
  let rspResult = rspArray.map((item) => {
    if (item == "2") {
      return "0";
    } else if (item == "0") {
      return "5";
    } else if (item == "5") {
      return "2";
    }
  });
  return rspResult.join("");
}

// 4. 구슬을 나누는 경우의 수 ❗❗

// 문제 설명
// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
// 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ balls ≤ 30
// 1 ≤ share ≤ 30
// 구슬을 고르는 순서는 고려하지 않습니다.
// share ≤ balls

function test4(balls, share) {
  let result = 1; // 결과를 저장할 변수를 1로 초기화합니다.

  for (let i = 0; i < share; i++) {
    result *= balls - i; // 분자에 해당하는 구슬의 수에서 i를 빼고 결과에 곱합니다.
    result /= i + 1; // 분모에 해당하는 i+1로 결과를 나눕니다.
  }
  // 위의 과정을 share 횟수만큼 반복합니다.

  return result;
}
