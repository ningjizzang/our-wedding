/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김상원",
    nameEn: "김상원",
    father: "김영동",
    mother: "조차남",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이현진",
    nameEn: "이현진",
    father: "이중구",
    mother: "정성미",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-30",
    time: "13:00",
    venue: "BMK 웨딩홀",
    hall: "5층 하모니볼룸홀",
    address: "대전광역시 중구 서문로 133",
    tel: "042-334-1000",
    mapLinks: {
      kakao: "https://kko.to/1C8PzL98eM",
      naver: "https://naver.me/5y4qWyTR"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다.",
    message: "함께 웃고 서로를 아끼며 걸어온 두 사람이\n같은 곳을 바라보며 새로운 시작을 맞이합니다.\n\n설레는 첫걸음의 순간,\n따뜻한 축복을 나누어 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "입사 동기로 만나 좋은 친구로 지내던 우리는,\n어느새 서로가 가장 편안하고 즐거운 사람이 되었습니다.\n\n함께할수록 더 많이 웃게 되었고,\n좋아하는 것과 소중히 여기는 가치들이\n닮아 있다는 것을 알게 되었습니다.\n\n서로의 가장 가까운 편이 되어\n한 팀처럼 같은 방향을 바라보며 살아가고자 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김상원", bank: "국민은행", number: "676302-04-140082" },
      { role: "아버지", name: "김영동", bank: "농협은행", number: "351-0870-2616-13" },
      { role: "어머니", name: "조차남", bank: "대구은행", number: "025-08-495068-002" }
    ],
    bride: [
      { role: "신부", name: "이현진", bank: "하나은행", number: "621-910890-45707" },
      { role: "아버지", name: "이중구", bank: "하나은행", number: "629-226931-00408" },
      { role: "어머니", name: "이미자", bank: "농협은행", number: "352-1852-6968-33" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "김상원,이현진 결혼합니다.",
    description: ""
  }
};
