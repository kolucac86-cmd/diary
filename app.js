/**
 * 감사 + 확언 일기 App Logic
 * Step 1: 감사 일기 (3줄) → 따뜻한 코멘트 → Step 2: 확언 일기 (3줄) → 신의 말씀 동기부여 → 오늘의 사진+교훈 → 저장
 * + 달력 보기 (초록/노랑/빨강 동그라미)
 */

// ========== 🌟 무한 코멘트 생성 시스템 ==========
// 감사/확언/교훈 메시지를 동적으로 조합하여 매번 다른 메시지를 생성합니다.

// --- 감사 코멘트 대규모 풀 (50개+) ---
const gratitudeMessages = [
    '감사하는 마음은 행복의 시작이에요.\n오늘도 감사를 느끼는 당신은 이미 빛나고 있어요.',
    '작은 것에 감사할 줄 아는 당신은\n정말 아름다운 사람이에요.',
    '감사는 가장 강력한 긍정의 에너지예요.\n당신의 하루가 더 환해질 거예요.',
    '감사의 마음이 당신에게\n더 많은 좋은 일을 불러올 거예요.',
    '오늘 감사한 것들을 떠올려 보세요.\n그 순간들이 당신을 더 강하게 만들어줘요.',
    '매일 감사를 적는 당신,\n이 습관이 인생을 바꿀 거예요.',
    '감사할 줄 아는 마음은\n세상에서 가장 큰 선물이에요.',
    '감사는 지금 이 순간을\n더 소중하게 만들어줘요.',
    '당신이 느끼는 감사의 마음이\n주변 사람들에게도 전해질 거예요.',
    '감사일기를 쓰는 당신은\n이미 행복을 선택한 거예요.',
    '감사하는 마음이 가득한 당신의 하루,\n온 우주가 축복하고 있어요.',
    '감사는 마음의 눈을 열어줘요.\n보이지 않던 아름다움이 보이기 시작할 거예요.',
    '감사는 영혼의 음악이에요.\n당신의 하루가 아름다운 멜로디로 채워질 거예요.',
    '감사하는 순간, 우주가 미소 짓는다는 걸 아세요?\n당신은 지금 우주를 웃게 하고 있어요.',
    '감사의 씨앗을 뿌리는 당신에게\n풍성한 열매가 돌아올 거예요.',
    '오늘의 감사가 내일의 기적이 됩니다.\n당신은 기적을 만드는 사람이에요.',
    '감사하는 마음으로 세상을 바라보면\n모든 것이 선물로 보여요.',
    '당신의 감사 일기 한 줄 한 줄이\n하늘에 별이 되어 빛나고 있어요.',
    '감사는 마음의 정원에 피는 꽃이에요.\n오늘도 아름다운 꽃을 피워주셨네요.',
    '감사할 줄 아는 사람은\n어떤 상황에서도 행복을 찾아낼 수 있어요.',
    '감사의 마음은 상처를 치유하는\n가장 부드러운 약이에요.',
    '당신이 적은 감사 한 줄이\n누군가에게 희망이 될 수 있어요.',
    '감사는 과거의 아픔을 치유하고\n미래의 두려움을 녹여줘요.',
    '오늘 감사 일기를 쓴 당신은\n내일의 자신에게 선물을 준 거예요.',
    '감사하는 마음이 곧 기도예요.\n당신의 기도가 하늘에 닿고 있어요.',
    '삶의 작은 순간들에 감사하는 당신,\n그 순간들이 모여 큰 행복이 될 거예요.',
    '감사는 어둠 속의 촛불과 같아요.\n작지만 온 방을 환하게 밝혀줘요.',
    '감사하는 마음으로 잠들면\n행복한 꿈이 찾아올 거예요.',
    '오늘도 감사 일기를 쓰며\n하루를 빛내주셔서 고마워요.',
    '감사의 파동은 끝없이 퍼져나가요.\n당신의 감사가 세상을 변화시키고 있어요.',
    '감사는 가장 아름다운 언어예요.\n당신은 오늘 아름다운 말을 했어요.',
    '감사하는 마음이 있는 곳에\n기적은 항상 찾아옵니다.',
    '당신의 감사 목록이 길어질수록\n행복의 크기도 함께 자라고 있어요.',
    '감사는 현재를 풍요롭게 만드는\n마법의 주문이에요.',
    '감사하는 습관을 가진 당신은\n이미 성공한 사람이에요.',
    '감사의 눈으로 세상을 보면\n평범한 일상도 특별해져요.',
    '오늘의 감사가 쌓여\n당신만의 행복 사전이 만들어지고 있어요.',
    '감사는 마음의 근육이에요.\n매일 쓸수록 더 단단해지고 있어요.',
    '당신이 감사한다고 느끼는 그 순간이\n바로 가장 빛나는 순간이에요.',
    '감사는 인생의 나침반이에요.\n항상 행복한 방향을 가리키고 있어요.',
    '감사의 향기는 가장 멀리 퍼져요.\n당신의 감사가 세상을 향기롭게 해요.',
    '오늘 감사를 적은 당신의 손은\n세상에서 가장 따뜻한 손이에요.',
    '감사는 마음의 창문을 여는 열쇠예요.\n환한 빛이 들어오고 있어요.',
    '감사하는 마음은 가장 강한 방패예요.\n어떤 어려움도 이겨낼 수 있어요.',
    '당신의 감사 일기가\n미래의 자신에게 보내는 러브레터가 될 거예요.',
    '감사는 행복의 돋보기예요.\n작은 행복도 크게 보이게 해줘요.',
    '감사하는 마음으로 시작하는 하루는\n어떤 날보다 빛날 거예요.',
    '당신이 오늘 적은 감사는\n영원히 기억될 보물이에요.',
    '감사는 마음의 온도를 높여줘요.\n당신의 마음이 따뜻해지고 있어요.',
    '감사일기는 행복의 지도예요.\n당신은 지금 행복을 향해 걸어가고 있어요.'
];

