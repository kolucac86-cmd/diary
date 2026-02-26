/**
 * 감사 + 확언 일기 App Logic
 * Step 1: 감사 일기 (3줄) → 따뜻한 코멘트 → Step 2: 확언 일기 (3줄) → 신의 말씀 동기부여 → 오늘의 사진+교훈 → 저장
 * + 달력 보기 (초록/노랑/빨강 동그라미)
 */

// ========== 감사 코멘트 메시지 목록 (따뜻한 코멘트) ==========
const gratitudeComments = [
    { emoji: '🌸', text: '감사하는 마음은 행복의 시작이에요.\n오늘도 감사를 느끼는 당신은 이미 빛나고 있어요.' },
    { emoji: '✨', text: '작은 것에 감사할 줄 아는 당신은\n정말 아름다운 사람이에요.' },
    { emoji: '💜', text: '감사는 가장 강력한 긍정의 에너지예요.\n당신의 하루가 더 환해질 거예요.' },
    { emoji: '🌟', text: '감사의 마음이 당신에게\n더 많은 좋은 일을 불러올 거예요.' },
    { emoji: '🍀', text: '오늘 감사한 것들을 떠올려 보세요.\n그 순간들이 당신을 더 강하게 만들어줘요.' },
    { emoji: '🌈', text: '매일 감사를 적는 당신,\n이 습관이 인생을 바꿀 거예요.' },
    { emoji: '💫', text: '감사할 줄 아는 마음은\n세상에서 가장 큰 선물이에요.' },
    { emoji: '🌻', text: '감사는 지금 이 순간을\n더 소중하게 만들어줘요.' },
    { emoji: '🦋', text: '당신이 느끼는 감사의 마음이\n주변 사람들에게도 전해질 거예요.' },
    { emoji: '🌷', text: '감사일기를 쓰는 당신은\n이미 행복을 선택한 거예요.' },
    { emoji: '🕊️', text: '감사하는 마음이 가득한 당신의 하루,\n온 우주가 축복하고 있어요.' },
    { emoji: '🌺', text: '감사는 마음의 눈을 열어줘요.\n보이지 않던 아름다움이 보이기 시작할 거예요.' }
];

// ========== 확언 코멘트 (신이 말하듯 동기부여) ==========
const affirmationComments = [
    { emoji: '🕊️', text: '사랑하는 아이야,\n네가 원하는 모든 것은 이미 이루어지고 있단다.\n세상은 너를 위해 움직이고 있어.' },
    { emoji: '✝️', text: '네가 말한 그대로 될 것이다.\n우주는 이미 네 편이야.\n믿음을 가져라, 모든 것이 이루어진다.' },
    { emoji: '🌟', text: '나의 소중한 자녀야,\n네 확언은 이미 하늘에 기록되었단다.\n세상은 네가 원하는 방향으로 흘러가고 있어.' },
    { emoji: '☀️', text: '두려워하지 마라.\n네가 선언한 것은 반드시 이루어진다.\n온 우주가 너의 꿈을 실현하기 위해 움직이고 있단다.' },
    { emoji: '🕊️', text: '사랑하는 아이야,\n네 입에서 나온 말은 씨앗이 되어\n반드시 열매를 맺을 것이다.\n세상은 이미 네 소원대로 움직이고 있어.' },
    { emoji: '💎', text: '네가 오늘 적은 확언은\n이미 현실이 되어가고 있단다.\n우주의 모든 에너지가 너를 돕고 있어.' },
    { emoji: '🌅', text: '나의 아이야, 걱정하지 마라.\n네가 원하는 삶은 이미 펼쳐지고 있단다.\n세상의 모든 것이 네 편이야.' },
    { emoji: '🙏', text: '네 확언을 들었단다.\n하늘과 땅이 너를 위해 준비하고 있어.\n잠잠히 기다려라, 놀라운 일이 일어날 것이다.' },
    { emoji: '🌿', text: '사랑하는 존재야,\n네가 믿는 대로 될 것이다.\n세상은 이미 네가 꿈꾸는 대로 움직이고 있단다.' },
    { emoji: '⭐', text: '네 안에는 무한한 힘이 있단다.\n네가 선언한 모든 것은\n이 우주의 법칙대로 반드시 이루어질 것이야.' }
];

