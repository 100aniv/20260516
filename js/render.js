// ============================================
// Dynamic Renderer - 데이터 기반 UI 생성
// ============================================

const MAP_SVG = '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="white" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>';

function placeCard(p, showBadge) {
  const badgeMap = { deep: ['badge--deep', '🙏 신점'], light: ['badge--light', '☕ 캐쥬얼'], confirmed: ['badge--confirmed', '✓ 확정'] };
  const b = badgeMap[p.badge || p.status] || null;
  const badgeHtml = b ? `<span class="badge ${b[0]}">${b[1]}</span>` : '';
  const timeHtml = p.time ? `<div class="place-card__time">🕐 ${p.time}</div>` : '';
  const addrHtml = p.address ? `<div class="place-card__category">${p.area || ''} · ${p.category} · ${p.address}</div>` : `<div class="place-card__category">${p.area || ''} · ${p.category}</div>`;
  const tags = (p.tags || []).map(t => `<span class="place-card__tag">${t}</span>`).join('');
  return `<div class="place-card glass fade-up">
    <div class="place-card__header"><div><div class="place-card__name">${p.emoji || ''} ${p.name}</div>${addrHtml}</div>${badgeHtml}</div>
    ${timeHtml}
    <p class="place-card__desc">${p.desc}</p>
    <div class="place-card__tags">${tags}</div>
    <a href="${p.url}" target="_blank" class="naver-btn">${MAP_SVG} 네이버 지도에서 보기</a>
  </div>`;
}

function areaCard(a) {
  return `<div class="area-card glass fade-up">
    <div class="area-card__name">${a.emoji} ${a.area || a.name}</div>
    <p class="area-card__desc">${a.desc}</p>
    ${a.url ? `<a href="${a.url}" target="_blank" class="naver-btn" style="margin-top:12px">${MAP_SVG} 네이버 지도에서 보기</a>` : ''}
  </div>`;
}

// ── 전체 일정 타임라인 ──
document.getElementById('timeline-container').innerHTML = [
  { time: '14:00', name: '이오이 카페', loc: '📍 북촌 · 카페', status: 'confirmed', emoji: '☕' },
  { time: '16:00', name: '컬쳐씨어터 · 운빨로맨스', loc: '📍 대학로 · 연극', status: 'confirmed', emoji: '🎭' },
  { time: '18:00', name: '사주 · 신점 · 철학관', loc: '📍 대학로 or 종로/신당', status: 'choice', emoji: '🔮' },
  { time: '19:30', name: '저녁 식사', loc: '📍 3번 일정에 따라 결정', status: 'choice', emoji: '🍽️' }
].map(t => `<div class="timeline-item">
  <div class="timeline-item__dot timeline-item__dot--${t.status}">${t.emoji}</div>
  <div class="timeline-item__content glass">
    <span class="timeline-item__time">${t.time}</span>
    <div class="timeline-item__name">${t.name}</div>
    <div class="timeline-item__location">${t.loc}</div>
    <span class="badge badge--${t.status === 'confirmed' ? 'confirmed' : 'choice'}">${t.status === 'confirmed' ? '✓ 확정' : '선택 필요'}</span>
  </div>
</div>`).join('');

// ── 1. 카페 ──
document.getElementById('cafe-card').innerHTML = placeCard(PLACES.cafe);

// ── 2. 연극 (운빨로맨스 포스터 + 상세) ──
const t = PLACES.theater;
const play = t.play;
const castHtml = Object.entries(play.cast).map(([role, actors]) => `<div class="cast-row"><span class="cast-role">${role}</span><span class="cast-actors">${actors}</span></div>`).join('');
document.getElementById('theater-card').innerHTML = `
<div class="place-card glass fade-up">
  <div class="place-card__header"><div><div class="place-card__name">${t.emoji} ${t.name}</div><div class="place-card__category">${t.area} · ${t.category} · ${t.address}</div></div><span class="badge badge--confirmed">✓ 확정</span></div>
  <div class="place-card__time">🕐 ${t.time}</div>
  <div class="play-info">
    <div class="play-poster"><img src="img/poster.gif" alt="운빨로맨스 포스터" loading="lazy"></div>
    <div class="play-detail">
      <div class="play-title">🎬 ${play.title}</div>
      <div class="play-meta">⏱ ${play.runtime} · ${play.age}</div>
    </div>
  </div>
  <p class="place-card__desc">${play.desc}</p>
  <div class="cast-section">
    <div class="cast-header">출연진 (17차)</div>
    ${castHtml}
  </div>
  <div class="place-card__tags">${t.tags.map(tg => `<span class="place-card__tag">${tg}</span>`).join('')}</div>
  <a href="${t.url}" target="_blank" class="naver-btn">${MAP_SVG} 네이버 지도에서 보기</a>
</div>`;