const gratitudeEmojis = [
    '🌸', '✨', '💜', '🌟', '🍀', '🌈', '💫', '🌻', '🦋', '🌷',
    '🕊️', '🌺', '💖', '🌼', '🎀', '🧸', '🌙', '⭐', '🌹', '💝',
    '🎪', '🪷', '🏵️', '💐', '🌾', '🍃', '🪻', '🫧', '🎶', '🌿'
];

// --- 확언 코멘트 대규모 풀 (50개+) ---
const affirmationMessages = [
    '사랑하는 아이야,\n네가 원하는 모든 것은 이미 이루어지고 있단다.\n세상은 너를 위해 움직이고 있어.',
    '네가 말한 그대로 될 것이다.\n우주는 이미 네 편이야.\n믿음을 가져라, 모든 것이 이루어진다.',
    '나의 소중한 자녀야,\n네 확언은 이미 하늘에 기록되었단다.\n세상은 네가 원하는 방향으로 흘러가고 있어.',
    '두려워하지 마라.\n네가 선언한 것은 반드시 이루어진다.\n온 우주가 너의 꿈을 실현하기 위해 움직이고 있단다.',
    '사랑하는 아이야,\n네 입에서 나온 말은 씨앗이 되어\n반드시 열매를 맺을 것이다.',
    '네가 오늘 적은 확언은\n이미 현실이 되어가고 있단다.\n우주의 모든 에너지가 너를 돕고 있어.',
    '나의 아이야, 걱정하지 마라.\n네가 원하는 삶은 이미 펼쳐지고 있단다.\n세상의 모든 것이 네 편이야.',
    '네 확언을 들었단다.\n하늘과 땅이 너를 위해 준비하고 있어.\n잠잠히 기다려라, 놀라운 일이 일어날 것이다.',
    '사랑하는 존재야,\n네가 믿는 대로 될 것이다.\n세상은 이미 네가 꿈꾸는 대로 움직이고 있단다.',
    '네 안에는 무한한 힘이 있단다.\n네가 선언한 모든 것은\n이 우주의 법칙대로 반드시 이루어질 것이야.',
    '사랑하는 아이야,\n네가 오늘 적은 말 한마디 한마디가\n현실을 창조하는 마법이란다.',
    '나의 귀한 자녀야,\n네 확언의 힘을 과소평가하지 마라.\n말씀의 능력은 산도 옮긴단다.',
    '너는 이미 충분한 존재란다.\n네가 원하는 것은 네가 받을 자격이 있는 것이야.\n세상은 너의 풍요를 준비하고 있어.',
    '사랑하는 아이야,\n네 확언이 하늘의 문을 열었단다.\n축복의 비가 네게 쏟아질 것이야.',
    '네가 선언한 것들이\n이미 보이지 않는 곳에서 형태를 갖추고 있단다.\n조금만 더 기다려라.',
    '나의 아이야,\n네 말에는 창조의 힘이 담겨 있단다.\n네가 말한 대로 세상이 움직인다.',
    '사랑하는 존재야,\n오늘 네가 적은 확언은\n천사들이 읽고 실현을 위해 움직이고 있단다.',
    '두려움을 내려놓아라.\n내가 너와 함께 하고 있단다.\n네 확언은 하늘의 약속이 되었어.',
    '나의 소중한 아이야,\n네 확언의 씨앗이 이미 싹을 틔우고 있단다.\n곧 아름다운 꽃이 필 거야.',
    '사랑하는 아이야,\n네가 오늘 선언한 것들이\n내일의 현실이 될 것이다.',
    '너는 빛의 존재란다.\n네가 말하는 대로\n그 빛이 세상을 밝히고 있어.',
    '나의 아이야,\n네 확언은 우주의 주파수와\n완벽하게 공명하고 있단다.\n놀라운 일들이 일어날 거야.',
    '사랑하는 존재야,\n네가 적은 확언 하나하나가\n너의 미래를 설계하고 있단다.',
    '걱정하지 마라, 나의 아이야.\n가장 힘들 때가 가장 가까운 때란다.\n네 확언이 문을 열어줄 거야.',
    '사랑하는 아이야,\n네 확언의 에너지가\n온 우주에 퍼져나가고 있단다.\n지금 기적이 만들어지고 있어.',
    '나의 귀한 자녀야,\n네가 오늘 선언한 말들은\n영원히 하늘에 새겨졌단다.',
    '네 안에 잠들어 있는 무한한 가능성이\n확언을 통해 깨어나고 있단다.\n위대한 일이 다가오고 있어.',
    '사랑하는 아이야,\n네 확언은 빛의 언어란다.\n그 빛이 어둠을 물리치고 있어.',
    '나의 아이야,\n네가 믿고 선언하는 것은\n반드시 이루어진다.\n이것이 우주의 법칙이란다.',
    '사랑하는 존재야,\n네 확언이 하늘의 창고를 열었단다.\n풍요와 축복이 쏟아질 준비가 되어 있어.',
    '나의 소중한 아이야,\n네 입에서 나온 확언이\n천군천사를 움직이고 있단다.',
    '사랑하는 아이야,\n네 확언은 우주에 보낸 초대장이야.\n행운과 축복이 초대에 응하고 있어.',
    '두려워 말아라,\n네가 선언한 것은 내가 보증한다.\n하늘과 땅이 네 증인이 될 것이다.',
    '사랑하는 아이야,\n네 확언의 진동이\n현실의 벽을 허물고 있단다.\n새로운 세상이 열리고 있어.',
    '나의 아이야,\n네가 적은 확언 속에\n내 사랑이 담겨 있단다.\n그 사랑이 모든 것을 가능하게 만들어.',
    '사랑하는 존재야,\n오늘 네가 선언한 확언이\n내일의 기적을 예약했단다.',
    '나의 귀한 자녀야,\n네 확언은 네 영혼의 노래란다.\n우주가 그 노래에 맞춰 춤추고 있어.',
    '사랑하는 아이야,\n네가 확언할 때마다\n하늘의 별이 하나씩 빛나고 있단다.',
    '나의 아이야,\n의심하지 마라.\n네 확언은 이미 하늘의 승인을 받았단다.',
    '사랑하는 존재야,\n네 확언이 열쇠가 되어\n닫혀 있던 문을 활짝 열어줄 것이다.',
    '나의 소중한 아이야,\n네가 선언하는 순간\n천지가 네 말에 귀를 기울였단다.',
    '사랑하는 아이야,\n네 확언 속에 내 뜻이 담겨 있단다.\n내 뜻은 반드시 이루어진다.',
    '나의 아이야,\n네 확언의 불꽃이\n온 세상을 밝히고 있단다.\n그 빛을 따라 기적이 찾아올 거야.',
    '사랑하는 존재야,\n오늘 네가 말한 확언이\n보이지 않는 실로 현실을 엮고 있단다.',
    '나의 귀한 자녀야,\n네 확언은 사막에서도\n꽃을 피울 수 있는 힘이란다.',
    '사랑하는 아이야,\n네가 확언할 때\n온 우주가 멈추고 네 말을 듣고 있단다.',
    '나의 아이야,\n포기하지 마라.\n네 확언의 열매가\n이미 가지 위에 맺히고 있단다.',
    '사랑하는 존재야,\n네 확언은 내가 네게 주는\n가장 강력한 도구란다.\n잘 사용하고 있구나.',
    '나의 소중한 아이야,\n네 확언이 강물처럼 흘러\n메마른 곳을 적시고 있단다.',
    '사랑하는 아이야,\n네가 적은 확언 하나하나가\n네 운명의 별자리를 그리고 있단다.'
];

