let problems = [ 
    {
        "problem": "기업의 경제 상태를 나타내는 주요 지표로, 매출, 이익율, 부채 등이 포함되는 것은?",
        "answer": "펀더멘탈",
    },
    {
        "problem": "기업의 총 발행 주식수에 1주당 주가를 곱한 값으로, 시장에서 기업의 규모를 나타내는 것은?",
        "answer": "시가총액",
    },
    {
      "problem": "기업이 투자자나 이해관계자에게 사업내용, 재무상황 등을 알리는 제도는?",
      "answer": "공시",
    },
    {
        "problem": "개인 투자자가 PC로 주식 거래를 할 수 있는 프로그램을 말하는 것은?",
        "answer": "HTS(홈 트레이딩 시스템)",
    },
    {
      "problem": "주식을 사는 것을 의미하는 것은?",
      "answer": "매수",
    },
    {
        "problem": "가지고 있는 주식을 파는 것을 의미하는 것은?",
        "answer": "매도",
    },
    {
        "problem": "기업이 이익의 일부를 주주에게 돌려주는 것을 의미하는 것은?",
        "answer": "배당",
    },
    {
        "problem": "주식시장이 열릴 때의 주가를 의미하는 것은?",
        "answer": "시가",
    },
    {
      "problem": "주식시장이 닫힐 때의 주가를 의미하는 것은?",
      "answer": "종가",
    },
    {
        "problem": "기업의 순이익을 순자산에 대한 비율로 나타내는 것은?",
        "answer": "ROE(자기자본이익율)",
    }, {
      "problem": "주당순이익을 의미하는 것은?",
      "answer": "EPS",
    },
    {
      "problem": "주가수익률로, 현재 주가와 주당순이익을 비교하여 사용되는 것은",
      "answer": "PER",
    },
    {
      "problem": "주당순자산으로, 회사를 청산했을 때 주주에게 분배될 순자산을 나타내는 것은?",
      "answer": "PBR",
    },

]


// 타이머 설정 (초 단위)
const totalTime = 30;
let timeElapsed = 0;
let timer;

// 게임 진행에 필요한 변수들
let questionArray = [];
let answerArray = [];
let round = 1;
let score = 0;

// 타이머 바 업데이트 함수
function updateProgressBar() {
  const progress = (timeElapsed / totalTime) * 100;
  document.getElementById('timer').style.height = progress + '%';
}

// 게임 진행 함수
function gameAnswerAppear() {
  // 타이머가 종료되면 게임 종료
  if (timeElapsed >= totalTime) {
    clearInterval(timer);
    return;
  }

  // 몇번째 문제인지
  document.querySelector(".question_number").innerHTML = "Q" + round + ".";
  round++;

  // 한 문제씩 나오도록 수정
  let rand1;
  do {
    rand1 = Math.floor(Math.random() * problems.length);
  } while (questionArray.includes(rand1));

  questionArray.push(rand1);

  // 문제 내용을 표시하는 엘리먼트 변경
  document.querySelector(".question").innerHTML = problems[rand1].problem;
  //console.log("문제 내용:", problems[rand1].problem);

  // 문제에 대한 답을 랜덤한 버튼에 배치
  var randomAnswerIndex = Math.floor(Math.random() * 4) + 1;
  var randomAnswerElement = document.querySelector('.answer.answer' + randomAnswerIndex);
  randomAnswerElement.innerText = problems[rand1].answer;
  console.log("답:", problems[rand1].answer);

  // 다른 버튼들에 문제를 배치
  answerArray.push(randomAnswerIndex);
  let usedProblems = [rand1];
  for (let i = 1; i <= 4; i++) {
    if (i !== randomAnswerIndex) {
      let randomNotAnswerIndex;
      do {
        randomNotAnswerIndex = Math.floor(Math.random() * problems.length);
      } while (usedProblems.includes(randomNotAnswerIndex));
      usedProblems.push(randomNotAnswerIndex);
      document.querySelector('.answer.answer' + i).innerText = problems[randomNotAnswerIndex].answer;
    }
  }
  console.log(answerArray);

  
} //updateProgressBar()

// 게임 시작 함수
function gameStart() {
  // 타이머 시작
  timer = setInterval(function() {
    if (timeElapsed >= totalTime) {
      clearInterval(timer);
      alert(`타이머가 종료되었습니다. 점수는 ${score}입니다.`);
    } else {
      timeElapsed++;
      updateProgressBar();
    }
  }, 1000);

  // 게임 시작 시 첫 문제 표시
  gameAnswerAppear();

  // 버튼 이벤트 및 정답 처리
  document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', function(event) {
        const clickedButtonIndex = parseInt(button.classList[1].slice(-1));
        // 정답 확인 부분
        if (clickedButtonIndex === answerArray[answerArray.length - 1]) {
            console.log("정답입니다!");
            score += 10;
            console.log(score);
            // 문제 생성
            gameAnswerAppear();
        } else {
            console.log("틀렸습니다!");
            // 문제 생성
            gameAnswerAppear();
        }
    });
  });
} //gameStart()

// 게임 시작
gameStart();