// ── 3. 사주/신점 (대학로) ──
const fd = PLACES.fortune.daehakro;
document.getElementById('fortune-daehakro').innerHTML = `
  <div class="sub-category"><div class="sub-category__title"><span class="sub-category__icon">🙏</span> 신점 · 철학관</div>${fd.deep.map(p => placeCard(p)).join('')}</div>
  <div class="sub-category"><div class="sub-category__title"><span class="sub-category__icon">🃏</span> 라이트한 사주 카페</div>${fd.light.map(p => placeCard(p)).join('')}</div>`;

// ── 3. 사주/신점 (대학로 이외) ──
document.getElementById('fortune-other').innerHTML = PLACES.fortune.other.map(p => placeCard(p)).join('');

// ── 4. 식사 (대학로) ──
document.getElementById('dining-daehakro').innerHTML = `
  <div class="notice-box"><span class="notice-box__icon">🍝</span><span class="notice-box__text">3번 일정을 대학로에서 마무리한다면, 바로 근처에서 저녁까지!</span></div>
  ${PLACES.dining.daehakro.map(p => placeCard(p)).join('')}`;

// ── 4. 식사 (대학로 이외) ──
document.getElementById('dining-other').innerHTML = `
  <div class="notice-box"><span class="notice-box__icon">🍻</span><span class="notice-box__text">3번 일정이 종로/신당이라면, 을지로·종로·종각 쪽으로!</span></div>
  ${PLACES.dining.other.map(p => placeCard(p)).join('')}`;

// ── 5. 시나리오 ──
const scenarios = [
  { id: 'a', label: 'SCENARIO A', title: '대학로 올인 코스 🎯', desc: '이동 최소화! 연극 끝나고 대학로에서 신점/사주 → 저녁까지 한 번에 해결.',
    steps: [
      { time: '14:00', name: '이오이 카페', area: '북촌', dot: 'rose', emoji: '☕' },
      { time: '16:00', name: '운빨로맨스', area: '대학로 컬쳐씨어터', dot: 'rose', emoji: '🎭' },
      { time: '18:00', name: '신점/사주', area: '대학로 후보 중 선택', dot: 'purple', emoji: '🔮' },
      { time: '19:30', name: '저녁 식사', area: '대학로 맛집', dot: 'peach', emoji: '🍽️' }
    ]},
  { id: 'b', label: 'SCENARIO B', title: '대학로 → 종로/신당 코스 🗺️', desc: '연극 후 종로/신당 쪽 찐 신점·철학관을 경험하고, 종로·을지로에서 마무리.',
    steps: [
      { time: '14:00', name: '이오이 카페', area: '북촌', dot: 'rose', emoji: '☕' },
      { time: '16:00', name: '운빨로맨스', area: '대학로 컬쳐씨어터', dot: 'rose', emoji: '🎭' },
      { time: '18:00', name: '신점 · 철학관', area: '종로/신당 후보 중 선택', dot: 'purple', emoji: '🔮' },
      { time: '19:30', name: '저녁 식사', area: '종로·을지로 후보 중 선택', dot: 'mint', emoji: '🍻' }
    ]}
];
document.getElementById('scenarios-container').innerHTML = scenarios.map(s => `
<div class="scenario-card scenario-card--${s.id} glass fade-up">
  <div class="scenario-card__label">${s.label}</div>
  <h3 class="scenario-card__title">${s.title}</h3>
  <p class="scenario-card__desc">${s.desc}</p>
  <div class="route-steps">${s.steps.map(st => `
    <div class="route-step">
      <div class="route-step__dot route-step__dot--${st.dot}">${st.emoji}</div>
      <div class="route-step__info">
        <div class="route-step__time">${st.time}</div>
        <div class="route-step__name">${st.name}</div>
        <div class="route-step__area">${st.area}</div>
      </div>
    </div>`).join('')}</div>
</div>`).join('');