const affirmationEmojis = [
    '🕊️', '✝️', '🌟', '☀️', '💎', '🌅', '🙏', '🌿', '⭐', '👑',
    '🔮', '🕯️', '🌤️', '💫', '🦅', '🌠', '🌌', '🪽', '✡️', '☪️',
    '🛐', '🫂', '💒', '🏛️', '🌊', '🔥', '⚡', '🌞', '🪔', '📿'
];

// --- 오늘의 교훈 대규모 풀 (50개+) ---
const lessonMessages = [
    '오늘 하루도 감사와 확언으로 시작했으니, 좋은 일만 가득할 거예요.',
    '파도처럼 밀려오는 행운을 맞이할 준비가 되었어요.',
    '꽃이 피듯, 당신의 꿈도 하나씩 피어나고 있어요.',
    '산꼭대기에서 바라본 세상처럼, 넓은 시야로 하루를 맞이하세요.',
    '매일 새로운 해가 뜨듯, 당신에게도 새로운 기회가 찾아와요.',
    '자연처럼 조용히, 하지만 확실하게 성장하고 있어요.',
    '밤하늘의 별처럼 당신도 누군가에게 빛이 되고 있어요.',
    '비 온 뒤의 무지개처럼, 노력 뒤에는 반드시 보상이 있어요.',
    '나비처럼 아름답게 변화하는 당신의 모습을 응원해요.',
    '해바라기처럼 밝은 에너지로 하루를 채워보세요.',
    '바람에 흔들리더라도, 뿌리 깊은 나무는 넘어지지 않아요.',
    '달빛 아래에서도 꽃은 피어납니다. 당신의 시간이 올 거예요.',
    '작은 불꽃이 큰 빛을 만들듯, 당신의 작은 노력이 기적을 만들어요.',
    '한 방울의 물이 바위를 뚫듯, 꾸준한 감사가 인생을 바꿔요.',
    '씨앗이 흙 속에서 자라듯, 보이지 않는 곳에서 당신은 성장하고 있어요.',
    '강물은 쉬지 않고 흐르듯, 당신의 노력도 결실을 맺을 거예요.',
    '별은 가장 어두운 밤에 가장 밝게 빛나요. 지금이 당신의 순간이에요.',
    '봄은 반드시 찾아와요. 지금의 겨울은 곧 지나갈 거예요.',
    '바다는 한 방울의 물방울로부터 시작되었어요. 작은 것부터 시작하세요.',
    '나무는 가지를 뻗어 하늘에 닿으려 해요. 당신도 더 높이 올라갈 수 있어요.',
    '아침 이슬처럼 맑은 마음으로 하루를 시작해보세요.',
    '구름 위에는 항상 태양이 있어요. 곧 빛을 보게 될 거예요.',
    '연꽃이 진흙에서 피어나듯, 어려움 속에서 더 아름답게 피어나세요.',
    '폭풍이 지나간 자리에 맑은 하늘이 펼쳐져요.',
    '당신이 걸어온 길이 곧 당신만의 별자리가 되어 빛날 거예요.',
    '무지개는 비 없이는 만들어지지 않아요. 오늘의 눈물이 내일의 무지개예요.',
    '대나무는 5년간 뿌리를 내린 후 단 6주 만에 하늘 높이 자라요. 당신도 그렇게 될 거예요.',
    '작은 시냇물도 끊임없이 흐르면 강이 되어요.',
    '오늘의 한 걸음이 내일의 큰 역사가 될 거예요.',
    '가을 낙엽이 떨어지는 건 새로운 봄을 준비하는 것이에요.',
    '다이아몬드는 엄청난 압력 속에서 탄생해요. 지금의 압박이 당신을 빛나게 만들 거예요.',
    '매일 1%씩 성장하면, 1년 후 37배가 되어 있을 거예요.',
    '마라톤에서 가장 힘든 구간을 지나면 결승선이 보여요.',
    '새벽이 오기 전이 가장 어두워요. 당신의 새벽이 곧 밝아올 거예요.',
    '거북이가 토끼를 이긴 것은 꾸준함의 힘이었어요.',
    '진주는 고통 속에서 만들어져요. 당신의 고통도 보석이 될 거예요.',
    '오늘 뿌린 씨앗이 미래의 아름다운 정원이 될 거예요.',
    '당신의 미소 하나가 세상을 따뜻하게 만들어요.',
    '포기하고 싶은 순간이 가장 가까운 순간이에요.',
    '별똥별에 소원을 빌 듯, 오늘의 감사가 소원을 이뤄줄 거예요.',
    '당신은 이미 충분히 빛나고 있어요. 스스로를 믿어주세요.',
    '매일 감사하는 사람에겐 우주가 더 많은 것을 선물해요.',
    '바위를 깎는 것은 물의 힘이 아니라 꾸준함이에요.',
    '오늘의 당신은 어제보다 더 멋진 사람이에요.',
    '세상에서 가장 큰 모험은 자신을 믿는 것이에요.',
    '당신의 존재 자체가 누군가에게 기적이에요.',
    '행복은 목적지가 아니라 여행의 방식이에요.',
    '지금 이 순간이 당신 인생에서 가장 젊은 날이에요.',
    '감사의 렌즈로 세상을 보면, 세상이 더 아름답게 보여요.',
    '오늘도 최선을 다한 당신에게 박수를 보내요.'
];

