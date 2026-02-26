# 🔥 Firebase 설정 가이드

## 1단계: Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com) 접속
2. **"프로젝트 추가"** 클릭
3. 프로젝트 이름 입력 (예: `my-soul-diary`)
4. Google Analytics는 선택 사항 (비활성화 해도 됨)
5. **"프로젝트 만들기"** 클릭

## 2단계: 웹 앱 추가

1. 프로젝트 대시보드에서 **웹 아이콘 (`</>`)** 클릭
2. 앱 닉네임 입력 (예: `diary-web`)
3. **"앱 등록"** 클릭
4. 화면에 나오는 `firebaseConfig` 값을 복사
5. `firebase-config.js` 파일을 열고 해당 값으로 교체:

```javascript
const firebaseConfig = {
    apiKey: "여기에_복사한_값",
    authDomain: "여기에_복사한_값",
    projectId: "여기에_복사한_값",
    storageBucket: "여기에_복사한_값",
    messagingSenderId: "여기에_복사한_값",
    appId: "여기에_복사한_값"
};
```

## 3단계: Google 로그인 활성화

1. Firebase Console 왼쪽 메뉴 → **Authentication** 클릭
2. **"시작하기"** 클릭
3. **Sign-in method** 탭 → **Google** 클릭
4. **"사용 설정"** 토글 ON
5. 지원 이메일 선택 후 **"저장"**

## 4단계: Firestore 데이터베이스 생성

1. 왼쪽 메뉴 → **Firestore Database** 클릭
2. **"데이터베이스 만들기"** 클릭
3. 위치 선택 → **asia-northeast3 (서울)** 권장
4. **"테스트 모드에서 시작"** 선택 → **"만들기"**

## 5단계: 보안 규칙 설정

1. Firestore → **규칙** 탭 클릭
2. 기존 규칙을 아래로 교체:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. **"게시"** 클릭

## 6단계: 승인된 도메인 추가 (배포 시)

GitHub Pages로 배포했다면:
1. Authentication → **Settings** → **승인된 도메인**
2. **"도메인 추가"** 클릭
3. `YOUR_USERNAME.github.io` 입력

---

## 🚀 GitHub Pages 배포

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/my-soul-diary.git
git push -u origin main
```

GitHub 저장소 → Settings → Pages → Source: **main** branch → Save

배포 URL: `https://YOUR_USERNAME.github.io/my-soul-diary/`
