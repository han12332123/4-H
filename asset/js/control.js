


// 컨트롤 요소 스크립트 선언
let pauseTimeCon = 2000; // 전체 큐 길이값
let intervalTimeCon = 20; //틱 시간값 1000ms = 1s
let earthOpacityCon = 1; //지구본 녹화 값 0~1
let tempNow = 40; //시작 온도값
let tempCon = 40; //목표 온도값 백분율
let limitDate = new Date(); //종료일 기본값 오늘날짜
let startDate = '2023-1-11' //시작일
let notifiTrigger = 800; //알람 지속 시간


// 지구 글로우색상값 변경 백분율
let donutRed = 100;
let donutGreen = 100;
let donutBlue = 100;






let notifArry = [ //프로젝트명 기술
    ".",
    '.',
    '.',
    '.',
    '.',
    
]



//https://ohmyluck.com/ko/random-number/ 난수생성사이트
let notifTriggerNum = [ //알림 트리거 설정
"2023-2-1",
"2023-09-06",
"2023-03-19",
"2024-04-03",
"2024-01-14",
]






export let rankNameList = [
    {name:"",temp:0},
    {name:"",temp:0},
    {name:"",temp:0},
    {name:"전국대학4-H연합회",temp:8},
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
