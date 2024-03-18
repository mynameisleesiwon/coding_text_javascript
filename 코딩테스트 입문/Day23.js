// 1. 특이한 정렬 ❗❗

// 문제 설명
// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다.
// 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다.
// 정수가 담긴 배열 numlist와 정수 n이 주어질 때
// numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 10,000
// 1 ≤ numlist의 원소 ≤ 10,000
// 1 ≤ numlist의 길이 ≤ 100
// numlist는 중복된 원소를 갖지 않습니다.

function test1(numlist, n) {
  // 거리가 가까운 순으로 정렬하되, 거리가 같으면 더 큰 수가 앞에 오도록 정렬
  return numlist.sort((a, b) => {
    const distanceA = Math.abs(a - n);
    const distanceB = Math.abs(b - n);

    if (distanceA === distanceB) {
      return b - a; // 거리가 같을 때는 더 큰 수가 앞에 오도록
    }
    return distanceA - distanceB; // 거리가 다르면 가까운 순으로 정렬
  });
}

// 2. 등수 매기기 ❗❗

// 문제 설명
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
// 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
// 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ score[0], score[1] ≤ 100
// 1 ≤ score의 길이 ≤ 10
// score의 원소 길이는 2입니다.
// score는 중복된 원소를 갖지 않습니다.

function test2(score) {
  let avg = [];
  let ranking = [];

  for (let i = 0; i < score.length; i++) {
    avg.push((score[i][0] + score[i][1]) / 2);
  }

  // 각 학생의 등수 계산
  for (let i = 0; i < avg.length; i++) {
    let rank = 1; // 등수는 1부터 시작
    for (let j = 0; j < avg.length; j++) {
      if (avg[i] < avg[j]) {
        rank++; // 현재 학생의 평균이 다른 학생의 평균보다 낮으면 등수를 1 올림
      }
    }
    ranking.push(rank); // 계산된 등수를 ranking 배열에 추가
  }

  return ranking; // 모든 학생의 등수가 담긴 배열 반환
}

// 3. 옹알이 (1) ❗❗❗

// 문제 설명
// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
// 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 15
// babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
// 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
// 문자열은 알파벳 소문자로만 이루어져 있습니다.

function test3(babbling) {}

// 4. 로그인 성공?

// 문제 설명
// 머쓱이는 프로그래머스에 로그인하려고 합니다.
// 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
// 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

// 아이디와 비밀번호가 모두 일치하는 회원정보가 있으면 "login"을 return합니다.
// 로그인이 실패했을 때 아이디가 일치하는 회원이 없다면 “fail”를, 아이디는 일치하지만 비밀번호가 일치하는 회원이 없다면 “wrong pw”를 return 합니다.

// 제한사항
// 회원들의 아이디는 문자열입니다.
// 회원들의 아이디는 알파벳 소문자와 숫자로만 이루어져 있습니다.
// 회원들의 패스워드는 숫자로 구성된 문자열입니다.
// 회원들의 비밀번호는 같을 수 있지만 아이디는 같을 수 없습니다.
// id_pw의 길이는 2입니다.
// id_pw와 db의 원소는 [아이디, 패스워드] 형태입니다.
// 1 ≤ 아이디의 길이 ≤ 15
// 1 ≤ 비밀번호의 길이 ≤ 6
// 1 ≤ db의 길이 ≤ 10
// db의 원소의 길이는 2입니다.

function test4(id_pw, db) {
  const id = id_pw[0];
  const pw = id_pw[1];
  let idCheck = false;

  for (let i = 0; i < db.length; i++) {
    if (id === db[i][0]) {
      idCheck = true;
      if (pw === db[i][1]) {
        return "login"; // 아이디와 비밀번호가 모두 일치하는 경우 바로 로그인 성공
      }
    }
  }

  if (idCheck) {
    return "wrong pw"; // 아이디는 일치하지만 비밀번호가 일치하지 않음
  } else {
    return "fail"; // 아이디가 일치하는 회원이 없음
  }
}
