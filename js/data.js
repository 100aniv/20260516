const PLACES = {
  cafe: {
    name: "이오이",
    category: "카페 · 디저트",
    area: "북촌",
    address: "서울 종로구 재동 25-2 1층",
    time: "14:00",
    status: "confirmed",
    emoji: "☕",
    url: "https://map.naver.com/p/search/이오이%20종로구%20재동",
    desc: "북촌 한옥마을 인근에 위치한 감성 카페. 고즈넉한 한옥 골목 사이에 자리잡은 공간으로, 여유로운 오후를 시작하기에 좋은 곳이에요.",
    tags: ["한옥 감성", "포토존", "시그니처 음료"]
  },
  theater: {
    name: "컬쳐씨어터",
    category: "공연 · 연극시설",
    area: "대학로",
    address: "서울 종로구 동숭동 1-73 매표소 1층, 공연장 5층",
    time: "16:00",
    status: "confirmed",
    emoji: "🎭",
    url: "https://map.naver.com/p/search/컬쳐씨어터%20대학로",
    play: {
      title: "운빨로맨스",
      runtime: "약 90분",
      age: "만 13세 이상",
      desc: "네이버 인기 웹툰 원작! 점과 운명을 맹신하는 여자 '점보늬'와 운명은 스스로 개척하는 것이라 믿는 남자 '제택후'의 로맨틱 코미디. 액운이 가득하다는 점괘 때문에 숫총각 호랑이띠 남자와 하룻밤을 보내야 한다는 예언을 들은 점보늬가 제택후를 쫓아다니면서 벌어지는 좌충우돌 이야기. 'Never Give Up'이라는 희망의 메시지를 유쾌하게 담아낸 오픈런 인기작!",
      cast: {
        "점보늬": "민지율, 윤서우, 차은담",
        "제택후": "김준영, 서동현, 정승준",
        "한량하": "이건희, 조병진, 차민우",
        "노월희": "배혜수, 민서안, 조현지"
      }
    },
    tags: ["소극장", "웹툰 원작", "로맨틱 코미디"]
  },
  fortune: {
    daehakro: {
      deep: [
        {
          name: "혜성사",
          category: "절 · 사찰",
          address: "서울 종로구 명륜4가 206-16",
          emoji: "🙏",
          url: "https://map.naver.com/p/search/혜성사%20명륜4가",
          desc: "스님이 직접 봐주시는 신점으로 유명한 곳. 일반적인 사주 카페와는 차원이 다른, 진지하고 깊이 있는 영적 상담을 받을 수 있어요.",
          tags: ["스님 신점", "깊이 있는 상담", "영적 통찰"],
          badge: "deep"
        },
        {
          name: "도깨비대신",
          category: "운세 · 사주",
          address: "서울 종로구 명륜4가 208-21 빨간대문집",
          emoji: "👹",
          url: "https://map.naver.com/p/search/도깨비대신%20명륜4가",
          desc: "빨간 대문이 인상적인 전통 무속 방식의 신점. 무속 특유의 강렬하고 신비로운 분위기를 풀풀 느낄 수 있는 곳이에요.",
          tags: ["무속 신점", "빨간대문집", "전통 방식"],
          badge: "deep"
        }
      ],
      light: [
        {
          name: "도담사주타로 2호점",
          category: "운세 · 사주",
          address: "서울 종로구 동숭동 130-18 2층",
          emoji: "🃏",
          url: "https://map.naver.com/p/search/도담사주타로%202호점",
          desc: "캐쥬얼한 분위기에서 부담 없이 사주와 타로를 즐길 수 있는 카페. 연극 관람 후 가볍게 들러서 재미있는 운세 이야기를 나눠보기 좋은 곳이에요.",
          tags: ["캐쥬얼", "카페 분위기", "부담 없는"],
          badge: "light"
        },
        {
          name: "연금술 혜화",
          category: "바(BAR)",
          address: "서울 종로구 동숭동 50-11 1층",
          emoji: "⚗️",
          url: "https://map.naver.com/p/search/연금술%20혜화",
          desc: "혜화역 인근의 감성적인 바 겸 타로 공간. 아늑한 분위기에서 타로 리딩을 받을 수 있어요. 연금술이라는 이름처럼 일상을 특별하게 바꿔주는 경험.",
          tags: ["감성 타로", "바 분위기", "혜화역 인근"],
          badge: "light"
        },
        {
          name: "쪽집게사주타로",
          category: "운세 · 사주",
          address: "서울 종로구 명륜4가 54-1",
          emoji: "🔮",
          url: "https://map.naver.com/p/search/쪽집게사주타로",
          desc: "이름처럼 정확하기로 소문난 사주타로 전문점. 대학로에서 연극 보고 가볍게 들러볼 수 있는 위치에요.",
          tags: ["정확한 리딩", "사주타로", "대학로 인근"],
          badge: "light"
        },
        {
          name: "인생사주타로",
          category: "심리상담",
          address: "서울 종로구 혜화동 178-1 3층",
          emoji: "✨",
          url: "https://map.naver.com/p/search/인생사주타로%20혜화동",
          desc: "심리상담과 사주를 결합한 독특한 공간. 단순 운세가 아닌 인생 전반에 대한 깊이 있는 상담을 받아볼 수 있어요.",
          tags: ["심리상담", "인생 사주", "깊이 있는"],
          badge: "light"
        }
      ]
    },
    other: [
      {
        name: "용신도령",
        category: "운세 · 사주",
        area: "신당",
        address: "서울 중구 신당동 130-26 101호",
        emoji: "🐉",
        url: "https://map.naver.com/p/search/용신도령%20신당동",
        desc: "신당동에 위치한 신점 전문. 용신의 기운을 빌려 점을 보는 독특한 방식으로, 신당동 점집 거리의 유명한 곳이에요.",
        tags: ["신당동", "용신 신점", "전통 무속"]
      },
      {
        name: "궁연암",
        category: "운세 · 사주",
        area: "황학동",
        address: "서울 중구 황학동 2523",
        emoji: "🏛️",
        url: "https://map.naver.com/p/search/궁연암%20황학동",
        desc: "황학동에 자리잡은 전통 철학관. 오래된 내공으로 제대로 된 사주 풀이를 해주는 곳이에요.",
        tags: ["황학동", "전통 철학관", "사주 풀이"]
      },
      {
        name: "신당",
        category: "운세 · 사주",
        area: "종로 인사동",
        address: "서울 종로구 인사동 148 2층",
        emoji: "🔮",
        url: "https://map.naver.com/p/search/신당%20인사동%20148",
        desc: "인사동에 위치한 신점 전문. 종로 한복판에서 전통적인 방식의 신점을 경험할 수 있어요.",
        tags: ["인사동", "신점", "종로"]
      },
      {
        name: "나비신궁 신비당 신점 사주",
        category: "운세 · 사주",
        area: "성북구 정릉",
        address: "서울 성북구 정릉동 1034 라온유아파트 1002호",
        emoji: "🦋",
        url: "https://map.naver.com/p/search/나비신궁%20신비당",
        desc: "정릉에 위치한 신점 전문. 나비신궁이라는 독특한 이름의 이곳은 깊이 있는 신점 상담으로 알려져 있어요.",
        tags: ["정릉", "신점 사주", "깊이 있는 상담"]
      }
    ]
  },
  dining: {
    daehakro: [
      {
        name: "술비",
        category: "요리주점",
        address: "서울 종로구 혜화동 163-33 1층",
        emoji: "🍶",
        url: "https://map.naver.com/p/search/술비%20혜화동",
        desc: "혜화동에 위치한 분위기 좋은 요리주점. 다양한 안주와 함께 편하게 한 잔 즐기기 좋은 곳이에요.",
        tags: ["요리주점", "분위기 좋은", "혜화동"]
      },
      {
        name: "더도어스",
        category: "술집",
        address: "서울 종로구 명륜3가 118-1 2층",
        emoji: "🚪",
        url: "https://map.naver.com/p/search/더도어스%20명륜3가",
        desc: "대학로 근처의 감성 술집. 아늑한 2층 공간에서 편안하게 즐길 수 있어요.",
        tags: ["감성 술집", "아늑한 2층", "대학로 인근"]
      },
      {
        name: "올디스",
        category: "바(BAR)",
        address: "서울 종로구 명륜4가 64-9",
        emoji: "🎵",
        url: "https://map.naver.com/p/search/올디스%20명륜4가",
        desc: "레트로 감성이 물씬 나는 바. 올디스 음악과 함께 분위기 있는 시간을 보낼 수 있어요.",
        tags: ["레트로 감성", "바", "음악"]
      },
      {
        name: "천막집 혜화점",
        category: "한식",
        address: "서울 종로구 명륜4가 43-1 1층",
        emoji: "⛺",
        url: "https://map.naver.com/p/search/천막집%20혜화점",
        desc: "대학로의 유명한 한식 포장마차 느낌 식당. 푸짐한 한식 메뉴를 부담 없이 즐길 수 있어요.",
        tags: ["한식", "포장마차 느낌", "푸짐한"]
      },
      {
        name: "구룡관 혜화본점",
        category: "중식당",
        address: "서울 종로구 명륜2가 21-14",
        emoji: "🥟",
        url: "https://map.naver.com/p/search/구룡관%20혜화본점",
        desc: "혜화의 인기 중식당. 짜장면부터 탕수육까지 든든한 중식 한 끼를 즐기기 좋은 곳이에요.",
        tags: ["중식", "혜화 맛집", "든든한 한끼"]
      }
    ],
    other: [
      {
        name: "익선동 부산오뎅",
        category: "한식",
        area: "종로 익선동",
        address: "서울 종로구 낙원동 121-1",
        emoji: "🍢",
        url: "https://map.naver.com/p/search/익선동%20부산오뎅",
        desc: "익선동의 핫한 부산식 오뎅집. 따뜻한 오뎅 국물과 함께 다양한 부산식 안주를 즐길 수 있어요.",
        tags: ["익선동", "부산오뎅", "따뜻한 국물"]
      },
      {
        name: "뉴욕포차 종로",
        category: "요리주점",
        area: "종로 돈의동",
        address: "서울 종로구 돈의동 44-1 2층",
        emoji: "🗽",
        url: "https://map.naver.com/p/search/뉴욕포차%20종로",
        desc: "종로에 위치한 트렌디한 요리주점. 뉴욕 스타일의 분위기에서 다양한 안주와 칵테일을 즐길 수 있어요.",
        tags: ["종로", "트렌디", "요리주점"]
      },
      {
        name: "타카사고",
        category: "주점",
        area: "종로 돈의동",
        address: "서울 종로구 돈의동 44-1 2층",
        emoji: "🏮",
        url: "https://map.naver.com/p/search/타카사고%20종로",
        desc: "종로 돈의동에 위치한 일본식 주점. 이자카야 분위기에서 정통 일본 안주와 사케를 즐길 수 있어요.",
        tags: ["종로", "이자카야", "일본식 주점"]
      }
    ]
  }
};
