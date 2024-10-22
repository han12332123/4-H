


// 컨트롤 요소 스크립트 선언
let pauseTimeCon = 2000; // 전체 큐 길이값
let intervalTimeCon = 20; //틱 시간값 1000ms = 1s
let earthOpacityCon = 0.1; //지구본 녹화 값 0~1
let tempNow = 40; //시작 온도값
let tempCon = 39.5; //목표 온도값 백분율
let limitDate = new Date(); //종료일 기본값 오늘날짜
let startDate = '2024-1-1' //시작일
let notifiTrigger = 800; //알람 지속 시간


// 지구 글로우색상값 변경 백분율
let donutRed = 100;
let donutGreen = 100;
let donutBlue = 100;






let notifArry = [ //프로젝트명 기술
    "대학4-H서울아카데미 텀블러 사용-0.1℃",
    '전북대학교4-H회 텀블러 사용-0.1℃',
    '영남대학교4-H회 텀블러 사용-0.1℃',
    '한국농수산대학교4-H회 텀블러 사용-0.1℃',
    '잔북대학교4-H회 에코백 사용-0.1℃',
]



//https://ohmyluck.com/ko/random-number/ 난수생성사이트
let notifTriggerNum = [ //알림 트리거 설정
"2024-01-01",
"2024-01-10",
"2024-01-20",
"2024-01-30",
"2024-02-10",

]






export let rankNameList = [
    {name:"대학4-H 서울아카데미",temp:0.1},
    {name:"전북대학교4-H회",temp:0.2},
    {name:"영남대학교4-H회",temp:0.1},
    {name:"한국농수산대학교4-H회",temp:0.1},
]

rankNameList.sort((a, b) => b.temp - a.temp);



// 변수 내보내기
export{
    pauseTimeCon,
    intervalTimeCon,
    earthOpacityCon,
    tempNow,
    tempCon,
    notifArry,
    notifTriggerNum,
    startDate,
    limitDate,
    notifiTrigger,
    donutRed,
    donutGreen,
    donutBlue,
}
