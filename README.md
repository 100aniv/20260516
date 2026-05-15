# 5월 16일 데이트 코스 브리핑 💕

모바일 친화적인 데이트 동선 브리핑 웹페이지입니다.

## 로컬 실행

```bash
cd date-itinerary
python3 -m http.server 8080
# http://localhost:8080 에서 확인
```

## GitHub Pages 배포

1. GitHub에 새 Repository 생성
2. 이 폴더의 파일들을 push
3. Repository Settings → Pages → Source: `main` branch, `/ (root)` 선택
4. 배포 완료! `https://<username>.github.io/<repo-name>/` 에서 확인

```bash
git init
git add .
git commit -m "feat: 5월 16일 데이트 코스 브리핑"
git remote add origin https://github.com/<username>/<repo-name>.git
git branch -M main
git push -u origin main
```

## 구조

```
date-itinerary/
├── index.html      # 메인 페이지
├── css/
│   └── style.css   # 스타일 (따뜻한 크림/로즈 톤)
├── js/
│   ├── data.js     # 장소 데이터
│   └── app.js      # 인터랙션 (탭, 스크롤 애니메이션)
└── README.md
```
