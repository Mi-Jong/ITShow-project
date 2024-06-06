import enter01 from "../img/news/news-enter01.png";
import enter02 from "../img/news/news-enter02.png";
import enter03 from "../img/news/news-enter03.png";
import enter04 from "../img/news/news-enter04.png";
import enter05 from "../img/news/news-enter05.png";
import enter06 from "../img/news/news-enter06.png";
import enter07 from "../img/news/news-enter07.png";

import IT01 from "../img/news/news-IT01.png";
import IT02 from "../img/news/news-IT02.png";
import IT03 from "../img/news/news-IT03.png";
import IT04 from "../img/news/news-IT04.png";
import IT05 from "../img/news/news-IT05.png";
import IT06 from "../img/news/news-IT06.png";
import IT07 from "../img/news/news-IT07.png";

import cook01 from "../img/news/news-cook01.png";
import cook02 from "../img/news/news-cook02.png";
import cook03 from "../img/news/news-cook03.png";
import cook04 from "../img/news/news-cook04.png";
import cook05 from "../img/news/news-cook05.png";
import cook06 from "../img/news/news-cook06.png";
import cook07 from "../img/news/news-cook07.png";

export const newsData = [
  {
    image_url: enter01,
    title: "SN 에스퍼 윈퉈, 첫 솔로 엘범 발표하자마자 음원차트 ‘1위’",
    content: "[엔터기자] 이수만 기자 = SN 소속 에스퍼 윈퉈가 솔로 가수 ‘김앤정’으로서 성공적인 출발을 알렸다. 지난 xx일 윈퉈는 자신의 인스타그램에 앨범을 암시하는 내용이 담긴 게시물을 올렸다. 공개된 사진 속에는 ‘겨울 속에서’라는 가사지가 눈길을 이끌었다.",
    stock_impact: {
      "sn": 10000,
      "jyb": -100
    }
  },
  {
    image_url: enter02,
    title: "‘샤이닝 자물쇠’ 열애설 인정에 팬들 광분",
    content: "[유앤아이 AI리포터] 최근 샤이닝 멤버 자물쇠가 배우 XXX과의 열애 사실을 인정하면서 팬들로부터의 질타를 받고 있다. ‘배우' XXX는 온라인에서 자신을 비방하고 허위 사실을 포함한 악의적 의도의 모욕적인 게시글에 대한 법적 대응을 발표했다.",
    stock_impact: {
      "sn": -100,
      "jyb": 10000
    }
  },
  {
    image_url: enter03,
    title: "지닌, 끝내 밝히지 못한 ‘앤드믹스 탈퇴’ 이유",
    content: "[앳스타일 홍길동 기자] jyb엔터테이먼트에 10년을 몸담았던 지닌은 한순간에 떠났다. 기다렸던 그룹 앤드믹스로 데뷔했건만 6개월도 채우기 못한 채 탈퇴했다. 반면 그룹 앤드믹스 한원이 지난해 말 탈퇴한 지닌에 대한 질문에 입을 열었다.",
    stock_impact: {
      "sn": 10000,
      "jyb": -100
    }
  },
  {
    image_url: enter04,
    title: "‘jyb 신인’ 아일럿, 데뷔 타이틀 곡은 ‘KOSPI’",
    content: "‘하이브 막내딸’이라고 불리는 신인 걸그룹 아일럿(eyelet)의 데뷔 타이틀 곡은 ‘KOSPI’이다. 아일럿(헤이즐넛, 라떼, 모카)은 x일 x시 공식 SNS에 데뷔 엘범인 미니 1집 ‘Stock’의 세번째 콘셉트 ‘개미’ 버전 포토와 필름을 공개했다.",
    stock_impact: {
      "sn": 0,
      "jyb": 10000
    }
  },
  {
    image_url: enter05,
    title: "MG, SL ‘마약 입건’ 승승장구하던 MG엔터 하락",
    content: "가수 SL의 마약 투약 혐의 파장으로 소속사 MG엔터테인먼트 주가가 급락 사태를 맞았다. 이는 전날 SL의 마약 투약 혐의 입건 사실이 알려진 여파다. 서울경찰청 광역수사대는 최근 SL를 마약류관리에관한법률위반 혐의로 불구속 입건했고 해당 사실이 XX일 기사화됐다.",
    stock_impact: {
      "sn": 10000,
      "jyb": 10000
    }
  },
  {
    image_url: enter06,
    title: "봥탄 군입대 소식에 기업 주가 하락",
    content: "군입대를 앞둔 봥탄의 소속사 기업이 해당 소식에 따라 주가가 하락세를 보이고 있다. 팬들과 시장 참여자들은 그룹의 활동 중단으로 인한 영향에 대해 우려하며, 기업은 이에 대응하여 봥탄의 군입대 기간 동안도 효과적인 전략을 모색하고 있다.",
    stock_impact: {
      related_company: -100
    }
  },
  {
    image_url: enter07,
    title: "SN 소속 인기 아이돌 그룹 남자친구가 최근 공개된 영상에서 태도 논란에 휩싸였다.",
    content: "팬들은 멤버들의 행동에 대해 논란을 제기하고 있으며, 소속사는 이에 대한 공식 입장 발표를 약속하고 있다. 그룹은 논란에 대한 해명과 팬들에 대한 사죄를 통해 평가를 받아야 할 상황에 처해 있어, 이에 대한 대응이 기대된다.",
    stock_impact: {
      "sn": -100
    }
  },
  {
    image_url: cook07,
    title: "떨어진 빵, 각질 음료, 바퀴벌레까지...요식업계 위생 논란",
    content: "폭염으로 요식업계에 식중독 주의보가 내려진 가운데 매장 청결 문제가 논란이 되고 있다. 특히 패스트푸드 체인점의 경우 젊은 층 뿐만 아니라 중장년층도 애용하고 있어 위생이 불량할 경우 복통 등 건강문제로도 직결될 수 있어 주의가 요구된다.",
    stock_impact: {
      "소노공마라탕": -100,
      "왕카탕후루": -100
    }
  },
  {
    image_url: cook06,
    title: "튁톡 ‘소노공’ 챌린지로 소노공마라탕 떡상",
    content: "최근 틱톡에서 가장 인기있는 주제는 단연 ‘소노공’ 챌린지라 말할 수 있다. ‘소노공’ 챌린지는 가수 샤이닝의 곡의 ‘넌 마치 아름다운 기적 마치 손오공과 같아’라는 가사의 부분을 춤으로 나타낸 것이다. 다른 챌린지와 다른 점은 소노공마라탕에 가서 이를 춰야 한다는 것이다.",
    stock_impact: {
      "소노공마라탕": 10000,
      "왕카탕후루": -100
    }
  },
  {
    image_url: cook05,
    title: "열풍을 끌었던 마라탕과 탕후루 인기 하락",
    content: "한때 뜨거운 인기를 끌었던 마라탕과 탕후루가 최근에는 인기 하락세를 보이고 있다. 소비자들은 다양한 나라 요리에 눈길을 돌리며 새로운 맛을 찾고 있으며, 이로 인해 중국 요리에 대한 입소문이 줄어든 것으로 보인다. 현지 음식업계는 소비자 취향의 다양성을 반영하며 경쟁에 대비하기 위한 전략을 모색하고 있다.",
    stock_impact: {
      "소노공마라탕": -100,
      "왕카탕후루": -100
    }
  },
  {
    image_url: cook04,
    title: "왕카탕후루, 원산지 표시법 위반 지점 7개소 적발",
    content: "\"왕카탕후루\" 브랜드가 원산지 표시법을 위반한 적이 드러나, 지난 기간 동안 7개 지점에서 적발되었다. 해당 브랜드는 제품의 출처를 정확히 표기하지 않아 소비자들 사이에서 논란이 불거지고 있다. 관련 당국은 엄격한 조사와 함께 소비자 보호에 주력할 것으로 밝혔다.",
    stock_impact: {
      "왕카탕후루": -100
    }
  },
  {
    image_url: cook03,
    title: "훠궈 인기 속 가격 폭등",
    content: "최근 조리 재료 값 상승에 따라 훠궈 가격이 급증하고 있다. 소비자들은 놀라운 가격 상승에 당혹감을 표현하며, 음식점과 생산자들은 재료비 부담으로 인해 가격 인상이 불가피하다는 입장을 밝히고 있다. 이에 대한 다양한 의견이 대두되고 있으며, 향후 시장 반응에 관심이 집중되고 있다.",
    stock_impact: {
      "소노공마라탕": 10000
    }
  },
  {
    image_url: cook02,
    title: "중식 인기의 두 얼굴, 건강과 비만 문제",
    content: "중식 요리가 전 세계적으로 인기를 끌면서 건강 문제도 함께 대두되고 있다. 기름진 음식과 높은 칼로리 함량이 비만과 같은 건강 문제를 유발할 수 있다는 지적이다. 이에 따라 중식당들은 건강을 고려한 메뉴 개발에 집중하고 있으며, 소비자들도 건강한 식단에 대한 관심이 높아지고 있다.",
    stock_impact: {
      "소노공마라탕": 0
    }
  },
  {
    image_url: cook01,
    title: "손오공마라탕, 건강 메뉴 출시로 주가 상승",
    content: "최근 손오공마라탕이 건강을 고려한 메뉴를 새롭게 출시하면서 주가가 상승세를 보이고 있다. 새로운 메뉴는 낮은 칼로리와 다양한 영양소를 포함하여 소비자들에게 좋은 반응을 얻고 있다. 이에 따라 손오공마라탕은 지속적으로 건강 메뉴 개발에 힘쓸 예정이다.",
    stock_impact: {
      "소노공마라탕": 10000
    }
  },
  {
    image_url: IT07,
    title: "네이비, 갑질 파문에 휩싸여 경영 위기…사내 불만 급증",
    content: "최근 네이비가 갑질 논란에 휩싸였다. 회사 내 갑질 피해자들이 목소리를 높이며 업무 환경 개선을 요구하고 있으며, 이에 대한 네이비 측의 대응이 주목받고 있다. 사회적인 관심이 증가하면서 네이비는 갑질 근절 및 조직문화 혁신에 대한 적극적인 노력이 필요하다는 평가를 받고 있다.",
    stock_impact: {
      "네이비": -100
    }
  },
  {
    image_url: IT06,
    title: "삼쉉전자, 혁신적 기술의 연기 속에서 경쟁력 저하",
    content: "최근 삼쉉전자는 새로운 기술 개발에서 지연이 발생하고 있어 기업의 혁신적인 이미지에 타격을 입고 있다. 주목받는 제품 출시 일정이 연기되면서 시장에서의 경쟁력이 감소하고, 이에 따른 주주들의 우려가 커지고 있다. 삼쉉전자는 이러한 상황에서 기술 개발 속도를 높이고 혁신을 이끌어내기 위해 적극적인 대책 마련에 나서고 있다.",
    stock_impact: {
      "삼쉉": -100
    }
  },
  {
    image_url: IT05,
    title: "정부, 삼쉉과 네이비의 기술 정책 발표에 제동",
    content: "[미림기자] 이가현 기자 = 최근 정부가 삼쉉과 네이비의 새로운 기술 정책에 대해 제동을 걸었다. 해당 기업들은 자사의 기술 개발 및 도입에 대한 계획을 밝히려 했으나, 정부는 이를 검토 중이라고 밝혀 산업 효과와 경제적 영향을 신중하게 고려하고 있다. 삼쉉과 네이비는 협력을 통한 혁신적인 기술 발전을 강조하며, 정부의 결정에 대한 협상이 예상된다.",
    stock_impact: {
      "네이비": -100,
      "삼쉉": -100
    }
  },
  {
    image_url: IT04,
    title: "삼쉉, 혁신적인 기술로 새로운 차원 열다",
    content: "[미림기자] 이설화 기자 =  세계 최대 기술 기업 중 하나인 삼쉉전자가 새로운 기술을 선보이며 주목을 받고 있다. 이번 기술은 고화질 화상처리와 혁신적인 센서 기술을 결합한 것으로, 사용자들에게 더욱 생생하고 풍부한 디지털 경험을 제공할 것으로 예상된다. 삼쉉은 이를 통해 다양한 분야에서의 응용 가능성을 모색하며 글로벌 기술 혁신을 주도할 준비를 강조하고 있다.",
    stock_impact: {
      "삼쉉": 10000
    }
  },
  {
    image_url: IT03,
    title: "이전 플랫폼, 독특한 이벤트로 화제와 인기 동반",
    content: "네이비의 경쟁사인 이전이 새로운 이벤트로 사용자들 사이에서 뜨거운 반응을 얻고 있다. 이 이벤트는 참여자들에게 특별한 혜택과 즐거움을 제공하며 온라인 커뮤니티에서 확산되고 있다. 사용자들은 이 독특한 이벤트를 통해 다음 플랫폼을 더욱 즐겁게 활용하며 이용자 수가 급증하는 모습을 보이고 있다.",
    stock_impact: {
      "네이비": -100
    }
  },
  {
    image_url: IT02,
    title: "네이비, 기술 유출 파문 속 대응에 압박",
    content: "한국 최대 포털 기업 네이비가 기술 유출 사건으로 흔들리고 있다. 업계 소식통에 따르면 네이비의 중요 기술 정보가 유출됐다는 주장이 제기되어, 기술 보안에 대한 우려와 함께 이에 대한 철저한 조사와 대응이 요구되고 있다. 네이비 측은 사안을 신중히 살피고 필요한 조치를 취할 것을 약속하며, 이로 인한 영향과 대응이 관심을 모으고 있다.",
    stock_impact: {
      "네이비": -100
    }
  },
  {
    image_url: IT01,
    title: "네이비, 사우디서 기술 홍보 성공..IT 전시회 IT2024’ 일정 마무리",
    content: "한국 기업 네이비가 사우디에서 개최된 'IT2024' 전시회에서 높은 성과를 거두었다. 네이비는 혁신적인 기술 제품 및 솔루션을 효과적으로 홍보하여 국제적인 관심을 집중시켰으며, 전시회 일정을 성공적으로 마무리했다. 사우디 시장에서의 긍정적인 반응과 함께 네이비는 글로벌 시장에서의 입지 강화를 위한 노력을 지속할 것으로 기대된다.",
    stock_impact: {
      "네이비": 10000
    }
  }
];
