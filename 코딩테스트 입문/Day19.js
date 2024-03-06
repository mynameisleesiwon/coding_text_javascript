// 1. 7의 개수

// 문제 설명
// 머쓱이는 행운의 숫자 7을 가장 좋아합니다.
// 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 100,000

function test1(array) {
  let count = 0;
  const newArray = array.join("").split("");

  newArray.forEach((item) => {
    if (item.includes("7")) {
      count++;
    }
  });

  // array.forEach((num) => {
  //   const str = num.toString();
  //   str.split("").forEach((char) => {
  //     if (char === "7") {
  //       count++;
  //     }
  //   });
  // });

  return count;
}

// 2. 잘라서 배열로 저장하기

// 문제 설명
// 문자열 my_str과 n이 매개변수로 주어질 때,
// my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_str의 길이 ≤ 100
// 1 ≤ n ≤ my_str의 길이
// my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

function test2(my_str, n) {
  // 결과를 담을 빈 배열을 초기화
  const result = [];

  // 문자열을 순회하면서 n만큼의 길이로 잘라야 하기 때문에
  // i를 n씩 증가시키며 반복문을 실행
  for (let i = 0; i < my_str.length; i += n) {
    // substring 메서드를 사용하여 i 인덱스부터 i+n 인덱스 전까지의 문자열을 자름
    // 그 잘라낸 문자열을 result 배열에 추가
    result.push(my_str.substring(i, i + n));
  }

  // 모든 반복을 마친 후 완성된 배열을 반환합니다.
  return result;
}

// 3. 중복된 숫자 개수

// 문제 설명
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 1,000
// 0 ≤ n ≤ 1,000

function test3(array, n) {
  return array.filter((item) => item === n).length;
}

// 4. 머쓱이보다 키 큰 사람

// 문제 설명
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다.
// 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때,
// 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ height ≤ 200
// 1 ≤ array의 원소 ≤ 200

function test4(array, height) {
  return array.filter((item) => item > height).length;
}