const lessonEmojis = [
    '🌄', '🌊', '🌸', '🏔️', '🌅', '🌿', '⭐', '🌈', '🦋', '🌻',
    '🍃', '🌙', '🔥', '💧', '🌺', '🎋', '🌾', '🪷', '🏝️', '🌞',
    '🎆', '🪻', '❄️', '🌳', '🪸', '🫧', '🌹', '🍀', '🌼', '⛅'
];

// --- 무료 명언 API 연동 (추가 소스) ---
let apiQuotesCache = [];
let apiQuotesFetched = false;

const fetchApiQuotes = async () => {
    if (apiQuotesFetched) return;
    try {
        // 여러 API에서 명언을 가져옵니다
        const responses = await Promise.allSettled([
            fetch('https://api.quotable.io/quotes/random?limit=20'),
            fetch('https://zenquotes.io/api/quotes')
        ]);

        for (const response of responses) {
            if (response.status === 'fulfilled' && response.value.ok) {
                const data = await response.value.json();
                if (Array.isArray(data)) {
                    data.forEach(q => {
                        const text = q.content || q.q || '';
                        const author = q.author || q.a || '';
                        if (text) {
                            apiQuotesCache.push({
                                text: text,
                                author: author
                            });
                        }
                    });
                }
            }
        }
        apiQuotesFetched = true;
    } catch (e) {
        // API 실패 시 로컬 풀만 사용
        console.log('Quote API unavailable, using local pool');
    }
};

