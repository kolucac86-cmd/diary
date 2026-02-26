/**
 * Firebase 설정 파일
 * 
 * 📋 설정 방법: SETUP.md 참고
 * 1. https://console.firebase.google.com 에서 프로젝트 생성
 * 2. 웹 앱 추가 후 아래 config 값 교체
 * 3. Authentication → Google 로그인 활성화
 * 4. Firestore Database 생성
 */

const firebaseConfig = {
    apiKey: "AIzaSyAfWmZzNhCpqyugAWqfGGeQkMV4MkyZt4w",
    authDomain: "my-soul-diary.firebaseapp.com",
    projectId: "my-soul-diary",
    storageBucket: "my-soul-diary.firebasestorage.app",
    messagingSenderId: "171644304804",
    appId: "1:171644304804:web:dcef5f9bac9e515dd3d531"
};

// Firebase 초기화
const isFirebaseReady = firebaseConfig.apiKey !== "YOUR_API_KEY";

if (isFirebaseReady) {
    firebase.initializeApp(firebaseConfig);
    var auth = firebase.auth();
    var db = firebase.firestore();

    // 오프라인 지원
    db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
        console.log('Persistence:', err.code);
    });
} else {
    var auth = null;
    var db = null;
    console.warn('⚠️ Firebase 미설정 → localStorage 모드');
    console.warn('📖 SETUP.md 를 참고하여 Firebase를 설정하세요.');
}