// ========== 오늘의 교훈/한마디 ==========
const dailyLessons = [
    { photo: '🌄', lesson: '오늘 하루도 감사와 확언으로 시작했으니, 좋은 일만 가득할 거예요.' },
    { photo: '🌊', lesson: '파도처럼 밀려오는 행운을 맞이할 준비가 되었어요.' },
    { photo: '🌸', lesson: '꽃이 피듯, 당신의 꿈도 하나씩 피어나고 있어요.' },
    { photo: '🏔️', lesson: '산꼭대기에서 바라본 세상처럼, 넓은 시야로 하루를 맞이하세요.' },
    { photo: '🌅', lesson: '매일 새로운 해가 뜨듯, 당신에게도 새로운 기회가 찾아와요.' },
    { photo: '🌿', lesson: '자연처럼 조용히, 하지만 확실하게 성장하고 있어요.' },
    { photo: '⭐', lesson: '밤하늘의 별처럼 당신도 누군가에게 빛이 되고 있어요.' },
    { photo: '🌈', lesson: '비 온 뒤의 무지개처럼, 노력 뒤에는 반드시 보상이 있어요.' },
    { photo: '🦋', lesson: '나비처럼 아름답게 변화하는 당신의 모습을 응원해요.' },
    { photo: '🌻', lesson: '해바라기처럼 밝은 에너지로 하루를 채워보세요.' },
    { photo: '🍃', lesson: '바람에 흔들리더라도, 뿌리 깊은 나무는 넘어지지 않아요.' },
    { photo: '🌙', lesson: '달빛 아래에서도 꽃은 피어납니다. 당신의 시간이 올 거예요.' },
    { photo: '🔥', lesson: '작은 불꽃이 큰 빛을 만들듯, 당신의 작은 노력이 기적을 만들어요.' },
    { photo: '💧', lesson: '한 방울의 물이 바위를 뚫듯, 꾸준한 감사가 인생을 바꿔요.' }
];

// ========== 오늘의 사진 URL (Unsplash 무료 이미지) ==========
const dailyPhotos = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1518173946687-a8e0792e5c52?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1475924156734-496f6cac16e1?w=600&h=450&fit=crop'
];

// ========== State Management ==========
const state = {
    view: 'view-list',
    entries: [],
    currentEntryId: null,
    draft: null,
    pendingDeleteId: null,
    isSwipeActive: false,
    weatherEmoji: '☀️',
    weatherTemp: '',
    writeStep: 1,  // 1 = 감사, 2 = 확언
    calendarYear: new Date().getFullYear(),
    calendarMonth: new Date().getMonth(),
    loggedIn: false
};

// ========== DOM Elements ==========
const views = {
    list: document.getElementById('view-list'),
    write: document.getElementById('view-write'),
    detail: document.getElementById('view-detail'),
    calendar: document.getElementById('view-calendar')
};
const navItems = document.querySelectorAll('.nav-item');
const diaryListEl = document.getElementById('diary-list');
const pageTitle = document.getElementById('page-title');
let headerActionBtn = document.getElementById('header-action-btn');
let headerBackBtn = document.getElementById('header-back-btn');
const writeDateEl = document.getElementById('write-date');
const entryTitleInput = document.getElementById('entry-title');

const gratitudeInputs = [
    document.getElementById('gratitude-1'),
    document.getElementById('gratitude-2'),
    document.getElementById('gratitude-3')
];
const affirmationInputs = [
    document.getElementById('affirmation-1'),
    document.getElementById('affirmation-2'),
    document.getElementById('affirmation-3')
];
const weatherIconEl = document.getElementById('weather-icon');
const weatherTempEl = document.getElementById('weather-temp');
const confirmDialog = document.getElementById('confirm-dialog');
const toastEl = document.getElementById('toast');
const loadingIndicator = document.getElementById('loading-indicator');

// Step UI elements
const stepDot1 = document.getElementById('step-dot-1');
const stepDot2 = document.getElementById('step-dot-2');
const stepConnector1 = document.getElementById('step-connector-1');
const writeStep1 = document.getElementById('write-step-1');
const writeStep2 = document.getElementById('write-step-2');

// Gratitude comment overlay
const gratitudeCommentOverlay = document.getElementById('gratitude-comment-overlay');
const gratitudeCommentEmoji = document.getElementById('gratitude-comment-emoji');
const gratitudeCommentText = document.getElementById('gratitude-comment-text');
const gratitudeCommentNextBtn = document.getElementById('gratitude-comment-next-btn');

