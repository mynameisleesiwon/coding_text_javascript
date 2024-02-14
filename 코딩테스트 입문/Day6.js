// 1. 문자열 뒤집기

// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000

function test1(my_string) {
  let answer = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
  // return my_string.split("").reverse().join("");
}

// 2. 짝수 홀수 개수

// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000

function test2(num_list) {
  let evenCount = num_list.filter((item) => item % 2 == 0).length;
  let oddCount = num_list.filter((item) => item % 2 != 0).length;
  return [evenCount, oddCount];
}

// 3. 문자 반복 출력하기

// 문제 설명
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ my_string 길이 ≤ 5
// 2 ≤ n ≤ 10
// "my_string"은 영어 대소문자로 이루어져 있습니다.

function test3(my_string, n) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let k = n; k > 0; k--) {
      answer += my_string[i];
    }
    // answer += my_string[i].repeat(n);
  }
  return answer;
}