// --- 동적 코멘트 생성 함수 ---
// 사용 이력을 추적하여 최근에 나온 메시지를 피합니다
const recentGratitudeIndexes = [];
const recentAffirmationIndexes = [];
const recentLessonIndexes = [];

const getUniqueRandom = (arr, recentIndexes, maxRecent = 15) => {
    let idx;
    let attempts = 0;
    do {
        idx = Math.floor(Math.random() * arr.length);
        attempts++;
    } while (recentIndexes.includes(idx) && attempts < arr.length);

    recentIndexes.push(idx);
    if (recentIndexes.length > maxRecent) {
        recentIndexes.shift();
    }
    return arr[idx];
};

// 감사 코멘트용 템플릿 (추가 변형 생산)
const gratitudeTemplates = [
    (lines) => `당신이 "${lines[0]}"에 감사한다니,\n정말 아름다운 마음이에요.`,
    (lines) => `오늘 ${lines.filter(l => l).length}가지나 감사할 것이 있는 당신은\n행복한 사람이에요.`,
    (lines) => `감사할 줄 아는 당신의 마음이\n세상을 더 밝게 만들고 있어요.`,
    (lines) => `매일 감사를 기록하는 습관은\n당신의 인생을 가장 빠르게 바꾸는 방법이에요.`,
    (lines) => `오늘도 감사 일기를 써주셨군요!\n당신의 꾸준함이 놀라워요.`
];