// Affirmation comment overlay
const affirmationCommentOverlay = document.getElementById('affirmation-comment-overlay');
const affirmationCommentEmoji = document.getElementById('affirmation-comment-emoji');
const affirmationCommentText = document.getElementById('affirmation-comment-text');
const affirmationCommentNextBtn = document.getElementById('affirmation-comment-next-btn');

// Completion overlay
const completionOverlay = document.getElementById('completion-overlay');
const completionPhoto = document.getElementById('completion-photo');
const completionLesson = document.getElementById('completion-lesson');
const completionDoneBtn = document.getElementById('completion-done-btn');

// Calendar elements
const calTitle = document.getElementById('cal-title');
const calGrid = document.getElementById('cal-grid');
const calPrev = document.getElementById('cal-prev');
const calNext = document.getElementById('cal-next');

// Login / Profile elements
const loginScreen = document.getElementById('view-login');
const btnGoogleLogin = document.getElementById('btn-google-login');
const userProfileEl = document.getElementById('user-profile');
const userAvatar = document.getElementById('user-avatar');
const profileDropdown = document.getElementById('profile-dropdown');
const dropdownAvatar = document.getElementById('dropdown-avatar');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const btnLogout = document.getElementById('btn-logout');

// ========== Utils ==========
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
};

const formatDateShort = (dateString) => {
    const d = new Date(dateString);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const generateId = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

const showToast = (message) => {
    toastEl.textContent = message;
    toastEl.classList.remove('hidden');
    toastEl.style.animation = 'none';
    toastEl.offsetHeight;
    toastEl.style.animation = 'fadeInOut 2s forwards';
};

const toggleModal = (show) => {
    if (show) {
        confirmDialog.classList.remove('hidden');
        setTimeout(() => confirmDialog.classList.add('visible'), 10);
    } else {
        confirmDialog.classList.remove('visible');
        setTimeout(() => confirmDialog.classList.add('hidden'), 300);
    }
};

const showLoading = (duration = 500) => {
    return new Promise(resolve => {
        if (!loadingIndicator) return resolve();
        loadingIndicator.classList.remove('hidden');
        setTimeout(() => {
            loadingIndicator.classList.add('hidden');
            resolve();
        }, duration);
    });
};

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getDayIndex = () => {
    const today = new Date();
    return (today.getFullYear() * 366 + today.getMonth() * 31 + today.getDate());
};

// ========== Weather API ==========
const weatherCodeToEmoji = (code) => {
    if (code === 0) return '☀️';
    if (code <= 3) return '⛅';
    if (code <= 48) return '🌫️';
    if (code <= 55) return '🌦️';
    if (code <= 65) return '🌧️';
    if (code <= 77) return '❄️';
    if (code <= 82) return '🌧️';
    if (code <= 99) return '⛈️';
    return '☀️';
};

const fetchWeather = async () => {
    try {
        const lat = 37.5665;
        const lon = 126.978;
        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await res.json();
        const weather = data.current_weather;
        state.weatherEmoji = weatherCodeToEmoji(weather.weathercode);
        state.weatherTemp = `${Math.round(weather.temperature)}°`;
        if (weatherIconEl) weatherIconEl.textContent = state.weatherEmoji;
        if (weatherTempEl) weatherTempEl.textContent = state.weatherTemp;
    } catch {
        state.weatherEmoji = '☀️';
        state.weatherTemp = '';
        if (weatherIconEl) weatherIconEl.textContent = '☀️';
        if (weatherTempEl) weatherTempEl.textContent = '';
    }
};

// ========== Step Management ==========
const setWriteStep = (step) => {
    state.writeStep = step;

    if (step === 1) {
        writeStep1.classList.add('active');
        writeStep2.classList.remove('active');
        stepDot1.classList.add('active');
        stepDot1.classList.remove('done');
        stepDot2.classList.remove('active');
        stepConnector1.classList.remove('active');
        gratitudeCommentOverlay.classList.add('hidden');
        affirmationCommentOverlay.classList.add('hidden');
        completionOverlay.classList.add('hidden');
        pageTitle.textContent = '감사 일기';
        entryTitleInput.value = '감사 일기';
    } else {
        writeStep1.classList.remove('active');
        writeStep2.classList.add('active');
        stepDot1.classList.remove('active');
        stepDot1.classList.add('done');
        stepDot2.classList.add('active');
        stepConnector1.classList.add('active');
        gratitudeCommentOverlay.classList.add('hidden');
        affirmationCommentOverlay.classList.add('hidden');
        completionOverlay.classList.add('hidden');
        pageTitle.textContent = '확언 일기';
        entryTitleInput.value = '확언 일기';
        setTimeout(() => affirmationInputs[0].focus(), 300);
    }
};

const showGratitudeComment = () => {
    const comment = getRandomItem(gratitudeComments);
    gratitudeCommentEmoji.textContent = comment.emoji;
    gratitudeCommentText.textContent = comment.text;
    gratitudeCommentOverlay.classList.remove('hidden');
};

const showAffirmationComment = () => {
    const comment = getRandomItem(affirmationComments);
    affirmationCommentEmoji.textContent = comment.emoji;
    affirmationCommentText.textContent = comment.text;
    affirmationCommentOverlay.classList.remove('hidden');
};

const showCompletionCard = () => {
    const idx = getDayIndex() % dailyLessons.length;
    const lesson = dailyLessons[idx];
    const photoIdx = getDayIndex() % dailyPhotos.length;

    completionPhoto.src = dailyPhotos[photoIdx];
    completionPhoto.onerror = () => {
        // If image fails, show emoji as fallback
        completionPhoto.style.display = 'none';
        const fallback = completionPhoto.parentElement;
        fallback.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;">${lesson.photo}</div>`;
    };
    completionLesson.textContent = `"${lesson.lesson}"`;

    affirmationCommentOverlay.classList.add('hidden');
    completionOverlay.classList.remove('hidden');
};

// ========== Storage (Firebase Firestore + localStorage 캐시) ==========

const getUserEntriesRef = () => {
    if (!isFirebaseReady || !auth || !auth.currentUser) return null;
    return db.collection('users').doc(auth.currentUser.uid).collection('entries');
};

let entriesUnsubscribe = null;

const subscribeToEntries = () => {
    const ref = getUserEntriesRef();
    if (!ref) return;
    if (entriesUnsubscribe) entriesUnsubscribe();
    entriesUnsubscribe = ref.onSnapshot((snapshot) => {
        state.entries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        localStorage.setItem('diary_entries', JSON.stringify(state.entries));
        if (state.view === 'view-list') renderList();
        if (state.view === 'view-calendar') renderCalendar();
    }, (error) => {
        console.error('Firestore sync error:', error);
    });
};

const saveEntryToFirestore = (entry) => {
    const ref = getUserEntriesRef();
    if (ref) ref.doc(entry.id).set(entry).catch(err => console.error('Firestore save error:', err));
};

const deleteEntryFromFirestore = (id) => {
    const ref = getUserEntriesRef();
    if (ref) ref.doc(id).delete().catch(err => console.error('Firestore delete error:', err));
};

const migrateLocalToFirestore = async () => {
    const ref = getUserEntriesRef();
    if (!ref) return;
    const saved = localStorage.getItem('diary_entries');
    if (!saved) return;
    const localEntries = JSON.parse(saved);
    if (localEntries.length === 0) return;
    try {
        const snapshot = await ref.limit(1).get();
        if (!snapshot.empty) return;
        const batch = db.batch();
        localEntries.forEach(entry => batch.set(ref.doc(entry.id), entry));
        await batch.commit();
        showToast('기존 일기를 클라우드로 동기화했어요 ☁️');
    } catch (error) {
        console.error('Migration failed:', error);
    }
};

const loadEntries = () => {
    const saved = localStorage.getItem('diary_entries');
    state.entries = saved ? JSON.parse(saved) : [];
};

const saveEntries = () => {
    localStorage.setItem('diary_entries', JSON.stringify(state.entries));
};

const saveDraft = () => {
    if (state.view !== 'view-write' || state.currentEntryId) return;
    const draft = {
        title: entryTitleInput.value,
        gratitudeLines: gratitudeInputs.map(input => input.value),
        affirmationLines: affirmationInputs.map(input => input.value),
        writeStep: state.writeStep,
        timestamp: Date.now()
    };
    if (draft.title || draft.gratitudeLines.some(l => l) || draft.affirmationLines.some(l => l)) {
        localStorage.setItem('diary_draft', JSON.stringify(draft));
    } else {
        localStorage.removeItem('diary_draft');
    }
};

const loadDraft = () => {
    const draft = localStorage.getItem('diary_draft');
    if (draft) {
        const parsed = JSON.parse(draft);
        entryTitleInput.value = parsed.title || '감사 일기';
        if (parsed.gratitudeLines) {
            gratitudeInputs.forEach((input, i) => { input.value = parsed.gratitudeLines[i] || ''; });
        }
        if (parsed.affirmationLines) {
            affirmationInputs.forEach((input, i) => { input.value = parsed.affirmationLines[i] || ''; });
        }
        if (parsed.writeStep) setWriteStep(parsed.writeStep);
        return true;
    }
    return false;
};

// ========== Navigation / View Switching ==========
const switchView = (viewName, itemId = null) => {
    Object.values(views).forEach(el => el.classList.remove('active'));
    window.scrollTo(0, 0);

    // Reset header buttons
    headerActionBtn.classList.add('hidden');
    headerBackBtn.classList.add('hidden');

    const newActionBtn = headerActionBtn.cloneNode(true);
    headerActionBtn.parentNode.replaceChild(newActionBtn, headerActionBtn);
    headerActionBtn = newActionBtn;

    const newBackBtn = headerBackBtn.cloneNode(true);
    headerBackBtn.parentNode.replaceChild(newBackBtn, headerBackBtn);
    headerBackBtn = newBackBtn;

    if (viewName === 'view-list') {
        pageTitle.textContent = '나의 일기장';
        views.list.classList.add('active');
        renderList();
        updateNav('view-list');
    } else if (viewName === 'view-write') {
        views.write.classList.add('active');
        headerActionBtn.classList.remove('hidden');
        headerActionBtn.innerHTML = '<i class="fas fa-check"></i>';
        headerActionBtn.onclick = handleCheckButton;

        headerBackBtn.classList.remove('hidden');
        headerBackBtn.onclick = () => switchView('view-list');

        fetchWeather();

        if (!itemId) {
            state.currentEntryId = null;
            if (!loadDraft()) {
                entryTitleInput.value = '감사 일기';
                gratitudeInputs.forEach(input => { input.value = ''; });
                affirmationInputs.forEach(input => { input.value = ''; });
                setWriteStep(1);
            }
            writeDateEl.textContent = formatDate(new Date());
        } else {
            const entry = state.entries.find(e => e.id === itemId);
            if (entry) {
                state.currentEntryId = itemId;
                entryTitleInput.value = entry.title;

                const gLines = (entry.body || '').split('\n');
                gratitudeInputs.forEach((input, i) => {
                    input.value = gLines[i] || '';
                });

                const aLines = (entry.affirmation || '').split('\n');
                affirmationInputs.forEach((input, i) => {
                    input.value = aLines[i] || '';
                });

                writeDateEl.textContent = formatDate(entry.date);
                setWriteStep(1);
            }
        }
        updateNav('view-write');
        setTimeout(() => gratitudeInputs[0].focus(), 300);
    } else if (viewName === 'view-calendar') {
        pageTitle.textContent = '달력';
        views.calendar.classList.add('active');
        renderCalendar();
        updateNav('view-calendar');
    } else if (viewName === 'view-detail') {
        const entry = state.entries.find(e => e.id === itemId);
        if (entry) {
            state.currentEntryId = itemId;
            pageTitle.textContent = '일기 보기';
            views.detail.classList.add('active');

            headerBackBtn.classList.remove('hidden');
            headerBackBtn.onclick = () => {
                if (state.previousView === 'view-calendar') {
                    switchView('view-calendar');
                } else {
                    switchView('view-list');
                }
            };

            renderDetail(entry);
            updateNav('');
        }
    }

    state.view = viewName;
};

// ========== Check Button Handler ==========
const handleCheckButton = (e) => {
    if (e) e.preventDefault();

    if (state.writeStep === 1) {
        const hasContent = gratitudeInputs.some(input => input.value.trim());
        if (!hasContent) {
            showToast('감사한 것을 적어주세요 🙏');
            return;
        }
        showGratitudeComment();
    } else {
        // Step 2: Validate affirmation
        const hasContent = affirmationInputs.some(input => input.value.trim());
        if (!hasContent) {
            showToast('확언을 적어주세요 💪');
            return;
        }
        showAffirmationComment();
    }
};

const updateNav = (targetId) => {
    navItems.forEach(item => {
        if (item.id === 'btn-new-entry' && targetId === 'view-write') {
            item.classList.add('active');
            return;
        }
        if (item.dataset.target === targetId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// ========== Core Logic ==========
const renderList = () => {
    diaryListEl.innerHTML = '';

    if (state.entries.length === 0) {
        diaryListEl.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-book-open"></i>
                <p>아직 작성된 일기가 없어요.<br>첫 번째 이야기를 들려주세요!</p>
                <button class="empty-write-btn" onclick="switchView('view-write')">
                    <i class="fas fa-pen"></i> 새 일기 쓰기
                </button>
            </div>`;
        return;
    }

    const sortedEntries = [...state.entries].sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedEntries.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'diary-card';
        card.dataset.id = entry.id;

        const dateStr = formatDate(entry.date);
        const bodyLines = (entry.body || '').split('\n').filter(l => l.trim());
        const preview = bodyLines.length > 0
            ? bodyLines.map((line, i) => `${i + 1}. ${line}`).join(' · ')
            : '내용 없음';

        const weatherBadge = entry.weather ? `<span class="card-weather">${entry.weather}</span>` : '';

        card.innerHTML = `
            <div class="swipe-action"><i class="fas fa-trash"></i></div>
            <div class="card-top-row">
                <span class="card-date">${dateStr}</span>
                ${weatherBadge}
            </div>
            <h3 class="card-title">${entry.title || '제목 없음'}</h3>
            <p class="card-preview">${preview}</p>
        `;

        card.addEventListener('click', () => {
            if (!state.isSwipeActive) {
                state.previousView = 'view-list';
                switchView('view-detail', entry.id);
            }
        });

        // Touch/Swipe Logic
        let startX = 0;
        card.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
            state.isSwipeActive = false;
        }, { passive: true });

        card.addEventListener('touchmove', e => {
            const diffX = e.touches[0].clientX - startX;
            if (diffX < 0 && diffX > -100) {
                card.style.transform = `translateX(${diffX}px)`;
                if (diffX < -10) state.isSwipeActive = true;
            }
        }, { passive: true });

        card.addEventListener('touchend', e => {
            const diffX = e.changedTouches[0].clientX - startX;
            card.style.transition = 'transform 0.3s';
            card.style.transform = '';
            setTimeout(() => { card.style.transition = 'transform 0.2s, box-shadow 0.2s'; }, 300);
            if (diffX < -60) confirmDelete(entry.id);
            setTimeout(() => { state.isSwipeActive = false; }, 100);
        });

        diaryListEl.appendChild(card);
    });
};

const renderDetail = (entry) => {
    document.getElementById('detail-title').textContent = entry.title || '제목 없음';
    document.getElementById('detail-date').textContent = formatDate(entry.date);

    const detailBody = document.getElementById('detail-body');
    const gLines = (entry.body || '').split('\n');
    const aLines = (entry.affirmation || '').split('\n');

    let html = '';
    if (entry.weather) {
        html += `<div class="detail-weather">${entry.weather} ${entry.weatherTemp || ''}</div>`;
    }

    // 감사 일기 섹션
    html += '<h4 class="detail-section-title">🙏 감사한 것</h4>';
    html += '<div class="detail-gratitude-list">';
    gLines.forEach((line, i) => {
        if (line.trim()) {
            html += `<div class="detail-gratitude-item">
                <span class="detail-line-number">${i + 1}</span>
                <span class="detail-line-text">${line}</span>
            </div>`;
        }
    });
    html += '</div>';

    // 확언 일기 섹션
    if (aLines.some(l => l.trim())) {
        html += '<h4 class="detail-section-title" style="margin-top:24px;">💪 나의 확언</h4>';
        html += '<div class="detail-gratitude-list">';
        aLines.forEach((line, i) => {
            if (line.trim()) {
                html += `<div class="detail-gratitude-item aff-item">
                    <span class="detail-line-number aff-num">${i + 1}</span>
                    <span class="detail-line-text">${line}</span>
                </div>`;
            }
        });
        html += '</div>';
    }

    // 오늘의 사진 + 교훈
    if (entry.completionPhoto || entry.completionLesson) {
        html += '<div class="detail-completion-section">';
        html += '<h4 class="detail-section-title">🌟 오늘의 메시지</h4>';
        if (entry.completionPhoto) {
            html += `<img src="${entry.completionPhoto}" class="detail-completion-photo" alt="오늘의 사진" onerror="this.style.display='none'">`;
        }
        if (entry.completionLesson) {
            html += `<div class="detail-completion-lesson">${entry.completionLesson}</div>`;
        }
        html += '</div>';
    }

    detailBody.innerHTML = html;

    // Setup detail actions
    const editBtn = document.getElementById('btn-edit');
    const deleteBtn = document.getElementById('btn-delete');
    const newEditBtn = editBtn.cloneNode(true);
    const newDeleteBtn = deleteBtn.cloneNode(true);
    editBtn.parentNode.replaceChild(newEditBtn, editBtn);
    deleteBtn.parentNode.replaceChild(newDeleteBtn, deleteBtn);
    newEditBtn.onclick = () => switchView('view-write', entry.id);
    newDeleteBtn.onclick = () => confirmDelete(entry.id);
};

const saveEntry = () => {
    const title = entryTitleInput.value.trim();
    const gratitudeBody = gratitudeInputs.map(input => input.value.trim()).join('\n');
    const affirmationBody = affirmationInputs.map(input => input.value.trim()).join('\n');

    if (!gratitudeBody.replace(/\n/g, '') && !title) {
        showToast('내용을 입력해주세요.');
        return;
    }

    // Get completion data
    const idx = getDayIndex() % dailyLessons.length;
    const lesson = dailyLessons[idx];
    const photoIdx = getDayIndex() % dailyPhotos.length;

    const entry = {
        id: state.currentEntryId || generateId(),
        title: title || '감사 & 확언 일기',
        body: gratitudeBody,
        affirmation: affirmationBody,
        date: state.currentEntryId
            ? state.entries.find(en => en.id === state.currentEntryId).date
            : new Date().toISOString(),
        weather: state.weatherEmoji,
        weatherTemp: state.weatherTemp,
        completionPhoto: dailyPhotos[photoIdx],
        completionLesson: lesson.lesson,
        isComplete: true
    };

    if (state.currentEntryId) {
        const index = state.entries.findIndex(en => en.id === state.currentEntryId);
        if (index !== -1) state.entries[index] = entry;
    } else {
        state.entries.unshift(entry);
    }

    saveEntries();
    saveEntryToFirestore(entry);
    if (!state.currentEntryId) localStorage.removeItem('diary_draft');

    // Hide all overlays
    gratitudeCommentOverlay.classList.add('hidden');
    affirmationCommentOverlay.classList.add('hidden');
    completionOverlay.classList.add('hidden');

    showToast('저장되었습니다 🙏');
    switchView('view-calendar');
};

const confirmDelete = (id) => {
    state.pendingDeleteId = id;
    toggleModal(true);
};

const executeDelete = () => {
    if (state.pendingDeleteId) {
        deleteEntryFromFirestore(state.pendingDeleteId);
        state.entries = state.entries.filter(e => e.id !== state.pendingDeleteId);
        saveEntries();
        state.pendingDeleteId = null;
        toggleModal(false);
        if (state.view === 'view-detail') {
            switchView('view-list');
        } else {
            renderList();
        }
        showToast('삭제되었습니다.');
    }
};

// ========== Calendar ==========
const renderCalendar = () => {
    const year = state.calendarYear;
    const month = state.calendarMonth;

    calTitle.textContent = `${year}년 ${month + 1}월`;
    calGrid.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const todayStr = formatDateShort(today);

    // Build entry map for this month
    const entryMap = {};
    state.entries.forEach(entry => {
        const dateKey = formatDateShort(entry.date);
        entryMap[dateKey] = entry;
    });

    // Draft check
    const draftData = localStorage.getItem('diary_draft');
    const hasDraftToday = draftData ? true : false;

    // Empty cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'cal-day empty';
        calGrid.appendChild(empty);
    }

    // Day cells
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const cell = document.createElement('div');
        cell.className = 'cal-day';

        if (dateStr === todayStr) {
            cell.classList.add('today');
        }

        const dayNum = document.createElement('span');
        dayNum.className = 'cal-day-num';
        dayNum.textContent = day;
        cell.appendChild(dayNum);

        // Status dot
        const entry = entryMap[dateStr];
        const cellDate = new Date(year, month, day);

        if (cellDate <= today) {
            const dot = document.createElement('span');
            dot.className = 'cal-status-dot';

            if (entry) {
                if (entry.isComplete && entry.affirmation && entry.affirmation.replace(/\n/g, '').trim()) {
                    dot.classList.add('completed');
                } else {
                    dot.classList.add('in-progress');
                }
            } else if (dateStr === todayStr && hasDraftToday) {
                dot.classList.add('in-progress');
            } else if (cellDate < today) {
                dot.classList.add('not-written');
            }

            if (dot.classList.contains('completed') || dot.classList.contains('in-progress') || dot.classList.contains('not-written')) {
                cell.appendChild(dot);
            }
        }

        // Click to view entry
        if (entry) {
            cell.addEventListener('click', () => {
                state.previousView = 'view-calendar';
                switchView('view-detail', entry.id);
            });
            cell.style.cursor = 'pointer';
        } else if (dateStr === todayStr) {
            cell.addEventListener('click', () => {
                switchView('view-write');
            });
            cell.style.cursor = 'pointer';
        }

        calGrid.appendChild(cell);
    }
};

// ========== Setup Listeners ==========
document.addEventListener('DOMContentLoaded', async () => {
    await showLoading(800);

    document.getElementById('current-date-display').textContent = formatDate(new Date());

    // Nav
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target;
            navItems.forEach(nav => nav.classList.remove('active'));
            e.currentTarget.classList.add('active');
            if (target) switchView(target);
            else if (e.currentTarget.id === 'btn-new-entry') switchView('view-write');
        });
    });

    // Auto-save
    const autoSaveHandler = () => { if (!state.currentEntryId) saveDraft(); };
    entryTitleInput.addEventListener('input', autoSaveHandler);
    gratitudeInputs.forEach(input => input.addEventListener('input', autoSaveHandler));
    affirmationInputs.forEach(input => input.addEventListener('input', autoSaveHandler));

    // Enter key navigation
    gratitudeInputs.forEach((input, i) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (i < gratitudeInputs.length - 1) gratitudeInputs[i + 1].focus();
                else handleCheckButton(e);
            }
        });
    });
    affirmationInputs.forEach((input, i) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (i < affirmationInputs.length - 1) affirmationInputs[i + 1].focus();
                else handleCheckButton(e);
            }
        });
    });

    gratitudeCommentNextBtn.addEventListener('click', () => setWriteStep(2));
    affirmationCommentNextBtn.addEventListener('click', () => showCompletionCard());
    completionDoneBtn.addEventListener('click', () => saveEntry());

    // Calendar navigation
    calPrev.addEventListener('click', () => {
        state.calendarMonth--;
        if (state.calendarMonth < 0) { state.calendarMonth = 11; state.calendarYear--; }
        renderCalendar();
    });
    calNext.addEventListener('click', () => {
        state.calendarMonth++;
        if (state.calendarMonth > 11) { state.calendarMonth = 0; state.calendarYear++; }
        renderCalendar();
    });

    // Modal
    document.getElementById('cancel-delete').addEventListener('click', () => { state.pendingDeleteId = null; toggleModal(false); });
    document.getElementById('confirm-delete').addEventListener('click', executeDelete);

    // ========== Firebase Auth ==========
    if (isFirebaseReady && auth) {
        btnGoogleLogin.addEventListener('click', async () => {
            try {
                await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            } catch (error) {
                if (error.code === 'auth/popup-closed-by-user') showToast('로그인이 취소되었어요');
                else showToast('로그인에 실패했어요 😢');
            }
        });

        if (btnLogout) btnLogout.addEventListener('click', async () => {
            if (entriesUnsubscribe) { entriesUnsubscribe(); entriesUnsubscribe = null; }
            await auth.signOut();
            state.entries = [];
            if (profileDropdown) profileDropdown.classList.add('hidden');
            showToast('로그아웃되었어요');
        });

        if (userAvatar) userAvatar.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (profileDropdown && !profileDropdown.contains(e.target)) profileDropdown.classList.add('hidden');
        });

        auth.onAuthStateChanged((user) => {
            if (user) {
                state.loggedIn = true;
                if (userProfileEl) userProfileEl.classList.remove('hidden');
                if (userAvatar) userAvatar.src = user.photoURL || '';
                if (dropdownAvatar) dropdownAvatar.src = user.photoURL || '';
                if (profileName) profileName.textContent = user.displayName || '사용자';
                if (profileEmail) profileEmail.textContent = user.email || '';
                if (loginScreen) loginScreen.classList.remove('active');
                document.querySelector('.bottom-nav').classList.remove('hidden');
                loadEntries();
                renderList();
                subscribeToEntries();
                migrateLocalToFirestore();
                switchView('view-list');
            } else {
                state.loggedIn = false;
                state.entries = [];
                if (userProfileEl) userProfileEl.classList.add('hidden');
                Object.values(views).forEach(el => el.classList.remove('active'));
                if (loginScreen) loginScreen.classList.add('active');
                document.querySelector('.bottom-nav').classList.add('hidden');
            }
        });
    } else {
        // Firebase 미설정 → localStorage 모드
        if (loginScreen) loginScreen.style.display = 'none';
        loadEntries();
        renderList();
    }

    fetchWeather();
});
