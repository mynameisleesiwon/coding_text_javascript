// 1. 치킨 쿠폰

// 문제 설명
// 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
// 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다.
// 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// chicken은 정수입니다.
// 0 ≤ chicken ≤ 1,000,000

function test1(chicken) {
  let totalCoupon = chicken;
  let totalService = 0;

  while (totalCoupon >= 10) {
    let service = Math.floor(totalCoupon / 10);
    let restCoupon = totalCoupon % 10;
    totalCoupon = service + restCoupon;
    totalService += service;
  }

  return totalService;
}

// 2. 이진수 더하기 ❗❗

// 문제 설명
// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때,
// 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// return 값은 이진수를 의미하는 문자열입니다.
// 1 ≤ bin1, bin2의 길이 ≤ 10
// bin1과 bin2는 0과 1로만 이루어져 있습니다.
// bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.

function test2(bin1, bin2) {
  // 길이가 더 긴 이진수 기준으로 길이를 맞추기
  let maxLength = Math.max(bin1.length, bin2.length);
  bin1 = bin1.padStart(maxLength, "0");
  bin2 = bin2.padStart(maxLength, "0");

  // 역순으로 변환하지 않고, 끝에서부터 계산하기 위해
  let bin1Array = bin1.split("");
  let bin2Array = bin2.split("");

  let newArray = [];
  let carry = 0; // 올림수 초기화

  // 끝에서부터 덧셈 수행
  for (let i = maxLength - 1; i >= 0; i--) {
    let sum = parseInt(bin1Array[i]) + parseInt(bin2Array[i]) + carry;
    if (sum >= 2) {
      // 합이 2 이상이면 올림 발생
      newArray.push(sum % 2);
      carry = 1;
    } else {
      newArray.push(sum);
      carry = 0;
    }
  }

  // 마지막 올림수 처리
  if (carry > 0) {
    newArray.push(carry);
  }

  return newArray.reverse().join("");
}

// 3. A로 B 만들기 ❗❗

// 문제 설명
// 문자열 before와 after가 매개변수로 주어질 때,
// before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < before의 길이 == after의 길이 < 1,000
// before와 after는 모두 소문자로 이루어져 있습니다.

function test3(before, after) {
  let beforeArray = before.split("");
  let afterArray = after.split("");

  beforeArray.forEach((item) => {
    const index = afterArray.indexOf(item);

    if (index !== -1) {
      afterArray.splice(index, 1);
    }
  });

  if (afterArray.length == 0) {
    return 1;
  } else {
    return 0;
  }
}

// 4. k의 개수

// 문제 설명
// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다.
// 정수 i, j, k가 매개변수로 주어질 때,
// i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ i < j ≤ 100,000
// 0 ≤ k ≤ 9

function test4(i, j, k) {
  let start = i;
  let end = j;
  let num = k.toString();
  let count = 0;

  for (let i = start; i <= end; i++) {
    let currentNumStr = i.toString();
    for (let a = 0; a < currentNumStr.length; a++) {
      if (currentNumStr[a] === num) {
        count++;
      }
    }
  }

  return count;
}