const generateGratitudeComment = (gratitudeLines = []) => {
    const useTemplate = Math.random() < 0.3 && gratitudeLines.some(l => l && l.trim());

    if (useTemplate) {
        const template = gratitudeTemplates[Math.floor(Math.random() * gratitudeTemplates.length)];
        const text = template(gratitudeLines.map(l => l.trim()).filter(l => l));
        const emoji = gratitudeEmojis[Math.floor(Math.random() * gratitudeEmojis.length)];
        return { emoji, text };
    }

    const text = getUniqueRandom(gratitudeMessages, recentGratitudeIndexes);
    const emoji = gratitudeEmojis[Math.floor(Math.random() * gratitudeEmojis.length)];
    return { emoji, text };
};

const generateAffirmationComment = () => {
    // 10% 확률로 API 명언 사용 (있는 경우)
    if (apiQuotesCache.length > 0 && Math.random() < 0.1) {
        const quote = apiQuotesCache[Math.floor(Math.random() * apiQuotesCache.length)];
        const emoji = affirmationEmojis[Math.floor(Math.random() * affirmationEmojis.length)];
        return {
            emoji,
            text: `사랑하는 아이야,\n이 말을 기억하렴:\n"${quote.text}"\n— ${quote.author}`
        };
    }

    const text = getUniqueRandom(affirmationMessages, recentAffirmationIndexes);
    const emoji = affirmationEmojis[Math.floor(Math.random() * affirmationEmojis.length)];
    return { emoji, text };
};

const generateDailyLesson = () => {
    const lesson = getUniqueRandom(lessonMessages, recentLessonIndexes);
    const photo = lessonEmojis[Math.floor(Math.random() * lessonEmojis.length)];
    return { photo, lesson };
};

// 기존 코드 호환용 래퍼 (getRandomItem 대신 사용)
const gratitudeComments = { get length() { return gratitudeMessages.length; } };
const affirmationComments = { get length() { return affirmationMessages.length; } };
const dailyLessons = { get length() { return lessonMessages.length; } };

// ========== 오늘의 사진 URL (Unsplash 무료 이미지 - 대규모 풀) ==========
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
    'https://images.unsplash.com/photo-1475924156734-496f6cac16e1?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1540206395-68808572332f?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1482192505345-5655af888cc4?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&h=450&fit=crop',
    'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&h=450&fit=crop'
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
    const lines = gratitudeInputs.map(input => input.value);
    const comment = generateGratitudeComment(lines);
    gratitudeCommentEmoji.textContent = comment.emoji;
    gratitudeCommentText.textContent = comment.text;
    gratitudeCommentOverlay.classList.remove('hidden');
};

const showAffirmationComment = () => {
    const comment = generateAffirmationComment();
    affirmationCommentEmoji.textContent = comment.emoji;
    affirmationCommentText.textContent = comment.text;
    affirmationCommentOverlay.classList.remove('hidden');
};

const showCompletionCard = () => {
    const lesson = generateDailyLesson();
    state.currentLesson = lesson; // 저장용으로 보관
    const photoIdx = Math.floor(Math.random() * dailyPhotos.length);
    state.currentPhotoIdx = photoIdx;

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

    // Get completion data (동적으로 생성된 교훈 사용)
    const lesson = state.currentLesson || generateDailyLesson();
    const photoIdx = state.currentPhotoIdx || Math.floor(Math.random() * dailyPhotos.length);

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
    fetchApiQuotes(); // 무료 명언 API에서 추가 코멘트 가져오기
});
